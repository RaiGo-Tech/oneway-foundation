import { asyncHandler } from '../middleware/errorMiddleware.js';
import { chatAI } from '../services/aiService.js';
import Joi from 'joi';

const messageSchema = Joi.object({
  message: Joi.string().trim().min(1).max(1000).required(),
});

// Specific rate limiter for AI (20/min/IP)
import rateLimit from 'express-rate-limit';
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 20,
  message: { success: false, message: 'Too many AI requests. Please wait 1 minute.' },
  standardHeaders: true,
  legacyHeaders: false,
});

export const chatAIHandler = [aiLimiter, asyncHandler(async (req, res) => {
  const { error } = messageSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  const { message } = req.body;
  
  // Sanitize
  const sanitizedMessage = message.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Log request (IP anonymized)
  console.log(`AI Chat: ${req.ip.slice(0, 7)}... | "${sanitizedMessage.slice(0, 50)}..."`);

  const response = await chatAI(sanitizedMessage);

  res.status(200).json({
    success: true,
    response,
    timestamp: new Date().toISOString(),
  });
})];

