import { body, param } from "express-validator";

export const validateUserRegistration = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("fullName").notEmpty().withMessage("Full Name is required"),
  body("gender").isIn(["Male", "Female", "Other"]).withMessage("Invalid gender value"),
  body("dateOfBirth").isISO8601().withMessage("Invalid date format"),
  body("country").notEmpty().withMessage("Country is required"),
];

export const validateUserLogin = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
];

export const validateUserSearch = [
  param("query").notEmpty().withMessage("Search query cannot be empty"),
];
