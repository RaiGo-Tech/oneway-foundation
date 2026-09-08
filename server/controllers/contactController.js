import ContactMessage from '../models/ContactMessage.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';
import sendEmail from '../utils/sendEmail.js';

export const submitContactMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const contactMessage = await ContactMessage.create({
    name,
    email,
    phone,
    subject,
    message,
  });

  await sendEmail({
    to: email,
    subject: 'We Received Your Message – ONEWAY FOUNDATION',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c;">Thank You for Contacting Us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message. Our team will get back to you as soon as possible.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Best regards,<br/>ONEWAY FOUNDATION Team</p>
      </div>
    `,
  });

  const adminEmail = process.env.FROM_EMAIL || 'info@onewayfoundation.info';
  await sendEmail({
    to: adminEmail,
    subject: `New Contact Message: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  });

  res.status(201).json({
    success: true,
    message: 'Message sent successfully',
    data: contactMessage,
  });
});

export const getAllMessages = asyncHandler(async (req, res) => {
  const { isRead, page = 1, limit = 10 } = req.query;
  const query = {};
  if (isRead !== undefined) query.isRead = isRead === 'true';

  const messages = await ContactMessage.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  const total = await ContactMessage.countDocuments(query);
  const unreadCount = await ContactMessage.countDocuments({ isRead: false });

  res.json({
    success: true,
    data: messages,
    pagination: {
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    },
    unreadCount,
  });
});

export const markMessageAsRead = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const message = await ContactMessage.findByIdAndUpdate(
    id,
    { isRead: true, readAt: new Date() },
    { new: true }
  );

  if (!message) {
    return res.status(404).json({ success: false, message: 'Message not found' });
  }

  res.json({
    success: true,
    message: 'Message marked as read',
    data: message,
  });
});

export const deleteMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const message = await ContactMessage.findByIdAndDelete(id);

  if (!message) {
    return res.status(404).json({ success: false, message: 'Message not found' });
  }

  res.json({
    success: true,
    message: 'Message deleted successfully',
  });
});

export const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await ContactMessage.countDocuments({ isRead: false });

  res.json({
    success: true,
    data: { unreadCount: count },
  });
});

