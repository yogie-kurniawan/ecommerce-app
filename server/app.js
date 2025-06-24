import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Succeeded!",
  });
});

const startServer = async () => {
  try {
    // const URI = process.env.MONGO_URI;
    // await connectDB(URI);
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server startup error:", error.message);
  }
};

startServer();
