const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  // Personal Details
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  fatherName: {
    type: String,
    required: true,
    trim: true
  },
  
  // Address Details
  address: {
    type: String,
    required: true
  },
  permanentAddress: {
    type: String,
    required: true
  },
  
  // Contact Details
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  
  // Employment Details
  employmentType: {
    type: String,
    enum: ['employed', 'self-employed', 'business', 'student', 'homemaker', 'retired', 'other'],
    required: true
  },
  occupation: {
    type: String,
    trim: true
  },
  
  // Membership Details
  membershipType: {
    type: String,
    enum: ['life', 'ordinary'],
    required: true
  },
  membershipFee: {
    type: Number,
    default: 0
  },
  
  // Donation Details
  donationPlan: {
    type: String,
    enum: ['200', '300', '500', 'one-time'],
    required: true
  },
  oneTimeAmount: {
    type: Number,
    default: 0
  },
  
  // Documents
  idProofType: {
    type: String,
    enum: ['voter-id', 'passport', 'ration-card', 'aadhar', 'driving-license'],
    required: true
  },
  idProofFile: {
    type: String, // File path or URL
    required: true
  },
  digitalSignature: {
    type: String, // File path or URL
    required: true
  },
  
  // Declaration
  declaration: {
    type: Boolean,
    required: true,
    default: false
  },
  
  // Status
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  rejectionReason: {
    type: String,
    default: ''
  },
  verifiedAt: {
    type: Date
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
}, {
  timestamps: true
});

// Index for faster queries
memberSchema.index({ status: 1, createdAt: -1 });
memberSchema.index({ email: 1 });

module.exports = mongoose.model('Member', memberSchema);
