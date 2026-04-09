import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB Connected');
};

const createAdmin = async () => {
  try {
    await connectDB();
    
    const adminData = {
      email: process.env.ADMIN_EMAIL || "admin@onewayfoundation.in",
      password: process.env.ADMIN_PASSWORD || "Admin@123",
      name: process.env.ADMIN_NAME || "Admin",
      role: "admin",
    };

    const existingAdmin = await Admin.findOne({ email: adminData.email });
    
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit(0);
    }

    await Admin.create(adminData);
    console.log('Admin created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

createAdmin();
