import AboutHero from "../components/about/AboutHero";
import ClinicStory from "../components/about/ClinicStory";
import MissionVision from "../components/about/MissionVision";
import DoctorSpotlight from "../components/about/DoctorSpotlight";
import CoreValues from "../components/about/CoreValues";
import FacilitiesSection from "../components/about/FacilitiesSection";
// import CertificationsSection from "../components/about/CertificationsSection";
import AboutCTA from "../components/about/AboutCTA";

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