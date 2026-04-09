import mongoose from 'mongoose';

const socialPostSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      enum: ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'],
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      max: 2000,
    },
    mediaUrl: {
      type: String,
    },
    mediaType: {
      type: String,
      enum: ['image', 'video', 'link'],
    },
    thumbnailUrl: {
      type: String,
    },
    postUrl: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
    postedAt: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

socialPostSchema.index({ platform: 1, createdAt: -1 });
socialPostSchema.index({ isActive: 1 });

export default mongoose.model('SocialPost', socialPostSchema);

