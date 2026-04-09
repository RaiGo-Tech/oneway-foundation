import SocialPost from '../models/SocialPost.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';

export const createSocialPost = asyncHandler(async (req, res) => {
  const { platform, postId, content, mediaUrl, mediaType, thumbnailUrl, postUrl, likes, comments, shares, postedAt } = req.body;

  const existingPost = await SocialPost.findOne({ platform, postId });
  if (existingPost) {
    return res.status(400).json({ success: false, message: 'Post already exists' });
  }

  const post = await SocialPost.create({
    platform,
    postId,
    content,
    mediaUrl,
    mediaType,
    thumbnailUrl,
    postUrl,
    likes: likes || 0,
    comments: comments || 0,
    shares: shares || 0,
    postedAt: postedAt || new Date(),
  });

  res.status(201).json({
    success: true,
    message: 'Social post created successfully',
    data: post,
  });
});

export const getAllPosts = asyncHandler(async (req, res) => {
  const { platform, page = 1, limit = 12 } = req.query;
  const query = { isActive: true };
  if (platform) query.platform = platform;

  const posts = await SocialPost.find(query)
    .sort({ postedAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  const total = await SocialPost.countDocuments(query);

  res.json({
    success: true,
    data: posts,
    pagination: {
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    },
  });
});

export const getPostsForAdmin = asyncHandler(async (req, res) => {
  const { platform, page = 1, limit = 12 } = req.query;
  const query = {};
  if (platform) query.platform = platform;

  const posts = await SocialPost.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  const total = await SocialPost.countDocuments(query);

  res.json({
    success: true,
    data: posts,
    pagination: {
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    },
  });
});

export const updateSocialPost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content, isActive, likes, comments, shares } = req.body;

  const post = await SocialPost.findByIdAndUpdate(
    id,
    { content, isActive, likes, comments, shares },
    { new: true, runValidators: true }
  );

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  res.json({
    success: true,
    message: 'Post updated successfully',
    data: post,
  });
});

export const deleteSocialPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await SocialPost.findByIdAndDelete(id);

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  res.json({
    success: true,
    message: 'Post deleted successfully',
  });
});

export const getSocialStats = asyncHandler(async (req, res) => {
  const stats = await SocialPost.aggregate([
    { $group: { _id: '$platform', count: { $sum: 1 } } },
  ]);

  const totalPosts = await SocialPost.countDocuments({ isActive: true });

  res.json({
    success: true,
    data: {
      total: totalPosts,
      platforms: stats.reduce((acc, s) => {
        acc[s._id] = s.count;
        return acc;
      }, {}),
    },
  });
});

