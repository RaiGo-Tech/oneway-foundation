import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SocialFeed from "../components/social/SocialFeed";

// Import local images
import langarSeva1 from "../../Assets/SERVICE/langer seva/corona-langer-seva.png";

// ================= COMPONENTS =================

// General Secretary Section
const GeneralSecretarySection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-slate-50 to-orange-50/30" />
      <div className="absolute inset-0 ngo-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 -right-32 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side - First */}
          <FadeInUp delay={0.1} className="lg:order-1">
            <div className="space-y-6">
              {/* Label */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-semibold"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                General Secretary's Message
              </motion.span>

              {/* Name */}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Mata Harbansh Kaur Oberoi
              </h2>

              {/* Position */}
              <p className="text-xl md:text-2xl text-orange-600 font-semibold">
                General Secretary, ONEWAY FOUNDATION
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6">
                <p className="text-lg text-slate-600 italic leading-relaxed">
                  "We believe real change happens when communities unite. Through food drives, hospital support, and education initiatives, we work tirelessly to support those in need."
                </p>
              </blockquote>

              {/* Description */}
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As the General Secretary of ONEWAY FOUNDATION, I have witnessed 
                  the transformative power of collective action. Every meal we distribute, 
                  every patient we assist, and every child we educate reinforces our 
                  commitment to serving humanity.
                </p>
                <p>
                  Our volunteers and members are the backbone of this organization. 
                  Their dedication and compassion inspire us to do more, reach further, 
                  and touch more lives every day.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-4">
                <p className="font-bold text-slate-800 text-lg">Mata Harbansh Kaur Oberoi</p>
                <p className="text-slate-500 text-sm">General Secretary</p>
              </div>
            </div>
          </FadeInUp>

          {/* Image Side - Second */}
          <FadeInUp delay={0.3} className="lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-30 scale-95" />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
              >
                <img
                  src="../Assets/IMG/MEMBERS-IMG/Mata harshbardan kaur.png"
                  alt="Mata Harbansh Kaur Oberoi - General Secretary"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/20 to-transparent" />
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-orange-500/30 rounded-3xl -z-10" />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

// Fade In Up Animation Wrapper
const FadeInUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale In Animation Wrapper
const ScaleIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// President Section
const PresidentSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50" />
      <div className="absolute inset-0 ngo-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeInUp delay={0.1} className="flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-30 scale-95" />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
              >
                <img
                  src="../Assets/IMG/MEMBERS-IMG/President Madan-Yadav .png"
                  alt="Madan Yadav - President & Founder"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/20 to-transparent" />
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-500/30 rounded-3xl -z-10" />
            </div>
          </FadeInUp>

          {/* Content Side */}
          <FadeInUp delay={0.3}>
            <div className="space-y-6">
              {/* Label */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                President's Message
              </motion.span>

              {/* Name */}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Madan Yadav
              </h2>

              {/* Position */}
              <p className="text-xl md:text-2xl text-orange-600 font-semibold">
                President & Founder, ONEWAY FOUNDATION
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6">
                <p className="text-lg text-slate-600 italic leading-relaxed">
                  "Service to humanity is service to God. Every life we touch, 
                  every smile we bring, every hope we nurture – that's our true 
                  wealth."
                </p>
              </blockquote>

              {/* Description */}
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  ONEWAY FOUNDATION was born from a simple yet powerful belief – 
                  that compassion, when combined with action, can transform lives 
                  and build a more equitable society. What began as a small 
                  initiative in 2017 has grown into a movement driven by 
                  dedication, integrity, and an unwavering commitment to those 
                  in need.
                </p>
                <p>
                  Our vision extends beyond immediate relief. We strive to create 
                  lasting change through education, healthcare, and community 
                  empowerment. We believe that true development happens when we 
                  invest in people – nurturing their potential, restoring their 
                  dignity, and opening doors to opportunities.
                </p>
                <p>
                  Every program we run, every life we touch, reflects our 
                  dedication to humanity. We are not just building an 
                  organization; we are building a family of change-makers 
                  who believe in the power of collective kindness.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-4">
                <p className="font-bold text-slate-800 text-lg">Madan Yadav</p>
                <p className="text-slate-500 text-sm">President & Founder</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

// About Foundation Section
const AboutFoundation = () => {
  const stats = [
    { value: 5000, suffix: "+", label: "Lives Impacted" },
    { value: 150, suffix: "+", label: "Programs Conducted" },
    { value: 40, suffix: "+", label: "Active Volunteers" },
    { value: 7, suffix: "+", label: "Years of Service" },
  ];

  const services = [
    { icon: "🏥", title: "Medical Support", desc: "Healthcare access for underserved communities" },
    { icon: "📚", title: "Education Support", desc: "Quality education for every child" },
    { icon: "🏠", title: "Living Support", desc: "Shelter and basic necessities" },
    { icon: "🍽️", title: "Food Distribution", desc: "Fighting hunger with love" },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <FadeInUp className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
            About ONEWAY FOUNDATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Serving Humanity Since{" "}
            <span className="text-orange-500">2017</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are a registered non-governmental organization dedicated to 
            uplifting marginalized communities through comprehensive welfare 
            programs focused on education, healthcare, and basic necessities.
          </p>
        </FadeInUp>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <ScaleIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* Special Program Highlight */}
        <FadeInUp delay={0.2}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 to-orange-700 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🍲 Free Sunday Food Distribution
                </h3>
                <p className="text-orange-100 leading-relaxed mb-4">
                  Every Sunday, we distribute free meals at{" "}
                  <span className="font-semibold text-white">PGI Hospital Chandigarh</span>{" "}
                  and other locations. This initiative ensures that no one goes 
                  hungry, especially patients and their families who travel long 
                  distances for medical treatment.
                </p>
                <p className="text-orange-100 leading-relaxed">
                  What started as a small initiative has become a weekly tradition 
                  of love and compassion, touching hundreds of lives every month.
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-orange-200 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
};

// Mission Vision Values Section
const MissionVisionValues = () => {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Our Mission",
      description: "To uplift marginalized communities by providing access to quality education, healthcare, food security, and livelihood opportunities. We believe in sustainable development through compassion, transparency, and community participation.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Our Vision",
      description: "To create a society where every individual, regardless of background, has access to basic necessities and opportunities for growth. We envision a world of equality, dignity, and shared prosperity for all.",
      gradient: "from-slate-700 to-slate-800",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Our Core Values",
      description: "Integrity, Compassion, Inclusivity, and Sustainability guide everything we do. We believe in transparent operations, empathetic service, equal opportunity, and long-term impact over temporary relief.",
      gradient: "from-orange-400 to-orange-500",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ngo-pattern opacity-3" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Our Mission, Vision & Values
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ScaleIn key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative h-full"
              >
                {/* Glass Card */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-lg shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-300" />
                
                <div className="relative h-full p-8 md:p-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`mt-8 h-1 w-0 bg-gradient-to-r ${card.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection = () => {
  const timeline = [
    {
      year: "2017",
      title: "Foundation Started",
      description: "ONEWAY FOUNDATION was established with a vision to serve humanity. A small team of dedicated individuals began their journey to make a difference.",
      icon: "🌱",
    },
    {
      year: "2018",
      title: "Medical & Education Support",
      description: "Expanded operations to provide medical assistance and educational support to underprivileged children and families in Chandigarh region.",
      icon: "🏥",
    },
    {
      year: "2019",
      title: "Sunday Food Distribution",
      description: "Launched our signature Sunday free food distribution program at PGI Hospital Chandigarh, providing meals to patients and their families.",
      icon: "🍲",
    },
    {
      year: "2020-2022",
      title: "COVID Relief & Growth",
      description: "During the pandemic, we intensified our efforts providing ration kits, medical supplies, and emergency assistance to those in need.",
      icon: "🤝",
    },
    {
      year: "2023-2024",
      title: "Expansion & Impact",
      description: "Expanded to multiple locations, increased volunteer base, and reached thousands of beneficiaries across various programs.",
      icon: "📈",
    },
    {
      year: "2025+",
      title: "Future Goals",
      description: "Continuing to grow our impact with new initiatives in skill development, women empowerment, and sustainable community programs.",
      icon: "🎯",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            The ONEWAY Story
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            From a humble beginning to a movement of change – here's how we've 
            grown together with our community.
          </p>
        </FadeInUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:[&>:nth-child(2)]:order-1"
                }`}>
                  
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 md:p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 border border-slate-100 transition-all duration-300"
                    >
                      {/* Year Badge */}
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-3">
                        {item.year}
                      </span>

                      {/* Icon */}
                      <div className="text-3xl mb-3">{item.icon}</div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Dot (Desktop) */}
                  <div className="hidden md:flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-lg shadow-orange-500/30 z-10"
                    />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= MAIN COMPONENT =================

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-slate-900 text-white py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url(${langarSeva1})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              ONEWAY FOUNDATION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed"
          >
            Learn more about our journey, values, vision and commitment towards 
            building a just, inclusive and empowered society.
          </motion.p>
        </div>
      </section>

      {/* ================= PRESIDENT SECTION ================= */}
      <PresidentSection />

      {/* ================= GENERAL SECRETARY SECTION ================= */}
      <GeneralSecretarySection />

      {/* ================= ABOUT FOUNDATION ================= */}
      <AboutFoundation />

      {/* ================= MISSION VISION VALUES ================= */}
      <MissionVisionValues />

      {/* ================= TIMELINE ================= */}
      <TimelineSection />

      {/* ================= SOCIAL MEDIA FEED ================= */}
      <SocialFeed 
        title="Our Latest Activities"
        subtitle="See what we've been doing in the community"
        showSlider={false}
        limit={8}
        viewAllLink="https://instagram.com/onewayfoundation"
      />

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Making a{" "}
              <span className="text-orange-500">Difference</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Together, we can bring hope, happiness, and opportunity to those 
              who need it most. Every contribution counts in building a better 
              tomorrow for all.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
              >
                Donate Now
              </motion.a>
              
              <motion.a
                href="/programs"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-bold text-lg hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                Our Programs
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .ngo-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default About;
