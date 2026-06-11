import DoctorSection from "../components/Home/DoctorSection";
import DoctorSpotlight from "../components/About/DoctorSpotlight";
import AppointmentCTA from "../components/Home/AppointmentCTA";

const Doctor = () => {
  return (
    <>
      <section className="section-padding bg-light">
        <div className="container-custom text-center max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Doctor Profile
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-dark">
            Meet Dr. Vaishnavi Nendraganti
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Consultant dermatologist focused on evidence-based skin, hair, laser, and aesthetic treatments.
          </p>
        </div>
      </section>
      <DoctorSection />
      <DoctorSpotlight />
      <AppointmentCTA />
    </>
  );
};

export default Doctor;
