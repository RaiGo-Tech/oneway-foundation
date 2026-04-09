import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Import local images
import langarSeva1 from "../../Assets/SERVICE/langer seva/corona-langer-seva.png";

// ================= ANIMATION COMPONENTS =================

// Fade In Up Animation
const FadeInUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale In Animation
const ScaleIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Children Animation
const StaggerContainer = ({ children, className = "", delayChildren = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ================= DATA ARRAYS =================

// Leadership Team Data
const leadershipTeam = [
  {
    name: "Madan Yadav",
    position: "President & Founder",
    description: "Leading ONEWAY FOUNDATION with vision and compassion since 2017. Dedicated to uplifting marginalized communities through sustainable development programs.",
    image: "../Assets/IMG/MEMBERS-IMG/President Madan-Yadav .png",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Mata Harbansh Kaur Oberoi",
    position: "General Secretary",
    description: "Managing organizational operations and coordinating programs to ensure the foundation's mission is implemented effectively at all levels.",
    image: "../Assets/IMG/MEMBERS-IMG/Mata harshbardan kaur.png",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sapna",
    position: "Treasurer",
    description: "Ensuring financial transparency and accountability. Oversees budgeting, reporting and compliance for responsible resource utilization.",
    image: "../Assets/IMG/MEMBERS-IMG/Sapna .png",
    social: { linkedin: "#", twitter: "#" }
  },
];

// Core Members Data
const coreMembers = [
  {
    name: "Amandeep Singh",
    role: "Marketing Advisor",
    description: "Strategic guidance on outreach, communication and public engagement.",
    image: "../Assets/IMG/MEMBERS-IMG/Amandeep Singh - Marketing Advisor.png",
  },
  {
    name: "Advocate Jagannath Bhandari",
    role: "Legal Advisor",
    description: "Legal expertise and guidance for compliance and legal awareness initiatives.",
    image: "../Assets/IMG/MEMBERS-IMG/Adv. Jagannath Bhandari - Legel Advisor.png",
  },
  {
    name: "Sushila Yadav",
    role: "Program Coordinator",
    description: "Coordinating programs at the ground level and bridging leadership with volunteers.",
    image: "../Assets/IMG/MEMBERS-IMG/Sushila Yadav - Coordinator.png",
  },
];

// Team Members / Volunteers Grid (Sample - expandable for 200+)
const teamMembers = [
  { name: "Munshi Lal", role: "Volunteer Coordinator", description: "Managing volunteer activities across regions" },
  { name: " Sandeep Kumar", role: "Education Program Lead", description: "Overseeing educational initiatives for children" },
  { name: "Amit Patel", role: "Healthcare Coordinator", description: "Organizing health camps and medical support" },
  { name: "Sunita Devi", role: "Women Empowerment Lead", description: "Empowering women through skill development" },
  { name: "Vikram Singh", role: "Event Manager", description: "Planning and executing community events" },
  { name: "Anita Kumari", role: "Nutrition Program Lead", description: "Managing food distribution programs" },
  { name: "Deepak Sharma", role: "Youth Coordinator", description: "Engaging youth in social activities" },
  { name: "Meera Devi", role: "Rural Outreach Lead", description: "Extending services to rural areas" },
  { name: "Raj Kumar", role: "Logistics Manager", description: "Managing supply chain and distribution" },
  { name: "Kavita Singh", role: "Documentation Head", description: "Maintaining records and reports" },
  { name: "Suresh Yadav", role: "Field Coordinator", description: "Ground-level program implementation" },
  { name: "Pooja Rani", role: "Community Liaison", description: "Building community relationships" },
];

// ================= PLACEHOLDER IMAGE COMPONENT =================
const PlaceholderImage = ({ className = "", alt = "Team Member" }) => (
  <div className={`bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center ${className}`}>
    <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);

// ================= SECTION 1: LEADERSHIP TEAM =================
const LeadershipSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/20 to-slate-50" />
      <div className="absolute inset-0 ngo-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Meet Our Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Guiding with Vision & Compassion
          </p>
        </FadeInUp>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((leader, index) => (
            <ScaleIn key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-slate-200/50 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500" />
                <div className="absolute inset-0 rounded-3xl border border-white/50 group-hover:border-orange-200 transition-colors duration-300" />
                
                <div className="relative p-8">
                  {/* Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    
                    {leader.image ? (
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={leader.image}
                        alt={leader.name}
                        className="relative w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                      />
                    ) : (
                      <PlaceholderImage className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
                    )}
                    
                    {/* Position Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                      {leader.position}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
                    {leader.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-center text-sm leading-relaxed line-clamp-3">
                    {leader.description}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 mt-6">
                    {leader.social?.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href={leader.social.linkedin}
                        className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </motion.a>
                    )}
                    {leader.social?.twitter && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href={leader.social.twitter}
                        className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= SECTION 2: TEAM MEMBERS GRID =================
const TeamMembersGrid = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Our Dedicated Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Working Together for Change
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the passionate individuals who make our mission possible
          </p>
        </FadeInUp>

        {/* Members Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          delayChildren={0.05}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                {/* Image */}
                <div className="flex items-center gap-4 mb-4">
                  <PlaceholderImage className="w-14 h-14 rounded-full flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-800 truncate">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 text-sm font-medium truncate">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                  {member.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Show More Indicator */}
        <FadeInUp delay={0.3} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-600">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="font-medium">And many more dedicated volunteers across {">"} 10 states</span>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

// ================= SECTION 3: CORE MEMBERS =================
const CoreMembersSection = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ngo-pattern opacity-5" />
      
      {/* Highlight Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-slate-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Key Contributors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Core Members
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The backbone of our operations - trusted advisors and coordinators
          </p>
        </FadeInUp>

        {/* Core Members Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreMembers.map((member, index) => (
            <ScaleIn key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Premium Border/Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-slate-600 rounded-2xl opacity-30 group-hover:opacity-60 blur-sm group-hover:blur-md transition-all duration-300" />
                
                <div className="relative bg-white rounded-2xl p-8">
                  {/* Core Member Badge */}
                  <div className="absolute -top-3 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold shadow-lg shadow-orange-500/30">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Core Member
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    {member.image ? (
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0 shadow-md"
                      />
                    ) : (
                      <PlaceholderImage className="w-16 h-16 rounded-xl flex-shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-semibold text-sm mb-2">
                        {member.role}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-slate-600 rounded-full" />
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= MAIN COMPONENT =================

const Team = () => {
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
              Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              ONEWAY
            </span>{" "}
            Family
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed"
          >
            Meet the dedicated individuals who work tirelessly behind the scenes
            to drive the mission, values and impact of ONEWAY FOUNDATION.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">200+</div>
              <div className="text-slate-400 text-sm">Volunteers</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">10+</div>
              <div className="text-slate-400 text-sm">States</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">40+</div>
              <div className="text-slate-400 text-sm">Active Members</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: LEADERSHIP TEAM ================= */}
      <LeadershipSection />

      {/* ================= SECTION 2: TEAM MEMBERS GRID ================= */}
      <TeamMembersGrid />

      {/* ================= SECTION 3: CORE MEMBERS ================= */}
      <CoreMembersSection />

      {/* ================= SECTION 4: TECHNOLOGY & DIGITAL SUPPORT ================= */}
      {/* ================= JOIN TEAM CTA ================= */}
      <section className="relative py-20 bg-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Mission?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, partner with us, or support our cause, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Donate Now
            </motion.a>
          </div>
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

export default Team;
