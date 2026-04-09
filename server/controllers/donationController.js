import crypto from "crypto";
import razorpay from "../config/razorpay.js";
import Donation from "../models/Donation.js";
import sendEmail from "../utils/sendEmail.js";
import donationReceiptTemplate from "../utils/donationReceiptTemplate.js";

/* =====================================================
   CREATE RAZORPAY ORDER
===================================================== */
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const options = {
      amount: Number(amount) * 100, // INR → paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ message: "Order creation failed" });
  }
};

/* =====================================================
   VERIFY PAYMENT + SAVE DONATION + SEND EMAIL
===================================================== */
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      donor,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({ message: "Payment data missing" });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    // ✅ SAVE DONATION
    const donation = await Donation.create({
      name: donor.name,
      email: donor.email,
      phone: donor.phone,
      pan: donor.pan || "",
      amount: donor.amount,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: "SUCCESS",
    });

    // ✅ SEND EMAIL RECEIPT
    await sendEmail({
      to: donation.email,
      subject: "Donation Receipt – ONEWAY FOUNDATION",
      html: donationReceiptTemplate(donation),
    });

    res.status(200).json({
      success: true,
      message: "Payment verified & receipt sent",
    });
  } catch (error) {
    console.error("Verify Payment Error:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};

/* =====================================================
   GET ALL DONATIONS (ADMIN)
===================================================== */
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.error("Fetch Donations Error:", error);
    res.status(500).json({ message: "Failed to fetch donations" });
  }
};

/* =====================================================
   RESEND EMAIL RECEIPT (ADMIN)
===================================================== */
export const resendReceipt = async (req, res) => {
  try {
    const { donationId } = req.body;

    if (!donationId) {
      return res.status(400).json({ message: "Donation ID required" });
    }

    const donation = await Donation.findById(donationId);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    await sendEmail({
      to: donation.email,
      subject: "Donation Receipt – ONEWAY FOUNDATION",
      html: donationReceiptTemplate(donation),
    });

    res.status(200).json({
      success: true,
      message: "Receipt email resent successfully",
    });
  } catch (error) {
    console.error("Resend Receipt Error:", error);
    res.status(500).json({ message: "Email resend failed" });
  }
};
