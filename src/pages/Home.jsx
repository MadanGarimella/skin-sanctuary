import Hero from "../components/Home/Hero";
import SEO from "../components/common/SEO";
// import TrustBar from "../components/home/TrustBar";
import FeaturedTreatments from "../components/Home/FeaturedTreatments";
import DoctorSection from "../components/Home/DoctorSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import TechnologySection from "../components/Home/TechnologySection";
import BeforeAfterSection from "../components/Home/BeforeAfterSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import FAQSection from "../components/Home/FAQSection";
import AppointmentCTA from "../components/Home/AppointmentCTA";
import ProcessTimeline from "../components/Home/ProcessTimeline";

const Home = () => {
  return (
    <>
      <SEO title="Premium Dermatology Clinic" description="Skin Scanctuary offers premium dermatology, hair restoration, laser, hydrafacial, acne, pigmentation, and aesthetic treatments in Hyderabad." />
      <Hero />
      {/* <TrustBar /> */}
      <FeaturedTreatments />
      <DoctorSection />
      <WhyChooseUs />
      <TechnologySection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ProcessTimeline />
      <FAQSection />
      <AppointmentCTA />
    </>
  );
};

export default Home;
