import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signup Routes");
});

router.get("/login", (req, res) => {
  res.send("Login Routes");
});

router.get("/logout", (req, res) => {
  res.send("logout Routes");
});

export default router;
