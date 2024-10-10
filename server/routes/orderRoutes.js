import express from "express";
const route = express.Router();
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect);

export default router;
