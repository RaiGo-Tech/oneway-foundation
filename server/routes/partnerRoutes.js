import express from 'express';
import { 
  createPartnerInquiry, 
  getAllPartners, 
  getPartnerStats,
  updatePartnerStatus,
  deletePartner 
} from '../controllers/partnerController.js';
import { auth } from '../middleware/authMiddleware.js';
import { validate, sanitizeInput } from '../middleware/validateMiddleware.js';
import { partnerSchema } from '../middleware/validateMiddleware.js';

const router = express.Router();

// Public route - Submit partner inquiry
router.post('/', validate(partnerSchema), sanitizeInput, createPartnerInquiry);

// Protected routes - Admin only
router.get('/', auth, getAllPartners);
router.get('/stats', auth, getPartnerStats);
router.put('/:id/status', auth, updatePartnerStatus);
router.delete('/:id', auth, deletePartner);

export default router;

