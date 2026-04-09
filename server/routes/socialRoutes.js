import express from 'express';
import { 
  createSocialPost, 
  getAllPosts,
  getPostsForAdmin,
  updateSocialPost, 
  deleteSocialPost,
  getSocialStats 
} from '../controllers/socialController.js';
import { auth } from '../middleware/authMiddleware.js';
import { validate, sanitizeInput } from '../middleware/validateMiddleware.js';
import { socialPostSchema } from '../middleware/validateMiddleware.js';

const router = express.Router();

// Public route - Get posts for website
router.get('/', getAllPosts);

// Protected routes - Admin only
router.post('/', auth, validate(socialPostSchema), sanitizeInput, createSocialPost);
router.get('/admin', auth, getPostsForAdmin);
router.get('/stats', auth, getSocialStats);
router.put('/:id', auth, updateSocialPost);
router.delete('/:id', auth, deleteSocialPost);

export default router;

