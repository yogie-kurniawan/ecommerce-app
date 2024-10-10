import mongoose from "mongoose";

export const connectDB = async (URI) => {
  try {
    const conn = await mongoose.connect(URI);
    console.log("Connected to MongoDB"); // Success message
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message); // Error message
    process.exit(1); // Exit process with failure
  }
};
