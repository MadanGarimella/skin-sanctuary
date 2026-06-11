import AboutHero from "../components/About/AboutHero";
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
      <AboutHero />
      <ClinicStory />
      <MissionVision />
      <DoctorSpotlight />
      <CoreValues />
      <FacilitiesSection />
      {/* <CertificationsSection /> */}
      <AboutCTA />
    </>
  );
};

export default About;
