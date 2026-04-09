import Partner from '../models/Partner.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';
import sendEmail from '../utils/sendEmail.js';

export const createPartnerInquiry = asyncHandler(async (req, res) => {
  const { companyName, contactPerson, email, phone, website, promotionType, message } = req.body;

  const partner = await Partner.create({
    companyName,
    contactPerson,
    email,
    phone,
    website,
    promotionType,
    message,
  });

  await sendEmail({
    to: email,
    subject: 'Partner Inquiry Received – ONEWAY FOUNDATION',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c;">Thank You for Your Interest!</h2>
        <p>Dear ${contactPerson},</p>
        <p>We have received your partner inquiry for <strong>${companyName}</strong>.</p>
        <p>Our team will review your application and get back to you within 2-3 business days.</p>
        <p>Best regards,<br/>ONEWAY FOUNDATION Team</p>
      </div>
    `,
  });

  res.status(201).json({
    success: true,
    message: 'Partner inquiry submitted successfully',
    data: partner,
  });
});

export const getAllPartners = asyncHandler(async (req, res) => {
  const { status, page = 1, limit = 10 } = req.query;
  const query = {};
  if (status) query.status = status;

  const partners = await Partner.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  const total = await Partner.countDocuments(query);

  res.json({
    success: true,
    data: partners,
    pagination: {
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    },
  });
});

export const getPartnerStats = asyncHandler(async (req, res) => {
  const stats = await Partner.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  const total = await Partner.countDocuments();

  res.json({
    success: true,
    data: {
      total,
      pending: stats.find((s) => s._id === 'pending')?.count || 0,
      reviewed: stats.find((s) => s._id === 'reviewed')?.count || 0,
      approved: stats.find((s) => s._id === 'approved')?.count || 0,
      rejected: stats.find((s) => s._id === 'rejected')?.count || 0,
    },
  });
});

export const updatePartnerStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const partner = await Partner.findByIdAndUpdate(
    id,
    {
      status,
      notes,
      reviewedAt: new Date(),
      reviewedBy: req.adminId,
    },
    { new: true, runValidators: true }
  );

  if (!partner) {
    return res.status(404).json({ success: false, message: 'Partner not found' });
  }

  await sendEmail({
    to: partner.email,
    subject: `Partner Application ${status === 'approved' ? 'Approved' : 'Update'} – ONEWAY FOUNDATION`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: ${status === 'approved' ? '#16a34a' : '#ea580c'};">Application ${status === 'approved' ? 'Approved' : 'Updated'}</h2>
        <p>Dear ${partner.contactPerson},</p>
        <p>Your partner application for <strong>${partner.companyName}</strong> has been <strong>${status}</strong>.</p>
        ${notes ? `<p>Notes: ${notes}</p>` : ''}
        <p>Best regards,<br/>ONEWAY FOUNDATION Team</p>
      </div>
    `,
  });

  res.json({
    success: true,
    message: `Partner ${status} successfully`,
    data: partner,
  });
});

export const deletePartner = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const partner = await Partner.findByIdAndDelete(id);

  if (!partner) {
    return res.status(404).json({ success: false, message: 'Partner not found' });
  }

  res.json({
    success: true,
    message: 'Partner deleted successfully',
  });
});

