import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheck, FaClock, FaHeart, FaLeaf } from "react-icons/fa";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Accordion from "../components/common/Accordion";
import CTASection from "../components/common/CTASection";
import { getTreatmentBySlug, treatments } from "../data/treatments";

const ListCard = ({ title, items, icon }) => (
  <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_12px_36px_rgba(0,0,0,0.05)]">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{icon}</div>
    <h2 className="text-2xl font-bold text-dark">{title}</h2>
    <ul className="mt-5 space-y-3 text-gray-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <FaCheck className="mt-1 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TreatmentDetail = () => {
  const { slug } = useParams();
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  const related = treatments.filter((item) => item.slug !== treatment.slug && item.category === treatment.category).slice(0, 3);
  const steps = treatment.process.map((step, index) => `${index + 1}. ${step}`);

  return (
    <>
      <SEO
        title={treatment.title}
        description={`${treatment.short} Learn benefits, process, suitability, recovery, and consultation details.`}
        path={`/treatments/${treatment.slug}`}
      />
      <PageHero eyebrow={treatment.category} title={treatment.title} description={treatment.short} image={treatment.image} />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Overview</span>
            <h2 className="mt-4 text-3xl font-bold text-dark md:text-5xl">A medically guided plan for visible, responsible improvement</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{treatment.overview}</p>
          </motion.div>
          <div className="rounded-3xl bg-light p-8">
            <h3 className="text-2xl font-bold text-dark">Expected Results</h3>
            <p className="mt-4 leading-relaxed text-gray-600">{treatment.results}</p>
            <h3 className="mt-8 text-2xl font-bold text-dark">Recovery Information</h3>
            <p className="mt-4 leading-relaxed text-gray-600">{treatment.recovery}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom grid gap-6 lg:grid-cols-3">
          <ListCard title="Conditions Treated" items={treatment.conditions} icon={<FaHeart />} />
          <ListCard title="Benefits" items={treatment.benefits} icon={<FaLeaf />} />
          <ListCard title="Treatment Process" items={steps} icon={<FaClock />} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Suitability</span>
            <h2 className="mt-4 text-3xl font-bold text-dark md:text-5xl">Who is suitable?</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{treatment.suitable}</p>
            <Link to="/book-appointment" className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 font-semibold text-white transition hover:bg-secondary">
              Book Consultation
            </Link>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-dark">Treatment FAQ</h2>
            <Accordion items={treatment.faqs} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Related</span>
              <h2 className="mt-3 text-3xl font-bold text-dark">Related Treatments</h2>
            </div>
            <Link to="/treatments" className="font-semibold text-primary">View all treatments</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/treatments/${item.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Plan your ${treatment.title} consultation`} />
    </>
  );
};

export default TreatmentDetail;

