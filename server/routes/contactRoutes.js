import express from 'express';
import { 
  submitContactMessage, 
  getAllMessages, 
  markMessageAsRead, 
  deleteMessage,
  getUnreadCount 
} from '../controllers/contactController.js';
import { auth } from '../middleware/authMiddleware.js';
import { validate, sanitizeInput } from '../middleware/validateMiddleware.js';
import { contactSchema } from '../middleware/validateMiddleware.js';

const router = express.Router();

// Public route - Submit contact message
router.post('/', validate(contactSchema), sanitizeInput, submitContactMessage);

// Protected routes - Admin only
router.get('/', auth, getAllMessages);
router.get('/unread', auth, getUnreadCount);
router.put('/:id/read', auth, markMessageAsRead);
router.delete('/:id', auth, deleteMessage);

export default router;

