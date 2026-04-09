const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Member = require('../models/Member');
const { auth } = require('../middleware/authMiddleware');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/members');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only images and PDF files are allowed'));
  }
});

// @route   POST /api/members
// @desc    Submit membership application
// @access  Public
router.post('/', upload.fields([
  { name: 'idProofFile', maxCount: 1 },
  { name: 'digitalSignature', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      fullName,
      gender,
      dateOfBirth,
      fatherName,
      address,
      permanentAddress,
      phone,
      email,
      employmentType,
      occupation,
      membershipType,
      donationPlan,
      oneTimeAmount,
      idProofType,
      declaration
    } = req.body;

    // Check if email already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: 'An application with this email already exists' });
    }

    const member = new Member({
      fullName,
      gender,
      dateOfBirth,
      fatherName,
      address,
      permanentAddress,
      phone,
      email,
      employmentType,
      occupation,
      membershipType,
      membershipFee: membershipType === 'life' ? 5000 : 500,
      donationPlan,
      oneTimeAmount: oneTimeAmount ? parseInt(oneTimeAmount) : 0,
      idProofType,
      idProofFile: req.files['idProofFile'] ? req.files['idProofFile'][0].path : '',
      digitalSignature: req.files['digitalSignature'] ? req.files['digitalSignature'][0].path : '',
      declaration,
      status: 'pending'
    });

    await member.save();

    res.status(201).json({
      message: 'Membership application submitted successfully',
      memberId: member._id
    });
  } catch (error) {
    console.error('Error creating member:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/members
// @desc    Get all members (admin)
// @access  Private (Admin only)
router.get('/', auth, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (status) {
      query.status = status;
    }

    const members = await Member.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Member.countDocuments(query);

    res.json({
      members,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/members/stats
// @desc    Get membership statistics
// @access  Private (Admin only)
router.get('/stats', auth, async (req, res) => {
  try {
    const stats = await Member.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalMembers = await Member.countDocuments();
    const totalVerified = await Member.countDocuments({ status: 'verified' });

    res.json({
      total: totalMembers,
      verified: totalVerified,
      pending: stats.find(s => s._id === 'pending')?.count || 0,
      rejected: stats.find(s => s._id === 'rejected')?.count || 0
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/members/:id
// @desc    Get member by ID (admin)
// @access  Private (Admin only)
router.get('/:id', auth, async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/members/:id/status
// @desc    Update member status (verify/reject)
// @access  Private (Admin only)
router.put('/:id/status', auth, async (req, res) => {
  try {
    const { status, rejectionReason } = req.body;
    
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    member.status = status;
    if (status === 'verified') {
      member.verifiedAt = new Date();
      member.verifiedBy = req.admin._id;
    } else if (status === 'rejected') {
      member.rejectionReason = rejectionReason || '';
    }

    await member.save();

    res.json({
      message: `Member ${status} successfully`,
      member
    });
  } catch (error) {
    console.error('Error updating member status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
