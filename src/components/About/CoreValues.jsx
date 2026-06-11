import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Award,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We uphold transparency, honesty, and ethical medical practices in every patient interaction.",
    icon: ShieldCheck,
  },
  {
    title: "Compassion",
    description:
      "Every patient receives personalized attention, empathy, and care throughout their journey.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description:
      "We embrace advanced technologies and evidence-based treatments to deliver exceptional outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in dermatology, aesthetics, and patient satisfaction.",
    icon: Award,
  },
];

const CoreValues = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-32 lg:py-40">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary">
            ✦ Our Philosophy
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-dark">
            The Values That
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Guide Every Decision
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            At Skin Sanctuary, our commitment extends beyond treatments.
            These principles shape every consultation, recommendation,
            and patient experience.
          </p>

        </div>

        {/* Values Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3 },
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
              >

                {/* Hover Glow */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon
                      size={30}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-dark">
                    {value.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-primary to-transparent" />

                  <p className="mt-6 leading-relaxed text-gray-600">
                    {value.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;
