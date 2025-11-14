import express from "express";
import {
  forgotPasswordController,
  googleauthController,
  loginController,
  logoutController,
  resetPasswordController,
  signupController,
} from "../controllers/auth.controller.js";

const router = express.Router();

// User Auth API
router.post("/register", signupController);
router.post("/login", loginController);
router.get("/logout", logoutController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);
router.post("/google-auth", googleauthController);

export default router;
