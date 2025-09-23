import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const MONGO_URI = process.env;
    if (!MONGO_URI) throw new Error("Mongo URI is not set");
    const mongo_connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected", mongo_connection.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDb", error);
    process.exit(1);
  }
};
