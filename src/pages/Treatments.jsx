import FeaturedTreatments from "../components/Home/FeaturedTreatments";
import TechnologySection from "../components/Home/TechnologySection";
import FAQSection from "../components/Home/FAQSection";
import AppointmentCTA from "../components/Home/AppointmentCTA";

const treatmentGroups = [
  {
    title: "Skin",
    items: ["Acne care", "Pigmentation correction", "Chemical peels", "HydraFacial", "Skin brightening"],
  },
  {
    title: "Hair",
    items: ["PRP therapy", "Hair fall control", "Scalp health", "Hair restoration planning"],
  },
  {
    title: "Aesthetics",
    items: ["Botox", "Fillers", "Laser treatments", "Skin tightening"],
  },
];

const Treatments = () => {
  return (
    <>
      <section className="section-padding bg-light">
        <div className="container-custom text-center max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Treatment Menu
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-dark">
            Dermatology, hair, and aesthetic care in one place
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Explore personalized treatment options planned after a detailed consultation and skin or scalp assessment.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-3 gap-6">
          {treatmentGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-bold text-dark">{group.title} Treatments</h2>
              <ul className="mt-6 space-y-3 text-gray-600">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FeaturedTreatments />
      <TechnologySection />
      <FAQSection />
      <AppointmentCTA />
    </>
  );
};

export default Treatments;
