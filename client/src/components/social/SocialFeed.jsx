import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images
import { langarSevaImages, bloodDonationImages, treatmentSupportImages, volunteerImages, awardImages } from '../../assets';

// Platform icons
const PlatformIcon = ({ platform }) => {
  const icons = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  };
  return icons[platform] || null;
};

// Skeleton loader
const SocialCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
    <div className="aspect-[4/3] bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="flex justify-between pt-2">
        <div className="h-3 bg-gray-200 rounded w-16" />
        <div className="h-3 bg-gray-200 rounded w-16" />
      </div>
    </div>
  </div>
);

// Social media card
const SocialCard = ({ post, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const platformColors = {
    instagram: 'from-pink-500 via-purple-500 to-orange-500',
    facebook: 'from-blue-600 to-blue-700',
    youtube: 'from-red-600 to-red-700',
    twitter: 'from-slate-900 to-slate-800',
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {!imageLoaded && <SocialCardSkeleton />}
          <img
            src={post.mediaUrl}
            alt={post.caption ? truncateText(post.caption, 50) : 'Social media post'}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Platform Badge */}
          <div className={`absolute top-3 left-3 p-2 rounded-full bg-gradient-to-br ${platformColors[post.platform]} text-white shadow-lg`}>
            <PlatformIcon platform={post.platform} />
          </div>

          {/* Video indicator */}
          {post.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Caption */}
          <div className="flex-1 mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {isExpanded ? post.caption : truncateText(post.caption, 100)}
            </p>
            {post.caption && post.caption.length > 100 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-orange-600 text-sm font-semibold mt-1 hover:underline"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-gray-500 text-xs">
              {new Date(post.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            
            <div className="flex items-center gap-4">
              {/* Likes */}
              <span className="flex items-center gap-1 text-gray-500 text-xs">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                {post.likes.toLocaleString()}
              </span>
              
              {/* Comments */}
              <span className="flex items-center gap-1 text-gray-500 text-xs">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                {post.comments.toLocaleString()}
              </span>
            </div>
          </div>

          {/* View on Social Media CTA */}
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-50 text-gray-700 text-sm font-semibold hover:bg-orange-50 hover:text-orange-600 transition-all group/btn"
          >
            View on {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

// Horizontal slider for Home page
const SocialFeedSlider = ({ posts, onLoadMore, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = { mobile: 1, tablet: 2, desktop: 3 };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= posts.length - itemsToShow.desktop ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? posts.length - itemsToShow.desktop : prev - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / itemsToShow.desktop)}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {posts.map((post, index) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
              <SocialCard post={post} index={index} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-orange-50 transition-colors z-10"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-orange-50 transition-colors z-10"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
};

// Main SocialFeed component
const SocialFeed = ({ 
  title = 'Latest Updates',
  subtitle = 'Follow us on social media',
  viewAllLink = 'https://instagram.com/onewayfoundation',
  showSlider = false,
  limit = 8,
}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data - using local images
  const mockPosts = [
    {
      id: '1',
      platform: 'instagram',
      type: 'image',
      mediaUrl: langarSevaImages[0],
      caption: 'Every Sunday, we distribute free meals at PGI Hospital Chandigarh. Your support makes this possible! 🙏❤️ #OneWayFoundation #FoodDistribution #ServiceToHumanity',
      date: '2024-01-15',
      likes: 1234,
      comments: 89,
      permalink: 'https://instagram.com/p/example1',
    },
    {
      id: '2',
      platform: 'facebook',
      type: 'image',
      mediaUrl: volunteerImages[0],
      caption: 'Education is the most powerful weapon which you can use to change the world. Supporting underprivileged children with books and supplies. 📚✨ #EducationForAll #OneWayFoundation',
      date: '2024-01-14',
      likes: 892,
      comments: 45,
      permalink: 'https://facebook.com/p/example2',
    },
    {
      id: '3',
      platform: 'instagram',
      type: 'image',
      mediaUrl: treatmentSupportImages[0],
      caption: 'Free medical camp organized yesterday at rural area. Over 200 patients received free checkups and medicines. 🏥💊 #MedicalCamp #Healthcare #OneWayFoundation',
      date: '2024-01-13',
      likes: 2156,
      comments: 123,
      permalink: 'https://instagram.com/p/example3',
    },
    {
      id: '4',
      platform: 'youtube',
      type: 'video',
      mediaUrl: langarSevaImages[1],
      caption: 'Watch our volunteers in action - Sunday Langar Seva at PGI Hospital. Every contribution counts! 🍛🙌 #LangarSeva #OneWayFoundation #Chandigarh',
      date: '2024-01-12',
      likes: 3421,
      comments: 201,
      permalink: 'https://youtube.com/watch?v=example4',
    },
    {
      id: '5',
      platform: 'twitter',
      type: 'image',
      mediaUrl: volunteerImages[1],
      caption: 'Women empowerment through skill development! Our latest vocational training program has helped 50 women become self-reliant. 👩‍🎓💪 #WomenEmpowerment #SkillDevelopment',
      date: '2024-01-11',
      likes: 756,
      comments: 34,
      permalink: 'https://twitter.com/onewayfoundation/status/example5',
    },
    {
      id: '6',
      platform: 'instagram',
      type: 'image',
      mediaUrl: volunteerImages[2],
      caption: 'Our volunteers are the heart of ONEWAY FOUNDATION. Thank you for your dedication and service! 🙌❤️ #Volunteers #TeamWork #OneWayFoundation',
      date: '2024-01-10',
      likes: 1890,
      comments: 156,
      permalink: 'https://instagram.com/p/example6',
    },
    {
      id: '7',
      platform: 'facebook',
      type: 'image',
      mediaUrl: bloodDonationImages[0],
      caption: 'Distributing ration kits to families in need. Together we can make a difference! 🥫📦 #RationDistribution #HelpThoseInNeed #OneWayFoundation',
      date: '2024-01-09',
      likes: 1102,
      comments: 67,
      permalink: 'https://facebook.com/p/example7',
    },
    {
      id: '8',
      platform: 'instagram',
      type: 'image',
      mediaUrl: awardImages[0],
      caption: 'Joy on their faces says it all! Thank you to all our donors for making this possible. ❤️✨ #Donation #MakeADifference #OneWayFoundation',
      date: '2024-01-08',
      likes: 2567,
      comments: 189,
      permalink: 'https://instagram.com/p/example8',
    },
  ];

  // API fetch placeholder - ready for real integration
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // ====================
      // API INTEGRATION PLACEHOLDER
      // ====================
      // 
      // For real API integration, uncomment and configure:
      //
      // const response = await fetch(
      //   `https://graph.facebook.com/v18.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${import.meta.env.VITE_INSTAGRAM_TOKEN}`
      // );
      // const data = await response.json();
      // const formattedPosts = data.data.map(post => ({
      //   id: post.id,
      //   platform: 'instagram',
      //   type: post.media_type === 'VIDEO' ? 'video' : 'image',
      //   mediaUrl: post.media_url,
      //   caption: post.caption || '',
      //   date: post.timestamp,
      //   likes: 0,
      //   comments: 0,
      //   permalink: post.permalink,
      // }));
      //
      // Similar integration for:
      // - Facebook Graph API
      // - YouTube Data API
      // - Twitter/X API
      //
      // ====================

      // Using mock data for now
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      setPosts(mockPosts.slice(0, limit));
    } catch (err) {
      setError('Failed to load social media posts. Please try again later.');
      console.error('Social feed error:', err);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchPosts();
    
    // Cleanup function
    return () => {
      setPosts([]);
      setLoading(true);
      setError(null);
    };
  }, [fetchPosts]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <SocialCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <p className="text-red-500 font-medium mb-4">{error}</p>
            <button
              onClick={fetchPosts}
              className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Posts Grid or Slider */}
        {!loading && !error && (
          <>
            {showSlider ? (
              <SocialFeedSlider 
                posts={posts} 
                onLoadMore={fetchPosts} 
                loading={loading} 
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                  {posts.map((post, index) => (
                    <SocialCard key={post.id} post={post} index={index} />
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* View More CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <a
                href={viewAllLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105 group"
              >
                View More on Social Media
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default SocialFeed;
