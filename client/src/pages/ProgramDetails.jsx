import { useParams } from "react-router-dom";

const ProgramDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-full overflow-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Program Details
          </h1>
          <p className="max-w-3xl mx-auto text-orange-100 text-lg leading-relaxed">
            Detailed overview of our initiatives, objectives, activities and
            impact on communities.
          </p>
        </div>
      </section>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            This program is designed to address specific social challenges
            through a structured and community-focused approach. The initiative
            emphasizes sustainability, participation and long-term impact.
          </p>

          <p>
            Through this program, ONEWAY FOUNDATION works closely with local
            stakeholders, volunteers and beneficiaries to ensure that resources
            are utilized effectively and ethically.
          </p>

          <p>
            Each activity under this program is carefully planned, monitored
            and evaluated to measure outcomes and improve future interventions.
          </p>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Program Objectives
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-relaxed">
            <li>Address key social issues through targeted interventions</li>
            <li>Empower individuals with knowledge, skills and resources</li>
            <li>Encourage community participation and ownership</li>
            <li>Create sustainable and scalable solutions</li>
          </ul>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Key Activities
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The program includes a series of planned activities such as
            awareness campaigns, training sessions, workshops, field visits and
            community engagement initiatives.
          </p>

          <p>
            Activities are designed based on community needs and are implemented
            with the support of trained volunteers and professionals.
          </p>

          <p>
            Regular monitoring and feedback mechanisms help improve the quality
            and effectiveness of program delivery.
          </p>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Program Impact
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Through this program, ONEWAY FOUNDATION has positively impacted
              numerous individuals and families by improving access to essential
              services and opportunities.
            </p>
            <p>
              The initiative has contributed to increased awareness, improved
              living conditions and enhanced self-reliance among beneficiaries.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramDetails;
