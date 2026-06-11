import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import { treatments } from "../data/treatments";

const Treatments = () => {
  const categories = [...new Set(treatments.map((item) => item.category))];

  return (
    <>
      <SEO
        title="Treatments"
        description="Explore Skin Scanctuary dermatology, hair restoration, laser, hydrafacial, acne, pigmentation, anti-aging, and aesthetic treatments."
        path="/treatments"
      />
      <PageHero
        eyebrow="Treatment Menu"
        title="Personalized dermatology, hair, laser, and aesthetic treatments"
        description="Choose from doctor-guided treatment pathways designed around diagnosis, safety, realistic outcomes, and long-term skin confidence."
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-14">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-6 text-3xl font-bold text-dark">{category} Treatments</h2>
              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {treatments.filter((item) => item.category === category).map((item, index) => (
                  <motion.article
                    key={item.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  >
                    <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="p-7">
                      <span className="text-sm font-semibold text-primary">{item.category}</span>
                      <h3 className="mt-2 text-2xl font-bold text-dark">{item.title}</h3>
                      <p className="mt-4 leading-relaxed text-gray-600">{item.short}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link to={`/treatments/${item.slug}`} className="rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary">
                          Learn More
                        </Link>
                        <Link to="/book-appointment" className="rounded-full border border-primary px-5 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
                          Book
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Not sure which treatment is right for you?" />
    </>
  );
};

export default Treatments;

