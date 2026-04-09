import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PromoteBrand = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    promotionType: '',
    budgetRange: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.promotionType) {
      newErrors.promotionType = 'Please select a promotion type';
    }
    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          businessName: '',
          contactPerson: '',
          email: '',
          phone: '',
          promotionType: '',
          budgetRange: '',
          message: '',
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-4 border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Brand Promotion
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Promote Your Brand.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Support Humanity.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join hands with ONEWAY FOUNDATION to create meaningful impact while gaining 
              visibility for your brand. Our partnership programs offer unique opportunities 
              to connect with a compassionate community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Guidelines Section */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              Important Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 text-slate-300">
                <span className="text-red-400 text-xl">🚫</span>
                <p>We do not promote <strong className="text-white">intoxicating items</strong> (liquor, drugs, tobacco, etc.)</p>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <span className="text-red-400 text-xl">🚫</span>
                <p>We do not promote <strong className="text-white">gaming sites</strong> or gambling platforms</p>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <span className="text-red-400 text-xl">🚫</span>
                <p>We do not promote anything that could cause <strong className="text-white">harm</strong> to anyone (1% damage to anyone)</p>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <span className="text-red-400 text-xl">✅</span>
                <p>We welcome <strong className="text-white">ethical businesses</strong> that align with our mission</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              📝 Request Promotion
            </h2>
            <p className="text-slate-400 mb-8">
              Fill out the form below and our team will contact you within 24-48 hours.
            </p>

            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                >
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-300">
                  Your request has been submitted. Our team will contact you within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.businessName ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="Your company name"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-sm text-red-400">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.contactPerson ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="Your name"
                    />
                    {errors.contactPerson && (
                      <p className="mt-1 text-sm text-red-400">{errors.contactPerson}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Promotion Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Promotion Type *
                    </label>
                    <select
                      name="promotionType"
                      value={formData.promotionType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.promotionType ? 'border-red-500' : 'border-white/20'
                      } text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                    >
                      <option value="" className="bg-slate-800">Select promotion type</option>
                      <option value="banner" className="bg-slate-800">Banner Advertising</option>
                      <option value="sponsor" className="bg-slate-800">Event Sponsorship</option>
                      <option value="social" className="bg-slate-800">Social Media Shoutout</option>
                      <option value="newsletter" className="bg-slate-800">Newsletter Feature</option>
                      <option value="combo" className="bg-slate-800">Combo Package</option>
                      <option value="other" className="bg-slate-800">Other</option>
                    </select>
                    {errors.promotionType && (
                      <p className="mt-1 text-sm text-red-400">{errors.promotionType}</p>
                    )}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.budgetRange ? 'border-red-500' : 'border-white/20'
                      } text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                    >
                      <option value="" className="bg-slate-800">Select budget range</option>
                      <option value="5k-10k" className="bg-slate-800">₹5,000 - ₹10,000</option>
                      <option value="10k-25k" className="bg-slate-800">₹10,000 - ₹25,000</option>
                      <option value="25k-50k" className="bg-slate-800">₹25,000 - ₹50,000</option>
                      <option value="50k-plus" className="bg-slate-800">₹50,000+</option>
                    </select>
                    {errors.budgetRange && (
                      <p className="mt-1 text-sm text-red-400">{errors.budgetRange}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PromoteBrand;
