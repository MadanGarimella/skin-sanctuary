import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "../../config/clinic";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppUrl()}
    className="fixed bottom-5 right-5 z-[90] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/80 text-2xl text-primary shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl transition hover:scale-105 hover:bg-primary hover:text-white"
    aria-label="Contact Skin Scanctuary on WhatsApp"
  >
    <FaWhatsapp />
  </a>
);

export default WhatsAppButton;

