import AboutHero from "../components/About/AboutHero";
import SEO from "../components/common/SEO";
import CTASection from "../components/common/CTASection";
import ClinicStory from "../components/About/ClinicStory";
import MissionVision from "../components/About/MissionVision";
import DoctorSpotlight from "../components/About/DoctorSpotlight";
import CoreValues from "../components/About/CoreValues";
import FacilitiesSection from "../components/About/FacilitiesSection";
// import CertificationsSection from "../components/About/CertificationsSection";
import AboutCTA from "../components/About/AboutCTA";

const About = () => {
  return (
    <>
      <SEO title="About" description="Learn about Skin Scanctuary clinic story, mission, values, doctor, facilities, and patient-first dermatology experience." path="/about" />
      <AboutHero />
      <ClinicStory />
      <MissionVision />
      <DoctorSpotlight />
      <CoreValues />
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Patient Trust</span>
            <h2 className="mt-4 text-4xl font-bold text-dark">Why patients trust us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {["Ethical recommendations", "Transparent expectations", "Doctor-led care", "Follow-up support"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-7 text-center font-bold text-dark shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>
      <FacilitiesSection />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Clinic Experience</span>
            <h2 className="mt-4 text-4xl font-bold text-dark">Comfort at every step</h2>
            <p className="mt-4 text-gray-600">From reception to aftercare, the clinic journey is built to feel calm, clear, and premium.</p>
          </div>
        </div>
      </section>
      {/* <CertificationsSection /> */}
      <AboutCTA />
      <CTASection title="Experience care designed around you" />
    </>
  );
};

export default About;
