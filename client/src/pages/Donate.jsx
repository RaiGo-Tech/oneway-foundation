import { useState } from "react";
import { createOrder } from "../services/razorpay";

const qrImageUrl = "/QR-donation.png";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    pan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // 1. Create order from backend
      const order = await createOrder(formData.amount);
  
      // 2. Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "ONEWAY FOUNDATION",
        description: "Donation",
        order_id: order.id,
  
        handler: async function (response) {
          // 3. Verify payment
          await fetch(
            `${import.meta.env.VITE_API_URL}/api/donation/verify`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donor: formData,
              }),
            }
          );
  
          alert("Donation Successful 🙏");
        },
  
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
  
        theme: {
          color: "#ea580c",
        },
      };
  
      // 4. Open Razorpay popup
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Payment failed. Please try again.");
    }
  };
  

  return (
    <div className="w-full overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donate Now
          </h1>
          <p className="max-w-3xl mx-auto text-orange-100 text-lg leading-relaxed">
            Your generosity helps us continue our mission of empowering lives
            through education, healthcare, food support and social welfare.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At ONEWAY FOUNDATION, we believe that meaningful change is possible
            when compassionate individuals come together to support a common
            cause. Your donation plays a vital role in helping us reach
            underprivileged communities and address real social challenges.
          </p>

          <p>
            Every contribution, big or small, directly supports our programs in
            education, healthcare, skill development, women empowerment, food
            distribution and legal awareness.
          </p>

          <p>
            We are committed to transparency, accountability and ethical use of
            funds. All donations received are utilized responsibly to maximize
            impact and are documented for reporting and compliance.
          </p>
        </div>
      </section>

      {/* ================= DONATION FORM ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 bg-white shadow-md rounded-lg p-10">

          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Make a Donation
          </h2>

          <div className="mb-8 flex flex-col items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50/60 p-6 text-center shadow-sm">
            <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-orange-200">
              <img
                src={qrImageUrl}
                alt="ONEWAY FOUNDATION donation QR code"
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-800">Secure Donation QR</p>
              <p className="text-sm text-slate-600">
                Scan this QR code to donate securely via the trusted payment flow.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Donation Amount (₹) *
              </label>
              <input
                type="number"
                name="amount"
                required
                value={formData.amount}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                PAN Number (Optional – for 80G)
              </label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded"
                placeholder="Enter PAN number"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              Proceed to Secure Payment
            </button>

          </form>
        </div>
      </section>

      {/* ================= TAX BENEFIT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Tax Benefits & Compliance
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            All donations made to ONEWAY FOUNDATION are eligible for tax
            exemption under Section 80G of the Income Tax Act, subject to
            applicable rules and regulations.
          </p>

          <p>
            Upon successful donation, a receipt will be issued via email,
            which can be used for tax filing purposes. Please ensure that you
            provide accurate contact details while making the donation.
          </p>

          <p>
            Our organization is registered under the Society Registration Act
            1860 and holds valid PAN, 12A and 80G certifications, ensuring full
            compliance with statutory requirements.
          </p>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transparency & Trust
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            We value the trust our donors place in us. ONEWAY FOUNDATION
            maintains transparent financial records, regular audits and clear
            reporting to ensure that every contribution is used responsibly
            and ethically.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Donate;
