import express from "express";
const router = express.Router();
import { signin } from "../controllers/authController.js";

router.post("/signin", signin);

export default router;
