import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { clinic, getWhatsAppUrl } from "../../config/clinic";

const CTASection = ({ title = "Begin with a personalized consultation", description = "Meet the clinic team, understand your options, and receive a treatment roadmap tailored to your skin or hair goals." }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-[0_20px_70px_rgba(109,40,217,0.25)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-white/85">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/book-appointment" className="rounded-full bg-white px-7 py-4 text-center font-semibold text-primary transition hover:bg-light">
                Book Appointment
              </Link>
              <a href={getWhatsAppUrl()} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                <FaWhatsapp />
                WhatsApp CTA
              </a>
              <a href={clinic.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                <FaPhoneAlt />
                Contact CTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

