import express from "express";
import productRoutes from "./productRoutes.js";
import orderRoutes from "./orderRoutes.js";
import userRoutes from "./userRoutes.js";
import adminRoutes from "./adminRoutes.js";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/admins", adminRoutes);
router.use("/orders", orderRoutes);

export default router;
