import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "../../config/clinic";

const AppointmentCTA = () => {
  return (
    <section className="py-24">
      <div className="container-custom">

        <div className="bg-primary text-white rounded-[40px] p-16 text-center">

          <h2 className="text-5xl font-bold">
            Begin Your Skin Transformation
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Schedule a personalized consultation
            with our dermatology experts.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment" className="rounded-full bg-white px-10 py-4 font-semibold text-primary">
              Book Appointment
            </Link>
            <a href={getWhatsAppUrl()} className="inline-flex items-center gap-3 rounded-full border border-white/40 px-10 py-4 font-semibold text-white">
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AppointmentCTA;
