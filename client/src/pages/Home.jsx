import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WorkSlider from "../components/home/WorkSlider";
import SocialFeed from "../components/social/SocialFeed";

// Import local assets for hero background
import { logos } from "../assets";
import langarSeva1 from "../../Assets/SERVICE/langer seva/corona-langer-seva.png";

const Home = () => {
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  });

  const statsY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: `url(${langarSeva1})`,
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 hero-pattern opacity-30" />
          
          {/* Floating Shapes */}
          <motion.div 
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" 
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 text-sm font-semibold tracking-wide border border-white/20">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Since 2017 • Serving Humanity
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white"
          >
            Together We Can{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Change Lives
              </span>
              {/* Underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 10 Q 50 0 100 10 T 198 10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
          >
            We support people through{" "}
            <span className="text-orange-400 font-semibold">medical support</span>,{" "}
            <span className="text-orange-400 font-semibold">education support</span>,{" "}
            <span className="text-orange-400 font-semibold">living support</span>,{" "}
            <span className="text-orange-400 font-semibold">food distribution</span>{" "}
            and <span className="text-orange-400 font-semibold">emergency help</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {/* Donate Now Button */}
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-3 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Donate Now
              </span>
            </motion.a>

            {/* Explore Our Work Button */}
            <motion.a
              href="#work-showcase"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-white border-2 border-white/30" />
              <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 text-white group-hover:text-orange-600 transition-colors duration-300">
                Explore Our Work
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section 
        ref={statsRef}
        className="relative py-16 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div 
          style={{ y: statsY }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="absolute top-1/3 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                5000+
              </div>
              <p className="text-slate-400 font-medium">Lives Impacted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                150+
              </div>
              <p className="text-slate-400 font-medium">Programs Conducted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                40+
              </div>
              <p className="text-slate-400 font-medium">Active Volunteers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                7+
              </div>
              <p className="text-slate-400 font-medium">Years of Service</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= BRAND PROMOTION TEASER (Small Banner) ================= */}
      <section className="relative py-6 bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-500/10 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white">
                💼 Want to Promote Your Brand?
              </h3>
              <p className="text-slate-400 text-sm">
                Partner with us and support humanity while gaining visibility
              </p>
            </div>
            <motion.a
              href="/promote-brand"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ================= WORK SHOWCASE SLIDER ================= */}
      <div id="work-showcase">
        <WorkSlider />
      </div>

      {/* ================= MISSION SECTION (ULTRA TRUST BUILDING) ================= */}
      <section className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -left-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" 
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-4 border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Mission</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We believe service is the highest form of humanity. ONEWAY FOUNDATION exists to uplift marginalized communities through structured, transparent, and accountable support systems.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Mission Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-slate-600 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-300" />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    We believe service is the highest form of humanity. ONEWAY FOUNDATION exists to uplift marginalized communities through structured, transparent, and accountable support systems. We are not just providing help. We are building dignity.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-300" />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vision</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    To create a society where no one sleeps hungry, no patient struggles alone, and no child is deprived of education.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                  Core Values
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: "🛡️", title: "Integrity", desc: "Transparent and accountable operations" },
                    { icon: "❤️", title: "Compassion", desc: "Empathetic service to all" },
                    { icon: "📋", title: "Accountability", desc: "Full responsibility in all actions" },
                    { icon: "🤝", title: "Community Participation", desc: "Unity in serving humanity" },
                    { icon: "⏰", title: "24×7 Service Commitment", desc: "Always available for those in need" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all cursor-default group"
                    >
                      <span className="text-2xl">{value.icon}</span>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors">{value.title}</h4>
                        <p className="text-slate-400 text-sm">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex items-center justify-center gap-4 px-6 py-4 rounded-xl bg-orange-500/10 border border-orange-500/30"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-white font-semibold">Registered NGO</span>
                </div>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">Since 2017</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">Serving Humanity</span>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/join-us"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105 group"
            >
              Become a Member
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA FEED (Slider for Home) ================= */}
      <SocialFeed 
        title="Latest Updates"
        subtitle="Follow us on social media for real-time updates on our initiatives"
        showSlider={true}
        limit={6}
        viewAllLink="https://instagram.com/onewayfoundation"
      />

      {/* ================= BRAND PROMOTION BANNER (Before Footer) ================= */}
      <section className="relative py-8 bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-500/10 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                💼 Want to Promote Your Brand?
              </h3>
              <p className="text-slate-400 text-sm">
                Partner with us and support humanity while gaining visibility
              </p>
            </div>
            <motion.a
              href="/promote-brand"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Add custom Ken Burns animation */}
      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
