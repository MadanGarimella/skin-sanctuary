import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Contact
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-dark">
            Book your dermatology consultation
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Reach the clinic to schedule an appointment or ask about treatment availability.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+919440052251" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <FaPhoneAlt className="text-primary" />
              <span className="font-medium text-dark">+91 94400 52251</span>
            </a>
            <a href="https://wa.me/919440052251" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <FaWhatsapp className="text-primary text-xl" />
              <span className="font-medium text-dark">WhatsApp the clinic</span>
            </a>
            <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              <p className="text-gray-600">
                Hi-Tension Rd, above HDFC Bank, Sri Sai Baba Officer's Colony, Madhavapuri Colony, Sainikpuri, Hyderabad, Secunderabad, Telangana 500094
              </p>
            </div>
          </div>
        </div>

        <form className="rounded-3xl bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
          <div className="grid sm:grid-cols-2 gap-5">
            <input className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Name" />
            <input className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Phone" />
          </div>
          <input className="mt-5 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Treatment interest" />
          <textarea className="mt-5 h-36 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Message" />
          <a
            href="https://wa.me/919440052251"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-secondary"
          >
            Send Enquiry
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
