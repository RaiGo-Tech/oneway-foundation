const Media = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Media Coverage
          </h1>
          <p className="max-w-3xl mx-auto text-orange-100 text-lg leading-relaxed">
            Recognition, press coverage and media mentions highlighting the
            work and impact of ONEWAY FOUNDATION.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Media coverage plays an important role in amplifying social impact
            and spreading awareness about important issues. Over the years,
            ONEWAY FOUNDATION’s work has been featured across various media
            platforms.
          </p>

          <p>
            These features help highlight the importance of community-driven
            initiatives and encourage more individuals and organizations to
            participate in social development efforts.
          </p>
        </div>
      </section>

      {/* ================= MEDIA GRID ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                NEWS IMAGE
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Media Coverage Title
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  News article highlighting the initiatives and impact of
                  ONEWAY FOUNDATION in community development and social service.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CLOSING NOTE ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Media recognition motivates us to continue our work with greater
            dedication and responsibility. We remain committed to serving
            humanity with integrity, compassion and transparency.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Media;
