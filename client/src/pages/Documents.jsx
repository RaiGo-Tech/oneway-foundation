const Documents = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Legal & Compliance Documents
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Transparency and accountability are at the core of ONEWAY FOUNDATION.
            Below are our legal registrations and compliance documents.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            ONEWAY FOUNDATION is a registered non-profit organization operating
            in compliance with all applicable laws and regulations in India.
            We believe that transparency is essential to build trust with our
            donors, partners, volunteers and beneficiaries.
          </p>

          <p>
            All our statutory documents are made publicly available to ensure
            accountability and to provide confidence that donations are handled
            responsibly and ethically.
          </p>

          <p>
            These documents are also required for donation processing,
            eligibility for tax exemptions and compliance with government
            authorities and funding partners.
          </p>
        </div>
      </section>

      {/* ================= DOCUMENT LIST ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
            Organization Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Registration */}
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                Registration Certificate
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                ONEWAY FOUNDATION is registered under the Society Registration
                Act, 1860. This certificate establishes the legal existence of
                the organization and authorizes it to carry out non-profit
                activities.
              </p>
              <button className="text-orange-600 font-semibold">
                View / Download
              </button>
            </div>

            {/* PAN */}
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                PAN Card
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Permanent Account Number (PAN) issued by the Income Tax
                Department is used for financial transactions and compliance.
              </p>
              <button className="text-orange-600 font-semibold">
                View / Download
              </button>
            </div>

            {/* 12A */}
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                12A Registration Certificate
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Registration under Section 12A of the Income Tax Act confirms
                that the organization is recognized as a charitable entity.
              </p>
              <button className="text-orange-600 font-semibold">
                View / Download
              </button>
            </div>

            {/* 80G */}
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                80G Certificate
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Donations made to ONEWAY FOUNDATION are eligible for tax
                deduction under Section 80G of the Income Tax Act.
              </p>
              <button className="text-orange-600 font-semibold">
                View / Download
              </button>
            </div>

            {/* NITI */}
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition md:col-span-2">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                NITI Aayog Registration
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                ONEWAY FOUNDATION is registered with NITI Aayog (Government of
                India), enabling collaboration with government bodies and
                participation in national development initiatives.
              </p>
              <button className="text-orange-600 font-semibold">
                View / Download
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY TRANSPARENCY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Why Transparency Matters
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Transparency builds trust. By sharing our legal and compliance
            documents publicly, we ensure that our stakeholders have complete
            confidence in our operations and governance.
          </p>

          <p>
            Clear documentation also enables donors to make informed decisions
            and supports regulatory authorities in monitoring compliance.
          </p>

          <p>
            At ONEWAY FOUNDATION, we remain committed to ethical practices,
            responsible fund utilization and continuous improvement in
            governance standards.
          </p>
        </div>
      </section>

      {/* ================= DONATION CTA ================= */}
      <section className="bg-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Support a Transparent Cause
          </h2>
          <p className="max-w-3xl mx-auto text-orange-100 leading-relaxed mb-8">
            Your support helps us continue our work with integrity and impact.
            Join us in creating a better and more equitable society.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Donate Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default Documents;
