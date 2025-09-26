import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.midddleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.post("/signup", arcjetProtection, signup);

router.post("/login", arcjetProtection, login);

router.post("/logout", arcjetProtection, logout);

router.put("/update-profile", arcjetProtection, protectRoute, updateProfile);

router.get("/check", arcjetProtection, protectRoute, (req, res) =>
  res.status(200).json(req.user),
);

export default router;
