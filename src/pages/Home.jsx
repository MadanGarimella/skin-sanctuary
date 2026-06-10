import Hero from "../components/home/Hero";
// import TrustBar from "../components/home/TrustBar";
import FeaturedTreatments from "../components/home/FeaturedTreatments";
import DoctorSection from "../components/home/DoctorSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TechnologySection from "../components/home/TechnologySection";
// import BeforeAfterSection from "../components/home/BeforeAfterSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import AppointmentCTA from "../components/home/AppointmentCTA";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <TrustBar /> */}
      <FeaturedTreatments />
      <DoctorSection />
      <WhyChooseUs />
      <TechnologySection />
      {/* <BeforeAfterSection /> */}
      <TestimonialsSection />
      <FAQSection />
      <AppointmentCTA />
    </>
  );
};

export default Home;