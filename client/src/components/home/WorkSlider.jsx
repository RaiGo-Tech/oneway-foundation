import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import StoryModal from './StoryModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import local images
import { bloodDonationImages, langarSevaImages, treatmentSupportImages } from '../../assets';

// Work data using local images
const workData = [
  {
    id: 1,
    title: "Medical Emergency Support",
    shortDescription: "Critical healthcare support for underprivileged patients",
    fullStory: "At PGI Hospital Chandigarh, we encountered Rajesh Kumar, a 35-year-old father of two who was diagnosed with a serious heart condition. Unable to afford the expensive surgery, his family was losing hope. ONEWAY FOUNDATION stepped in and arranged for his cardiac surgery, covering all medical expenses. Today, Rajesh has recovered fully and is back to work, supporting his family with renewed strength.",
    location: "PGI Hospital, Chandigarh",
    date: "December 15, 2024",
    image: treatmentSupportImages[0],
    impact: "Life-saving cardiac surgery completed successfully",
    peopleHelped: 1,
    category: "Medical Support"
  },
  {
    id: 2,
    title: "Free Sunday Food Distribution",
    shortDescription: "Weekly food distribution program for the needy",
    fullStory: "Every Sunday, ONEWAY FOUNDATION organizes a massive food distribution drive at PGI Hospital Chandigarh and surrounding areas. Our team distributes nutritious meals to over 200 families weekly, ensuring no one goes hungry. This program has been running for over 3 years and has become a beacon of hope for many struggling families in the community.",
    location: "PGI Hospital, Chandigarh",
    date: "January 5, 2025",
    image: langarSevaImages[0],
    impact: "Over 30,000 meals distributed to date",
    peopleHelped: 200,
    category: "Food Support"
  },
  {
    id: 3,
    title: "Blood Donation Camp",
    shortDescription: "Saving lives through blood donation drives",
    fullStory: "ONEWAY FOUNDATION organizes regular blood donation camps in collaboration with local hospitals and blood banks. Our volunteers work tirelessly to create awareness about the importance of blood donation. These camps have helped save numerous lives by ensuring blood is available for those in need.",
    location: "Various Locations, Chandigarh",
    date: "November 20, 2024",
    image: bloodDonationImages[0],
    impact: "500+ units of blood collected",
    peopleHelped: 500,
    category: "Blood Donation"
  },
  {
    id: 4,
    title: "Medical Treatment Support",
    shortDescription: "Supporting patients with medical treatment",
    fullStory: "ONEWAY FOUNDATION provides financial and logistical support to underprivileged patients who cannot afford expensive medical treatments. We assist with hospital admissions, medicines, and post-treatment care. This program has brought hope to many families facing medical crises.",
    location: "PGI Hospital, Chandigarh",
    date: "January 10, 2025",
    image: treatmentSupportImages[1],
    impact: "200+ patients supported",
    peopleHelped: 200,
    category: "Medical Support"
  },
  {
    id: 5,
    title: "Langar Seva Program",
    shortDescription: "Community kitchen serving meals to the needy",
    fullStory: "Our Langar Seva program provides free meals to patients and their families at PGI Hospital. Every day, our dedicated volunteers prepare and distribute nutritious food to those who cannot afford a proper meal. This service has become a lifeline for many families during their time of illness.",
    location: "PGI Hospital, Chandigarh",
    date: "December 28, 2024",
    image: langarSevaImages[1],
    impact: "10,000+ meals served",
    peopleHelped: 100,
    category: "Food Support"
  },
  {
    id: 6,
    title: "Community Health Camp",
    shortDescription: "Free health checkups for rural communities",
    fullStory: "ONEWAY FOUNDATION organizes monthly health camps in rural and underserved areas of Chandigarh. Our team of volunteer doctors provides free checkups, medicines, and health awareness. Over 1000 community members have benefited from these camps, with many receiving timely treatment for previously undiagnosed conditions.",
    location: "Village Dhanas, Chandigarh",
    date: "January 15, 2025",
    image: treatmentSupportImages[2],
    impact: "1000+ community members screened",
    peopleHelped: 1000,
    category: "Medical Support"
  }
];

const WorkSlider = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  // Animation variants for scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section 
        className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      >
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold tracking-wide mb-4">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Stories of <span className="text-orange-500">Change</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Every picture tells a story of hope, compassion, and transformation. 
              Explore our work and see the real impact we're making together.
            </p>
          </motion.div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="work-slider pb-16"
          >
            {workData.map((work, index) => (
              <SwiperSlide key={work.id} className="max-w-[400px]">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="mx-3"
                >
                  {/* Card */}
                  <motion.div 
                    variants={itemVariants}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-semibold">
                          {work.category}
                        </span>
                      </div>

                      {/* Play Button Effect */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {work.shortDescription}
                      </p>

                      {/* Location & Date */}
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{work.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{work.date}</span>
                        </div>
                      </div>

                      {/* Read Story Button */}
                      <button
                        onClick={() => setSelectedWork(work)}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                      >
                        <span>Read Full Story</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>

                      {/* Promote Your Brand Button */}
                      <a
                        href="/promote-brand"
                        className="w-full mt-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <span>Promote Your Brand</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 flex justify-between pointer-events-none px-4">
            <button className="work-slider-prev w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto hover:bg-orange-50 transition-colors group">
              <svg className="w-6 h-6 text-slate-600 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="work-slider-next w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto hover:bg-orange-50 transition-colors group">
              <svg className="w-6 h-6 text-slate-600 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {workData.map((_, index) => (
            <button
              key={index}
              className="work-slider-pagination w-3 h-3 rounded-full bg-slate-300 transition-all duration-300 hover:bg-orange-400"
            />
          ))}
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedWork && (
          <StoryModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>

      {/* Custom Styles for Swiper */}
      <style>{`
        .work-slider .swiper-slide-shadow-left,
        .work-slider .swiper-slide-shadow-right {
          display: none;
        }
        .work-slider .swiper-button-next,
        .work-slider .swiper-button-prev {
          display: none;
        }
        .work-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .work-slider .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 10px;
          background: #f97316;
        }
        .work-slider .swiper-wrapper {
          padding: 20px 0;
        }
      `}</style>
    </>
  );
};

export default WorkSlider;
