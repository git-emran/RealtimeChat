import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const mongo_connection = await mongoose.connect(process.env.MONGO_URI);
    if (!mongo_connection) {
      res.status(400).json({ message: "Error connecting to Mongo" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDb", error);
    process.exit(1);
  }
};
