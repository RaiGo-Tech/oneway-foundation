import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialFeed from "../components/social/SocialFeed";

// Import all gallery images
import {
  newsImages,
  serviceImages,
  awardImages,
  volunteerImages,
  bloodDonationImages,
  langarSevaImages,
  treatmentSupportImages
} from "../assets";

// Gallery categories
const categories = [
  { id: "all", name: "All", count: 0 },
  { id: "news", name: "News & Events", count: newsImages.length },
  { id: "blood", name: "Blood Donation", count: bloodDonationImages.length },
  { id: "langar", name: "Langar Seva", count: langarSevaImages.length },
  { id: "medical", name: "Medical Camps", count: treatmentSupportImages.length },
  { id: "volunteers", name: "Volunteers", count: volunteerImages.length },
  { id: "awards", name: "Awards & Recognition", count: awardImages.length },
];

// Create gallery items from all images
const createGalleryItems = () => {
  const items = [];
  
  // News images
  newsImages.forEach((img, idx) => {
    items.push({
      id: `news-${idx}`,
      src: img,
      category: "news",
      title: "News & Events",
      description: "Coverage of our programs and events in media"
    });
  });
  
  // Blood donation images
  bloodDonationImages.forEach((img, idx) => {
    items.push({
      id: `blood-${idx}`,
      src: img,
      category: "blood",
      title: "Blood Donation Camp",
      description: "Saving lives through blood donation drives"
    });
  });
  
  // Langar Seva images
  langarSevaImages.forEach((img, idx) => {
    items.push({
      id: `langar-${idx}`,
      src: img,
      category: "langar",
      title: "Langar Seva",
      description: "Community kitchen serving meals to the needy"
    });
  });
  
  // Medical camp images
  treatmentSupportImages.forEach((img, idx) => {
    items.push({
      id: `medical-${idx}`,
      src: img,
      category: "medical",
      title: "Medical Camps",
      description: "Free healthcare services for underprivileged"
    });
  });
  
  // Volunteer images
  volunteerImages.forEach((img, idx) => {
    items.push({
      id: `volunteer-${idx}`,
      src: img,
      category: "volunteers",
      title: "Our Volunteers",
      description: "Dedicated volunteers making a difference"
    });
  });
  
  // Award images
  awardImages.forEach((img, idx) => {
    items.push({
      id: `award-${idx}`,
      src: img,
      category: "awards",
      title: "Awards & Recognition",
      description: "Recognition for our social work"
    });
  });
  
  return items;
};

const allGalleryItems = createGalleryItems();

// Update category counts
categories[0].count = allGalleryItems.length;

// Lightbox Component
const Lightbox = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        <div className="text-center mt-4">
          <h3 className="text-white text-xl font-bold">{image.title}</h3>
          <p className="text-gray-300 mt-1">{image.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Gallery Card Component
const GalleryCard = ({ item, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold w-fit mb-2">
            {item.title}
          </span>
          <p className="text-white text-sm">{item.description}</p>
        </div>

        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter items by category
  const filteredItems = activeCategory === "all"
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-gray-900 text-white py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Our Gallery
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Capturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Moments</span> of Change
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
          >
            A glimpse into our on-ground work, community engagement and the
            lives we touch through various programs and initiatives.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 leading-relaxed text-center max-w-4xl mx-auto"
        >
          <p className="text-lg">
            Our gallery represents the heart of ONEWAY FOUNDATION's work.
            Every image reflects a story of hope, resilience and positive
            change driven by collective effort and compassion.
          </p>

          <p className="text-lg">
            From education programs and medical camps to food distribution
            drives and awareness campaigns, our initiatives are documented
            to maintain transparency and share impact with our supporters.
          </p>
        </motion.div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
                <span className="ml-2 opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={setSelectedImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </section>

      {/* ================= SOCIAL MEDIA FEED ================= */}
      <SocialFeed 
        title="Latest Updates"
        subtitle="Follow our social media for more updates"
        showSlider={false}
        limit={8}
        viewAllLink="https://instagram.com/onewayfoundation"
      />

      {/* ================= TRANSPARENCY NOTE ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transparency Through Visual Documentation
          </h2>
          <p className="text-orange-100 text-lg leading-relaxed max-w-2xl mx-auto">
            We believe in complete transparency. Visual documentation of our
            programs ensures accountability and builds trust with donors,
            volunteers and partners who support our mission. Every image tells
            a story of positive change and community impact.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{allGalleryItems.length}+</div>
              <div className="text-orange-100 text-sm">Photos</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{categories.length - 1}</div>
              <div className="text-orange-100 text-sm">Categories</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-orange-100 text-sm">Programs</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
