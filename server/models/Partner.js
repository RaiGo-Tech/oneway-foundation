import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    contactPerson: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      trim: true,
    },
    promotionType: {
      type: String,
      enum: ['sponsorship', 'csr', 'volunteer', 'media-partner', 'other'],
      required: true,
    },
    message: {
      type: String,
      max: 2000,
    },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'approved', 'rejected'],
      default: 'pending',
    },
    reviewedAt: {
      type: Date,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
    notes: {
      type: String,
      max: 1000,
    },
  },
  {
    timestamps: true,
  }
);

partnerSchema.index({ status: 1, createdAt: -1 });
partnerSchema.index({ email: 1 });

export default mongoose.model('Partner', partnerSchema);

