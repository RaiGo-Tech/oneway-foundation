import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Contact form backend integration will be done in next step");
  };

  const supportOptions = [
    {
      icon: "📞",
      title: "Direct Call",
      description: "Talk to our team",
      action: "tel:+917889294572",
      color: "bg-green-500",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick chat support",
      action: "https://wa.me/917889294572",
      color: "bg-green-600",
    },
    {
      icon: "📩",
      title: "Email",
      description: "Send us an email",
      action: "mailto:onewayfoundation3@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: "📨",
      title: "Message",
      description: "Fill the form below",
      action: "#message-form",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="w-full overflow-hidden">

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Get In Touch
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We would love to hear from you. Reach out to us for queries, partnerships, volunteering opportunities or any support-related information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.action}
                target={option.icon === "💬" ? "_blank" : "_self"}
                rel={option.icon === "💬" ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-4 transition-all group"
              >
                <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold">{option.title}</h3>
                  <p className="text-orange-100 text-sm">{option.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-semibold">Since 2017</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏢</span>
              <span className="font-semibold">Registered NGO</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span className="font-semibold">5000+ Lives Impacted</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏰</span>
              <span className="font-semibold">24×7 Service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-800">
              We Believe in Open Communication
            </h2>
            <p>
              ONEWAY FOUNDATION believes in open communication and transparency.
              Whether you are a donor, volunteer, beneficiary or a well-wisher,
              your voice matters to us.
            </p>
            <p>
              Please feel free to get in touch with us using the contact details
              or the form provided below. Our team will respond to your query as
              soon as possible.
            </p>
            <p>
              We are always open to collaborations, partnerships and ideas that
              align with our mission of serving humanity and creating sustainable
              social impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "5000+", label: "Lives Impacted" },
              { number: "150+", label: "Events Organized" },
              { number: "200+", label: "Volunteers" },
              { number: "7+", label: "Years of Service" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all"
          >
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              📍
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Address
            </h3>
            <p className="text-slate-600 leading-relaxed">
              R/O: W539, Nayagaon<br />
              District SAS Nagar (Mohali), Punjab<br />
              Branch Office: 255/11, Small Flat, Maloya<br />
              Chandigarh, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all"
          >
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              📱
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Phone
            </h3>
            <p className="text-slate-600 leading-relaxed">
              +91 95921 35824<br />
              +91 79731 72241
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Available 24×7 for emergencies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all"
          >
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
              📧
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Email
            </h3>
            <p className="text-slate-600 leading-relaxed">
              onewayfoundation3@gmail.com
            </p>
            <p className="mt-4 text-sm text-slate-500">
              We usually respond within 24 hours
            </p>
          </motion.div>

        </div>
      </section>

      <section id="message-form" className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-slate-100"
        >

          <h2 className="text-3xl font-bold mb-2 text-slate-800 text-center">
            Send Us a Message
          </h2>
          <p className="text-slate-500 text-center mb-8">
            Fill the form below and we'll get back to you soon
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="volunteer">Volunteering</option>
                <option value="donation">Donation</option>
                <option value="partnership">Partnership</option>
                <option value="support">Need Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all hover:shadow-lg hover:shadow-orange-500/30"
            >
              Send Message
            </button>

          </form>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-orange-500/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🕐</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              We're Here for You, 24×7
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              If we are unable to respond instantly, our team will contact you within 24 hours.
              We operate 24×7 with full dedication to serve humanity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-4 border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Support Our Cause
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Make a Difference Today
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Every contribution directly supports food distribution, hospital care, and education programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { amount: "₹200", label: "Starter", desc: "Provide meals for 2 people" },
              { amount: "₹300", label: "Supporter", desc: "Support medical assistance" },
              { amount: "₹500", label: "Champion", desc: "Fund education for a child" },
              { amount: "Custom", label: "One Time", desc: "Any amount you can give" },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500 rounded-2xl p-6 text-center transition-all hover:transform hover:-translate-y-2"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">{plan.amount}</div>
                <div className="text-white font-semibold mb-2">{plan.label}</div>
                <div className="text-slate-400 text-sm">{plan.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all hover:shadow-lg hover:shadow-orange-500/30"
            >
              Donate Now
            </Link>
            <Link
              to="/join-us"
              className="px-8 py-4 border-2 border-slate-600 text-white font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all"
            >
              Become a Member
            </Link>
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            🔒 Your donation is secure and directly impacts lives. We maintain complete transparency in fund usage.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
