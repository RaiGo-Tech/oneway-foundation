import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: "",
    gender: "",
    dateOfBirth: "",
    fatherName: "",
    // Step 2: Address Details
    address: "",
    permanentAddress: "",
    // Step 3: Contact Details
    phone: "",
    email: "",
    // Step 4: Employment Status
    employmentType: "",
    occupation: "",
    // Step 5: Membership Category
    membershipType: "",
    // Step 6: Donation Plan
    donationPlan: "",
    oneTimeAmount: "",
    // Step 7: Documents
    idProofType: "",
    idProofFile: null,
    digitalSignature: null,
    declaration: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  const steps = [
    { title: "Personal Details", icon: "👤" },
    { title: "Address Details", icon: "🏠" },
    { title: "Contact Info", icon: "📱" },
    { title: "Employment", icon: "💼" },
    { title: "Membership", icon: "🎖️" },
    { title: "Donation", icon: "💝" },
    { title: "Review & Submit", icon: "✅" },
  ];

  const membershipPlans = [
    { id: "life", name: "Life Member", price: "₹5,000", description: "Lifetime membership with full privileges" },
    { id: "ordinary", name: "Ordinary Member", price: "₹500/year", description: "Annual membership with standard benefits" },
  ];

  const donationPlans = [
    { id: "200", name: "Starter", price: "₹200/month", description: "Provide meals for 2 people" },
    { id: "300", name: "Supporter", price: "₹300/month", description: "Support medical assistance" },
    { id: "500", name: "Champion", price: "₹500/month", description: "Fund education for a child" },
    { id: "one-time", name: "One Time", price: "Custom", description: "Single donation of your choice" },
  ];

  if (submitSuccess) {
    return (
      <div className="w-full overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-6 py-20 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
              >
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Thank You for Joining!
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Your application has been submitted successfully. Our team will verify your documents and contact you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Documents will be verified</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Confirmation email sent to {formData.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team will contact you within 24 hours</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/30"
                >
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        {/* Background Elements */}
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
              Join Our Mission
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Become a Member of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                ONEWAY FOUNDATION
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join our mission to serve humanity. Your dedication and support can make a real difference in the lives of those in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT MEMBERSHIP SECTION ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎖️",
                title: "Life Membership",
                desc: "One-time payment of ₹5,000 for lifetime membership with full privileges and voting rights.",
              },
              {
                icon: "📋",
                title: "Ordinary Membership",
                desc: "Annual membership of ₹500 with standard benefits and participation in activities.",
              },
              {
                icon: "💝",
                title: "Monthly Donation",
                desc: "Choose from ₹200, ₹300, or ₹500 monthly to support our ongoing programs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Terms & Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span>📜</span> Membership Terms & Responsibilities
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Members may be assigned to support activities as per NGO requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <span>NGO provides full backup and support for all member activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Honesty and transparency are mandatory for all members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Ethical behavior is required at all times representing ONEWAY FOUNDATION</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= MULTI-STEP FORM ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index <= currentStep ? "opacity-100" : "opacity-40"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                      index < currentStep
                        ? "bg-green-500 text-white"
                        : index === currentStep
                        ? "bg-orange-500 text-white scale-110"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {index < currentStep ? "✓" : step.icon}
                  </div>
                  <span className="text-xs text-slate-400 mt-2 hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">{steps[currentStep].icon}</span>
              {steps[currentStep].title}
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Father's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                        placeholder="Enter father's name"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Address Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Current Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      placeholder="Enter your current address"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Permanent Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      placeholder="Enter your permanent address"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Employment Status */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Employment Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="">Select Employment Type</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="business">Business</option>
                      <option value="student">Student</option>
                      <option value="homemaker">Homemaker</option>
                      <option value="retired">Retired</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Occupation / Designation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      placeholder="Enter your occupation or designation"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Membership Category */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <label className="block text-slate-300 font-medium mb-2">
                    Select Membership Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-6">
                    {membershipPlans.map((plan) => (
                      <label
                        key={plan.id}
                        className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all ${
                          formData.membershipType === plan.id
                            ? "border-orange-500 bg-orange-500/10"
                            : "border-slate-600 bg-slate-700/30 hover:border-slate-500"
                        }`}
                      >
                        <input
                          type="radio"
                          name="membershipType"
                          value={plan.id}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        <div className="text-3xl mb-3">{plan.id === "life" ? "🎖️" : "📋"}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-2xl font-bold text-orange-400 mb-2">{plan.price}</p>
                        <p className="text-slate-400 text-sm">{plan.description}</p>
                        {formData.membershipType === plan.id && (
                          <div className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Donation Plan */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <label className="block text-slate-300 font-medium mb-2">
                    Select Donation Plan <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {donationPlans.map((plan) => (
                      <label
                        key={plan.id}
                        className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all ${
                          formData.donationPlan === plan.id
                            ? "border-orange-500 bg-orange-500/10"
                            : "border-slate-600 bg-slate-700/30 hover:border-slate-500"
                        }`}
                      >
                        <input
                          type="radio"
                          name="donationPlan"
                          value={plan.id}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-white">{plan.name}</h3>
                            <p className="text-orange-400 font-bold">{plan.price}</p>
                            <p className="text-slate-400 text-xs mt-1">{plan.description}</p>
                          </div>
                          {formData.donationPlan === plan.id && (
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                  {formData.donationPlan === "one-time" && (
                    <div className="mt-4">
                      <label className="block text-slate-300 font-medium mb-2">
                        Enter Amount (₹)
                      </label>
                      <input
                        type="number"
                        name="oneTimeAmount"
                        value={formData.oneTimeAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                        placeholder="Enter donation amount"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Step 7: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  {/* Document Upload */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        ID Proof Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="idProofType"
                        value={formData.idProofType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="">Select ID Proof</option>
                        <option value="voter-id">Voter ID</option>
                        <option value="passport">Passport</option>
                        <option value="ration-card">Ration Card</option>
                        <option value="aadhar">Aadhar Card</option>
                        <option value="driving-license">Driving License</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Upload ID Proof <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="idProofFile"
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-300 focus:outline-none focus:border-orange-500"
                      />
                      <p className="text-slate-500 text-xs mt-1">Upload JPG, PNG or PDF (max 5MB)</p>
                    </div>
                  </div>

                  {/* Digital Signature */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Digital Signature <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="digitalSignature"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-300 focus:outline-none focus:border-orange-500"
                    />
                    <p className="text-slate-500 text-xs mt-1">Upload your signature as image</p>
                  </div>

                  {/* Declaration */}
                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="declaration"
                        checked={formData.declaration}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 mt-1 rounded border-slate-500 text-orange-500 focus:ring-orange-500 bg-slate-700"
                      />
                      <span className="text-slate-300 text-sm">
                        I agree to support ONEWAY FOUNDATION activities when required and follow ethical guidelines. 
                        I declare that all information provided is true and accurate to the best of my knowledge.
                        <span className="text-red-500"> *</span>
                      </span>
                    </label>
                  </div>

                  {/* Summary */}
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                    <h3 className="text-lg font-bold text-white mb-4">Application Summary</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Name:</span>
                        <span className="text-white ml-2">{formData.fullName || "-"}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Email:</span>
                        <span className="text-white ml-2">{formData.email || "-"}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Phone:</span>
                        <span className="text-white ml-2">{formData.phone || "-"}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Membership:</span>
                        <span className="text-orange-400 ml-2">
                          {membershipPlans.find(p => p.id === formData.membershipType)?.name || "-"}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400">Donation:</span>
                        <span className="text-green-400 ml-2">
                          {donationPlans.find(p => p.id === formData.donationPlan)?.price || "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-slate-700">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    currentStep === 0
                      ? "opacity-50 cursor-not-allowed text-slate-500"
                      : "text-white border border-slate-600 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  ← Previous
                </button>

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all hover:shadow-lg hover:shadow-green-500/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="bg-slate-50 py-12">
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
    </div>
  );
};

export default JoinUs;
