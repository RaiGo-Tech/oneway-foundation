import { motion } from 'framer-motion';

// Import local images for related photos
import { langarSevaImages, bloodDonationImages, treatmentSupportImages } from '../../assets';

const relatedImages = [
  langarSevaImages[0],
  bloodDonationImages[0],
  treatmentSupportImages[0],
  langarSevaImages[1],
];

const StoryModal = ({ work, onClose }) => {
  // Close on escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        >
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 rounded-full bg-orange-500/90 text-white font-semibold">
              {work.category}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {work.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{work.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{work.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-orange-600">{work.peopleHelped}+</p>
              <p className="text-sm text-slate-600">People Helped</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sky-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-sky-600">100%</p>
              <p className="text-sm text-slate-600">Impact Rate</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-5 text-center col-span-2 md:col-span-1">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-emerald-600">Success</p>
              <p className="text-sm text-slate-600">Completed</p>
            </div>
          </div>

          {/* Impact Description */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 mb-8 text-white">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Impact
            </h3>
            <p className="text-white/90 leading-relaxed">
              {work.impact}
            </p>
          </div>

          {/* Full Story */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
              The Full Story
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg">
                {work.fullStory}
              </p>
            </div>
          </div>

          {/* Additional Images Placeholder */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Related Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl bg-slate-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={img}
                    alt={`Related ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to Make a Difference?
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Your support can help us continue our mission to transform lives. 
              Every contribution matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/donate"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StoryModal;
