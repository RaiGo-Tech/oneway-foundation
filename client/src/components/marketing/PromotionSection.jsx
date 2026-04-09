import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Plan features data
const plans = [
  {
    id: 'basic',
    name: 'Basic Supporter',
    price: '₹5,000',
    period: '/month',
    description: 'Perfect for local businesses wanting to show their social responsibility.',
    features: [
      'Website banner placement (footer)',
      'Listing in supporters page',
      'Monthly social media shoutout',
      'Quarterly newsletter mention',
    ],
    cta: 'Become a Supporter',
    popular: false,
  },
  {
    id: 'community',
    name: 'Community Partner',
    price: '₹15,000',
    period: '/month',
    description: 'Ideal for businesses seeking regular visibility and community engagement.',
    features: [
      'Website banner placement (sidebar)',
      'Featured listing in supporters page',
      'Bi-weekly social media shoutout',
      'Monthly newsletter feature',
      'Event sponsorship opportunity',
      'Logo on event banners',
    ],
    cta: 'Become a Partner',
    popular: true,
  },
  {
    id: 'impact',
    name: 'Impact Sponsor',
    price: '₹50,000',
    period: '/month',
    description: 'Premium partnership for maximum brand visibility and impact.',
    features: [
      'Website banner placement (header)',
      'Premium featured listing',
      'Weekly social media shoutout',
      'Dedicated newsletter feature',
      'Main event sponsorship',
      'Logo on all event materials',
      'Press release mention',
      'Certificate of partnership',
    ],
    cta: 'Become a Sponsor',
    popular: false,
  },
];

// Modal component
const PartnerModal = ({ isOpen, onClose, selectedPlan }) => {
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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
      // ====================
      // API INTEGRATION PLACEHOLDER
      // ====================
      // 
      // For real API integration, uncomment and configure:
      //
      // const response = await fetch('/api/partnerships', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     selectedPlan: selectedPlan?.id,
      //   }),
      // });
      //
      // if (!response.ok) throw new Error('Failed to submit');
      //
      // ====================

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
        onClose();
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Success State */}
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your partnership request has been submitted. Our team will contact you within 24-48 hours.
              </p>
            </motion.div>
          ) : (
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Partner With Us
                </h3>
                <p className="text-gray-600">
                  {selectedPlan ? (
                    <>You're interested in the <span className="font-semibold text-orange-600">{selectedPlan.name}</span> plan</>
                  ) : (
                    'Fill in your details and we\'ll get back to you'
                  )}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.businessName ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="Your company name"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.contactPerson ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="Your name"
                    />
                    {errors.contactPerson && (
                      <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Promotion Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Promotion Type *
                    </label>
                    <select
                      name="promotionType"
                      value={formData.promotionType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.promotionType ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                    >
                      <option value="">Select promotion type</option>
                      <option value="banner">Banner Advertising</option>
                      <option value="sponsor">Event Sponsorship</option>
                      <option value="social">Social Media Shoutout</option>
                      <option value="newsletter">Newsletter Feature</option>
                      <option value="combo">Combo Package</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.promotionType && (
                      <p className="mt-1 text-sm text-red-500">{errors.promotionType}</p>
                    )}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.budgetRange ? 'border-red-500' : 'border-gray-200'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none`}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">₹5,000 - ₹10,000</option>
                      <option value="10k-25k">₹10,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-plus">₹50,000+</option>
                    </select>
                    {errors.budgetRange && (
                      <p className="mt-1 text-sm text-red-500">{errors.budgetRange}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
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
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main PromotionSection component
const PromotionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan = null) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  }, []);

  return (
    <>
      <section className="relative py-28 overflow-hidden">
        {/* Background with Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" 
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
              Partner With Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Promote Your Brand.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Support Humanity.
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join hands with ONEWAY FOUNDATION to create meaningful impact while gaining 
              visibility for your brand. Our partnership programs offer unique opportunities 
              to connect with a compassionate community.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${plan.popular ? 'md:-mt-4' : ''}`}
              >
                {/* Glassmorphism Card */}
                <div className={`absolute inset-0 rounded-3xl ${plan.popular ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10' : 'bg-white/5'} backdrop-blur-sm`} />
                <div className={`absolute inset-0 rounded-3xl border ${plan.popular ? 'border-orange-500/50' : 'border-white/10'} ${plan.popular ? 'shadow-2xl shadow-orange-500/20' : ''}`} />
                
                <div className="relative p-8 h-full flex flex-col">
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(plan)}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02]'
                        : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-slate-400 mb-6">
              Need more information about our partnership programs?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openModal(null)}
                className="px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                Request Media Kit
              </button>
              <a
                href="/contact"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <PartnerModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedPlan={selectedPlan}
        />
      </section>
    </>
  );
};

export default PromotionSection;
