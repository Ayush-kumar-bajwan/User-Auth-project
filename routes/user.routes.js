import express from "express";
import { registerUser, loginUser, searchUser } from "../controllers/user.controller.js";
import protect from "../middlewares/authMiddleware.js";
import { validateUserRegistration, validateUserLogin, validateUserSearch } from "../utils/validator.js";
import { validateRequest } from "../middlewares/errorMiddleware.js";

const router = express.Router();

router.post("/register", validateUserRegistration, validateRequest, registerUser);
router.post("/login", validateUserLogin, validateRequest, loginUser);
router.get("/search/:query", protect, validateUserSearch, validateRequest, searchUser);

export default router;
