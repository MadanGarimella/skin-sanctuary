import Hero from "../components/Home/Hero";
// import TrustBar from "../components/home/TrustBar";
import FeaturedTreatments from "../components/Home/FeaturedTreatments";
import DoctorSection from "../components/Home/DoctorSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import TechnologySection from "../components/Home/TechnologySection";
// import BeforeAfterSection from "../components/home/BeforeAfterSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import FAQSection from "../components/Home/FAQSection";
import AppointmentCTA from "../components/Home/AppointmentCTA";

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