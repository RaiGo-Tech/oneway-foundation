import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: {},
};

const sanitize = (str) => sanitizeHtml(str, sanitizeOptions);

export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors,
      });
    }
    next();
  };
};

export const sanitizeInput = (req, res, next) => {
  const sanitizeObject = (obj) => {
    if (typeof obj === 'string') {
      return sanitize(obj);
    }
    if (Array.isArray(obj)) {
      return obj.map(sanitizeObject);
    }
    if (typeof obj === 'object' && obj !== null) {
      const sanitized = {};
      for (const key in obj) {
        sanitized[key] = sanitizeObject(obj[key]);
      }
      return sanitized;
    }
    return obj;
  };
  req.body = sanitizeObject(req.body);
  next();
};

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const memberSchema = Joi.object({
  fullName: Joi.string().min(2).max(100).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.date().iso().required(),
  fatherName: Joi.string().min(2).max(100).required(),
  address: Joi.string().min(5).max(500).required(),
  permanentAddress: Joi.string().min(5).max(500).required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  email: Joi.string().email().required(),
  employmentType: Joi.string()
    .valid('employed', 'self-employed', 'business', 'student', 'homemaker', 'retired', 'other')
    .required(),
  occupation: Joi.string().max(100).allow(''),
  membershipType: Joi.string().valid('life', 'ordinary').required(),
  donationPlan: Joi.string().valid('200', '300', '500', 'one-time').required(),
  oneTimeAmount: Joi.number().min(0).allow(''),
  idProofType: Joi.string()
    .valid('voter-id', 'passport', 'ration-card', 'aadhar', 'driving-license')
    .required(),
  declaration: Joi.boolean().valid(true).required(),
});

export const donationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  pan: Joi.string().pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/).allow(''),
  amount: Joi.number().min(1).required(),
});

export const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).allow(''),
  subject: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(10).max(2000).required(),
});

export const partnerSchema = Joi.object({
  companyName: Joi.string().min(2).max(200).required(),
  contactPerson: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  website: Joi.string().uri().allow(''),
  promotionType: Joi.string()
    .valid('sponsorship', 'CSR', 'volunteer', 'media-partner', 'other')
    .required(),
  message: Joi.string().max(2000).allow(''),
});

export const socialPostSchema = Joi.object({
  platform: Joi.string().valid('facebook', 'instagram', 'twitter', 'linkedin', 'youtube').required(),
  postId: Joi.string().required(),
  content: Joi.string().max(2000).allow(''),
  mediaUrl: Joi.string().uri().allow(''),
  mediaType: Joi.string().valid('image', 'video', 'link').allow(''),
  postedAt: Joi.date().iso(),
});

