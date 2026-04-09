import express from "express";
import {
  createOrder,
  verifyPayment,
  getAllDonations,
  resendReceipt
} from "../controllers/donationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/create-order", createOrder);
router.post("/verify", verifyPayment);

// ADMIN ONLY routes (protected)
router.get("/all", authMiddleware, getAllDonations);
router.post("/resend-receipt", authMiddleware, resendReceipt);

export default router;
