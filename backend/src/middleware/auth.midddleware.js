import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ message: "Unauthorized - Invalid token" });

    const user = await User.findById(decoded.userId).select("-passowrd");
    if (!user)
      return res.status(401).json({ message: "Unauthorized - Invalid User" });
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in Protect route middleware", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
