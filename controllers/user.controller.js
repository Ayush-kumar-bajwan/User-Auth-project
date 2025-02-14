import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validateRequest } from "../middlewares/errorMiddleware.js";

// Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// Register User
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, fullName, gender, dateOfBirth, country } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      fullName,
      gender,
      dateOfBirth,
      country,
    });

    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};


// Login User
export const loginUser = async (req, res) => {
  try {
    
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" }); // ✅ `return` prevents further execution
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" }); // ✅ `return` prevents further execution
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({ message: "Login successful", token }); // ✅ Only one response
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};


// Search User by Username or Email
export const searchUser = async (req, res, next) => {
  try {
    const { query } = req.params;
    const user = await User.findOne({ $or: [{ username: query }, { email: query }] }).select("-password");

    if (user) {
      return res.json(user); // ✅ Explicit return
    } 
    
    return res.status(404).json({ message: "User not found" }); // ✅ Explicit return

  } catch (error) {
    next(error); // ✅ Passes errors to the middleware
  }
};

