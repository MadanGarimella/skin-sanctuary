import { FaShieldAlt, FaSprayCan, FaUserCheck, FaWind } from "react-icons/fa";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import consultationRoom from "../assets/facilities/consultation-room.png";
import treatmentRoom from "../assets/facilities/treatment-room.png";
import laserEquipment from "../assets/facilities/laser-equipment.png";
import reception from "../assets/facilities/reception.png";

const spaces = [
  ["Reception Area", reception, "A calm first impression with a welcoming lounge and attentive front desk support."],
  ["Consultation Rooms", consultationRoom, "Private rooms for detailed history, diagnosis, photography review, and treatment planning."],
  ["Treatment Rooms", treatmentRoom, "Purpose-designed spaces for dermatology, skin, hair, and aesthetic procedures."],
  ["Laser Equipment", laserEquipment, "Modern devices supported by skin-type aware settings and medical protocols."],
];

const standards = [
  ["Safety Standards", <FaShieldAlt />, "Clear consent, procedure checks, and medically supervised treatment protocols."],
  ["Sterilization Protocols", <FaSprayCan />, "Instrument handling and room preparation designed around patient safety."],
  ["Patient Comfort", <FaWind />, "Thoughtful privacy, calming spaces, and aftercare guidance at each step."],
  ["Care Coordination", <FaUserCheck />, "Follow-up planning so each visit connects to the larger treatment roadmap."],
];

const Facilities = () => (
  <>
    <SEO title="Facilities" description="Explore Skin Scanctuary clinic facilities, consultation rooms, treatment rooms, laser equipment, safety standards, and comfort features." path="/facilities" />
    <PageHero eyebrow="Clinic Facilities" title="A premium clinic environment built for comfort, safety, and trust" description="Every patient touchpoint is designed to support calm consultations, precise treatments, and medically responsible care." image={reception} />

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-8 md:grid-cols-2">
        {spaces.map(([title, image, description]) => (
          <article key={title} className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.07)]">
            <img src={image} alt={title} className="h-80 w-full object-cover" loading="lazy" />
            <div className="p-7">
              <h2 className="text-2xl font-bold text-dark">{title}</h2>
              <p className="mt-4 text-gray-600">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Protocols</span>
          <h2 className="mt-4 text-4xl font-bold text-dark">Designed for medical confidence</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {standards.map(([title, icon, description]) => (
            <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-2xl text-primary">{icon}</div>
              <h3 className="text-xl font-bold text-dark">{title}</h3>
              <p className="mt-3 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Visit Skin Scanctuary with confidence" />
  </>
);

export default Facilities;

