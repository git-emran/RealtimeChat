import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async (req, res) => {
  try {
    const MONGO_URI = ENV;
    if (!MONGO_URI) throw new Error("Mongo URI is not set");
    const mongo_connection = await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB connected", mongo_connection.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDb", error);
    process.exit(1);
  }
};
