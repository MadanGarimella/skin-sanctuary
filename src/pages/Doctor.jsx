import { FaAward, FaCertificate, FaHeart, FaMicroscope, FaUserMd } from "react-icons/fa";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Accordion from "../components/common/Accordion";
import CTASection from "../components/common/CTASection";
import doctor from "../assets/doctor/doctor.png";

const expertise = ["Clinical dermatology", "Acne and pigmentation", "Hair restoration", "Laser dermatology", "Injectable aesthetics", "Skin rejuvenation"];
const timeline = [
  ["Foundation", "Medical training with focused interest in dermatology and aesthetic medicine."],
  ["Clinical Practice", "Hands-on patient care across skin, hair, laser, and cosmetic concerns."],
  ["Advanced Care", "Integration of evidence-based protocols, technology, and patient education."],
];
const faqs = [
  ["What is the consultation style?", "The consultation is diagnosis-led, practical, and focused on realistic outcomes rather than one-size-fits-all packages."],
  ["Will treatment be started immediately?", "If suitable and safe, some treatments may begin after consultation. Others require preparation or planning."],
  ["Can I discuss multiple concerns?", "Yes. The doctor can prioritize concerns and structure a staged treatment plan."],
];

const Doctor = () => (
  <>
    <SEO title="Doctor" description="Meet Dr. Vaishnavi Nendraganti, consultant dermatologist at Skin Scanctuary specializing in skin, hair, laser, and aesthetic care." path="/doctor" />
    <PageHero eyebrow="Doctor Profile" title="Meet Dr. Vaishnavi Nendraganti" description="A dermatologist focused on medically sound, natural-looking, and patient-centered skin, hair, laser, and aesthetic care." image={doctor} />

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <img src={doctor} alt="Dr. Vaishnavi Nendraganti" className="rounded-[36px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]" />
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Professional Introduction</span>
          <h2 className="mt-4 text-4xl font-bold text-dark">Dermatology expertise with a calm, considered approach</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Dr. Vaishnavi Nendraganti brings together clinical dermatology, aesthetic judgment, and patient education to create plans that feel clear, safe, and achievable.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["10+ Years", "25+ Treatments", "500+ Patients"].map((item) => (
              <div key={item} className="rounded-2xl bg-light p-5 text-center font-bold text-primary">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-light">
      <div className="container-custom grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <FaUserMd className="text-4xl text-primary" />
          <h2 className="mt-5 text-3xl font-bold text-dark">Areas of Expertise</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {expertise.map((item) => (
              <span key={item} className="rounded-full bg-light px-4 py-3 text-gray-700">{item}</span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <FaHeart className="text-4xl text-primary" />
          <h2 className="mt-5 text-3xl font-bold text-dark">Patient Philosophy</h2>
          <p className="mt-5 leading-relaxed text-gray-600">
            Treatment should be ethical, transparent, and tailored. Patients deserve to understand why a plan is recommended, what results are realistic, and how to maintain progress.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Experience</span>
          <h2 className="mt-4 text-4xl font-bold text-dark">Timeline, certifications, and achievements</h2>
        </div>
        <div className="space-y-5">
          {timeline.map(([title, description], index) => (
            <div key={title} className="flex gap-5 rounded-3xl border border-gray-100 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white">{index + 1}</div>
              <div>
                <h3 className="text-xl font-bold text-dark">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            </div>
          ))}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-light p-6"><FaCertificate className="text-3xl text-primary" /><h3 className="mt-4 font-bold text-dark">Certified Expertise</h3><p className="mt-2 text-gray-600">Continuous learning across skin, hair, laser, and aesthetics.</p></div>
            <div className="rounded-3xl bg-light p-6"><FaAward className="text-3xl text-primary" /><h3 className="mt-4 font-bold text-dark">Patient Trust</h3><p className="mt-2 text-gray-600">Known for careful explanations and personalized protocols.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-light">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
        <div>
          <FaMicroscope className="text-4xl text-primary" />
          <h2 className="mt-5 text-4xl font-bold text-dark">Doctor FAQs</h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>

    <CTASection title="Consult with Dr. Vaishnavi" />
  </>
);

export default Doctor;

