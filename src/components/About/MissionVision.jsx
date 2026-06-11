import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-32 lg:py-40">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary">
            ✦ Our Purpose
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-dark">
            Guided By
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Excellence & Trust
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Every decision at Skin Scanctuary is driven by our
            commitment to exceptional patient care, innovation,
            and ethical dermatological excellence.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Mission */}
          <motion.div
            whileHover={{
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="group relative overflow-hidden rounded-[36px] border border-white/60 bg-white p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
          >

            {/* Decorative Glow */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

            <div className="relative z-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Target size={30} className="text-primary" />
              </div>

              <h3 className="mt-8 text-4xl font-bold text-dark">
                Our Mission
              </h3>

              <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-primary to-transparent" />

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                To deliver world-class dermatology, hair restoration,
                laser, and aesthetic treatments through evidence-based
                medicine, advanced technology, and compassionate
                patient-centered care.
              </p>

            </div>

          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="group relative overflow-hidden rounded-[36px] border border-white/60 bg-white p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
          >

            {/* Decorative Glow */}
            <div className="absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

            <div className="relative z-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Eye size={30} className="text-primary" />
              </div>

              <h3 className="mt-8 text-4xl font-bold text-dark">
                Our Vision
              </h3>

              <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-primary to-transparent" />

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                To become the most trusted destination for skin,
                hair, laser, and aesthetic excellence—setting new
                standards in dermatology through innovation,
                safety, and outstanding patient outcomes.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;