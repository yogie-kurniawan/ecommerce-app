import express from "express";
const route = express.Router();
import { protect, admin } from "../middlewares/authMiddleware.js";
import { getProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/products/:id", protect, getProducts);

export default router;
