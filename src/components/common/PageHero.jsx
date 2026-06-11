import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "../../config/clinic";

const PageHero = ({ eyebrow, title, description, image, primary = "Book Appointment", secondary = "WhatsApp Us" }) => {
  return (
    <section className="relative overflow-hidden bg-light">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-light/95 to-primary/10" />
      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-dark md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/book-appointment" className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-secondary">
              {primary}
              <FaArrowRight />
            </Link>
            <a href={getWhatsAppUrl()} className="inline-flex items-center gap-3 rounded-full border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white">
              <FaWhatsapp />
              {secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

