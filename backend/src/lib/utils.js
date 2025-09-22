import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  try {
    res.status(400).json({ message: "uwu" });
  } catch (error) {}
};
