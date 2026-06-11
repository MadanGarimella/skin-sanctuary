import { FaGoogle, FaPlay, FaQuoteLeft, FaStar } from "react-icons/fa";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";

const reviews = [
  ["Priya R.", "My acne treatment plan was explained clearly and I saw steady improvement with follow-ups."],
  ["Anjali K.", "The clinic feels modern and calm. The doctor took time to understand my pigmentation concern."],
  ["Rahul V.", "Professional team, clean facility, and practical guidance for hair fall treatment."],
  ["Sneha M.", "I appreciated how natural and subtle the aesthetic advice was. Nothing felt rushed."],
  ["Keerthana S.", "The consultation helped me understand what my skin actually needed."],
  ["Madhavi P.", "Great experience from booking to aftercare. The staff was responsive on WhatsApp."],
];

const Testimonials = () => (
  <>
    <SEO title="Testimonials" description="Read patient reviews, rating highlights, and care experiences from Skin Scanctuary dermatology and aesthetic clinic." path="/testimonials" />
    <PageHero eyebrow="Patient Reviews" title="Patient experiences built on clarity, care, and trust" description="See how patients describe the consultation experience, treatment planning, clinic environment, and follow-up support." />

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-light p-8">
          <FaGoogle className="text-5xl text-primary" />
          <h2 className="mt-6 text-5xl font-bold text-dark">4.9</h2>
          <div className="mt-3 flex gap-1 text-yellow-400">{Array.from({ length: 5 }).map((_, index) => <FaStar key={index} />)}</div>
          <p className="mt-4 text-gray-600">Based on patient feedback and clinic experience highlights.</p>
        </div>
        <div className="rounded-3xl border border-gray-100 p-8">
          <div className="grid min-h-72 place-items-center rounded-3xl bg-gradient-to-br from-primary/15 to-accent/15 text-center">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-lg"><FaPlay /></div>
              <h2 className="mt-5 text-2xl font-bold text-dark">Video Review Placeholder</h2>
              <p className="mt-3 text-gray-600">Ready for future patient video testimonials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Written Reviews</span>
          <h2 className="mt-4 text-4xl font-bold text-dark">What patients appreciate</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map(([name, review]) => (
            <article key={name} className="rounded-3xl bg-white p-7 shadow-sm">
              <FaQuoteLeft className="text-3xl text-primary" />
              <p className="mt-5 leading-relaxed text-gray-600">{review}</p>
              <h3 className="mt-6 font-bold text-dark">{name}</h3>
              <p className="text-sm text-gray-500">Patient Experience</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom grid gap-6 md:grid-cols-4">
        {["Clear explanations", "Clean facility", "Responsive team", "Personalized plans"].map((item) => (
          <div key={item} className="rounded-3xl bg-light p-7 text-center font-bold text-dark">{item}</div>
        ))}
      </div>
    </section>

    <CTASection title="Start your own treatment journey" />
  </>
);

export default Testimonials;
