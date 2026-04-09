import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../middleware/errorMiddleware.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// ADMIN LOGIN
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email, isActive: true });
  if (!admin) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  admin.lastLogin = new Date();
  await admin.save();

  const token = generateToken(admin._id);

  res.status(200).json({
    success: true,
    token,
    admin: {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
  });
});

// GET CURRENT ADMIN
export const getCurrentAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.adminId);
  if (!admin) {
    return res.status(404).json({ success: false, message: "Admin not found" });
  }
  res.json({ success: true, data: admin });
});

// CHANGE PASSWORD
export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const admin = await Admin.findById(req.adminId);
  if (!admin) {
    return res.status(404).json({ success: false, message: "Admin not found" });
  }

  const isMatch = await admin.comparePassword(currentPassword);
  if (!isMatch) {
    return res.status(400).json({ success: false, message: "Current password is incorrect" });
  }

  // Hash the new password before saving
  admin.password = await bcrypt.hash(newPassword, 12);
  await admin.save();

  res.json({ success: true, message: "Password changed successfully" });
});
