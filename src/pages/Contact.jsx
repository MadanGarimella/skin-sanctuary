import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import { clinic, getWhatsAppUrl } from "../config/clinic";

const cards = [
  ["Phone", clinic.phone, clinic.phoneHref, <FaPhoneAlt />],
  ["WhatsApp", "Message the clinic", getWhatsAppUrl(), <FaWhatsapp />],
  ["Email", clinic.email, clinic.emailHref, <FaEnvelope />],
  ["Address", "Open location details", "https://www.google.com/maps/search/?api=1&query=Skin%20Scanctuary%20Sainikpuri", <FaMapMarkerAlt />],
];

const Contact = () => (
  <>
    <SEO title="Contact" description="Contact Skin Scanctuary for appointments, WhatsApp support, clinic address, working hours, and consultation enquiries." path="/contact" />
    <PageHero eyebrow="Contact" title="Reach the clinic team for consultation support" description="Call, WhatsApp, email, or visit the clinic. The team will help you choose the right next step for your skin, hair, or aesthetic concern." />

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map(([title, label, href, icon]) => (
              <a key={title} href={href} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">{icon}</div>
                <h2 className="text-xl font-bold text-dark">{title}</h2>
                <p className="mt-2 text-gray-600">{label}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-light p-7">
            <h2 className="text-2xl font-bold text-dark">Working Hours</h2>
            <div className="mt-5 space-y-3">
              {clinic.hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-5 border-b border-gray-200 pb-3 text-gray-600">
                  <span>{day}</span>
                  <strong className="text-dark">{time}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-7">
            <h2 className="text-2xl font-bold text-dark">Emergency Notice</h2>
            <p className="mt-3 text-gray-600">
              For urgent allergic reactions, breathing difficulty, severe swelling, or medical emergencies, please visit the nearest emergency facility immediately.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <form className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_14px_45px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-bold text-dark">Send an enquiry</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Name" />
              <input className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Phone" />
            </div>
            <input className="mt-4 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Treatment interest" />
            <textarea className="mt-4 h-32 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-primary" placeholder="Message" />
            <a href={getWhatsAppUrl()} className="mt-5 inline-flex w-full justify-center rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-secondary">
              Send via WhatsApp
            </a>
          </form>

          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
            <iframe
              title="Skin Scanctuary map"
              src="https://www.google.com/maps?q=Skin%20Scanctuary%20Sainikpuri&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <CTASection title="Prefer a guided appointment?" />
  </>
);

export default Contact;
