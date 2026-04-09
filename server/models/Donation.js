import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    pan: String,
    amount: Number,
    paymentId: String,
    orderId: String,
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
