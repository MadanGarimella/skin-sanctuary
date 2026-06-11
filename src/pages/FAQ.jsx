import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Accordion from "../components/common/Accordion";
import CTASection from "../components/common/CTASection";
import { faqCategories } from "../data/faq";

const FAQ = () => (
  <>
    <SEO title="FAQs" description="Answers to common questions about dermatology, hair treatment, laser, aesthetics, consultation, and booking at Skin Scanctuary." path="/faq" />
    <PageHero eyebrow="FAQ" title="Clear answers before your consultation" description="Browse common questions by category so you can feel informed before choosing a treatment or booking an appointment." />

    <section className="section-padding bg-white">
      <div className="container-custom space-y-12">
        {faqCategories.map((group) => (
          <div key={group.category} className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Category</span>
              <h2 className="mt-3 text-3xl font-bold text-dark">{group.category}</h2>
            </div>
            <Accordion items={group.items} />
          </div>
        ))}
      </div>
    </section>

    <CTASection title="Still have questions?" description="Book a consultation or message the clinic team for guidance about your concern." />
  </>
);

export default FAQ;

