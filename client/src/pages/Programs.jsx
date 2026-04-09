import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialFeed from "../components/social/SocialFeed";

// Import all service images
import {
  bloodDonationImages,
  langarSevaImages,
  treatmentSupportImages,
  awarenessImages,
  coronaSupportImages,
  computerTrainingImages,
  silayiMachineImages,
  swachhBharatImages
} from "../assets";

// Programs data with actual images from assets
const programs = [
  {
    id: 1,
    title: "Blood Donation Camp",
    description: "Organizing regular blood donation drives to save lives. We work with hospitals and blood banks to ensure safe blood supply for those in need. Our camps are equipped with medical professionals and modern equipment.",
    images: bloodDonationImages,
    category: "Healthcare",
    icon: "🩸",
    impact: "2000+ Units Collected",
    features: ["Free Blood Testing", "Medical Checkup", "Donor Recognition", "Emergency Support"]
  },
  {
    id: 2,
    title: "Langar Seva (Community Kitchen)",
    description: "Providing free meals to the needy, especially during festivals and emergencies. Our langar sevaks work tirelessly to serve nutritious food to the poor, homeless, and those in need across various locations.",
    images: langarSevaImages,
    category: "Food Security",
    icon: "🍛",
    impact: "50000+ Meals Served",
    features: ["Daily Langar", "Festival Special", "Emergency Relief", "Community Dining"]
  },
  {
    id: 3,
    title: "Medical Treatment Support",
    description: "Free medical camps, health checkups, and treatment support for underprivileged communities. We provide medicines, diagnostic services, and referrals to specialized healthcare facilities.",
    images: treatmentSupportImages,
    category: "Healthcare",
    icon: "🏥",
    impact: "10000+ Patients Treated",
    features: ["Free Checkups", "Medicine Distribution", "Specialist Consultations", "Ambulance Service"]
  },
  {
    id: 4,
    title: "Awareness Campaigns",
    description: "Conducting awareness programs on health, education, social issues, and environmental topics. We empower communities with knowledge through interactive sessions and educational materials.",
    images: awarenessImages,
    category: "Awareness",
    icon: "📢",
    impact: "50000+ Beneficiaries",
    features: ["Health Awareness", "Educational Campaigns", "Environment Programs", "Social Issues"]
  },
  {
    id: 5,
    title: "Corona Support & Relief",
    description: "During the COVID-19 pandemic, we provided essential supplies, ration kits, sanitization services, and medical support to affected families and frontline workers.",
    images: coronaSupportImages,
    category: "Emergency Relief",
    icon: "😷",
    impact: "10000+ Families Helped",
    features: ["Ration Kits", "Sanitization", "Medical Supplies", "Oxygen Support"]
  },
  {
    id: 6,
    title: "Computer Training Program",
    description: "Providing computer education to youth from disadvantaged backgrounds. Our training centers offer basic to advanced computer courses to enhance employability and digital literacy.",
    images: computerTrainingImages,
    category: "Education",
    icon: "💻",
    impact: "2000+ Trained",
    features: ["Basic Computer", "MS Office", "Internet Skills", "Digital Marketing"]
  },
  {
    id: 7,
    title: "Silayi Machine Yojna",
    description: "Providing sewing machines to women from poor families to enable them to become self-employed. This program empowers women with skills and equipment to start their own tailoring business.",
    images: silayiMachineImages,
    category: "Women Empowerment",
    icon: "🧵",
    impact: "500+ Women Empowered",
    features: ["Free Machines", "Tailoring Training", "Market Support", "Entrepreneurship"]
  },
  {
    id: 8,
    title: "Swachh Bharat Program",
    description: "Promoting cleanliness and hygiene in communities through awareness campaigns, sanitation drives, and building public awareness about the importance of a clean environment.",
    images: swachhBharatImages,
    category: "Cleanliness",
    icon: "🧹",
    impact: "100+ Cleanliness Drives",
    features: ["Awareness Campaigns", "Sanitation Drives", "Waste Management", "Community Participation"]
  }
];

// Animation variants
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
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Program Card Component
const ProgramCard = ({ program, index }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  // Rotate images automatically
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % program.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [program.images.length]);

  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-orange-200">
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={program.images[currentImage]}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 rounded-full bg-orange-500/95 text-white text-xs font-bold flex items-center gap-2">
              <span>{program.icon}</span>
              {program.category}
            </span>
          </div>

          {/* Image Dots Indicator */}
          {program.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {program.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Impact Badge */}
          <div className="absolute bottom-4 right-4">
            <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-orange-600 text-sm font-bold">
              {program.impact}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
              {program.title}
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4 flex-1">
            {program.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {program.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                {feature}
              </div>
            ))}
          </div>

          <Link
            to={`/programs/${program.id}`}
            className="inline-flex items-center justify-between gap-2 text-orange-600 font-bold group-hover:gap-3 transition-all mt-auto pt-4 border-t border-gray-100"
          >
            <span>View Details</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "50,000+", label: "Lives Impacted", icon: "👥" },
    { number: "8+", label: "Major Programs", icon: "🎯" },
    { number: "10+", label: "States Covered", icon: "🗺️" },
    { number: "500+", label: "Active Volunteers", icon: "🤝" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-orange-100 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-gray-900 text-white py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
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
            Our Initiatives
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Programs</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
          >
            Explore the wide range of programs and initiatives through which
            ONEWAY FOUNDATION works to uplift communities and create sustainable
            social impact.
          </motion.p>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <StatsSection />

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-700 leading-relaxed text-center max-w-4xl mx-auto"
        >
          <p className="text-lg">
            At ONEWAY FOUNDATION, our programs are designed to address real
            challenges faced by underprivileged communities. Each initiative
            focuses on long-term development, empowerment and self-reliance
            rather than short-term relief.
          </p>

          <p className="text-lg">
            We work closely with local communities, volunteers, professionals
            and partner organizations to ensure that our programs are relevant,
            effective and sustainable.
          </p>

          <p className="text-lg">
            Our initiatives span across education, healthcare, women
            empowerment, skill development, food security and legal awareness,
            impacting thousands of lives across multiple states in India.
          </p>
        </motion.div>
      </section>

      {/* ================= PROGRAM LIST ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
          >
            Our <span className="text-orange-500">Programs</span> & Initiatives
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Comprehensive social welfare programs designed to create lasting impact in communities
          </motion.p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Support Our Programs
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
            Your support enables us to expand our reach and strengthen our
            programs. Together, we can create meaningful and lasting change.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Donate Now
              </span>
            </Link>

            <Link
              to="/contact"
              className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

// Import React for useState
import React from "react";

export default Programs;
