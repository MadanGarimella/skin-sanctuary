import TestimonialsSection from "../components/Home/TestimonialsSection";
import AppointmentCTA from "../components/Home/AppointmentCTA";

const Testimonials = () => {
  return (
    <>
      <section className="section-padding bg-light">
        <div className="container-custom text-center max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Patient Reviews
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-dark">
            Trusted care for skin, hair, and confidence
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Read what patients appreciate about the consultation experience, clinic care, and treatment planning.
          </p>
        </div>
      </section>
      <TestimonialsSection />
      <AppointmentCTA />
    </>
  );
};

export default Testimonials;
