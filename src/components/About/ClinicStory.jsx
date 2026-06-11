import { motion } from "framer-motion";

const ClinicStory = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-40">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary">
              ✦ Our Story
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-dark">
              More Than
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                A Clinic
              </span>
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >

            <div className="relative rounded-[32px] border border-gray-100 bg-white p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">

              {/* Quote Mark */}
              <div className="absolute top-8 left-8 text-8xl font-serif text-primary/10 leading-none">
                "
              </div>

              <div className="relative z-10">

                <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 font-light">
                  At <span className="font-semibold text-dark">Skin Sanctuary</span>,
                  we believe healthy skin is more than aesthetics—
                  it is confidence, wellness, and self-assurance.
                </p>

                <p className="mt-8 text-lg leading-relaxed text-gray-600">
                  Every consultation begins with understanding the
                  individual behind the concern. By combining
                  evidence-based dermatology, advanced technology,
                  and personalized care, we create treatment plans
                  designed to deliver safe, natural, and lasting
                  results.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-12 w-[2px] bg-primary" />
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    Science • Trust • Excellence
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ClinicStory;
