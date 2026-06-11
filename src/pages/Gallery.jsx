import acne from "../assets/treatments/acne.png";
import pigmentation from "../assets/treatments/pigmentation.png";
import hydrafacial from "../assets/treatments/hydrafacial.png";
import prp from "../assets/treatments/prptreatment.png";
import hair from "../assets/treatments/hairrestoration.png";
import botox from "../assets/treatments/botox.png";
import AppointmentCTA from "../components/Home/AppointmentCTA";

const results = [
  ["Acne Treatment", acne],
  ["Pigmentation Correction", pigmentation],
  ["HydraFacial Glow", hydrafacial],
  ["PRP Therapy", prp],
  ["Hair Restoration", hair],
  ["Aesthetic Rejuvenation", botox],
];

const Gallery = () => {
  return (
    <>
      <section className="section-padding bg-light">
        <div className="container-custom text-center max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Results Gallery
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-dark">
            Treatment journeys designed around real goals
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Browse common treatment focus areas and outcomes discussed during consultation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {results.map(([title, image]) => (
            <article key={title} className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <img src={image} alt={title} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-dark">{title}</h2>
                <p className="mt-3 text-gray-600">
                  Personalized protocols are recommended after assessment, diagnosis, and suitability review.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
};

export default Gallery;
