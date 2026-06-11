import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40 bg-white">

      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />

      </div>

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[48px]
            bg-gradient-to-br
            from-primary
            via-primary
            to-secondary
            px-8
            py-16
            md:px-16
            lg:px-24
            lg:py-24
            text-center
            text-white
            shadow-[0_40px_120px_rgba(0,0,0,0.15)]
          "
        >

          {/* Decorative Elements */}

          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/20
                bg-white/10
                px-6
                py-3
                text-sm
                font-medium
                backdrop-blur-sm
              "
            >
              ✦ Schedule Your Consultation
            </span>

            {/* Heading */}

            <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Begin Your
              <span className="block">
                Skin Transformation
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/85">
              Discover personalized dermatology, hair restoration,
              laser, and aesthetic treatments tailored to your
              unique concerns by our experienced specialist.
            </p>

            {/* Trust Indicators */}

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm md:text-base text-white/80">

              <div>✓ Personalized Treatment Plans</div>

              <div>✓ Advanced Technology</div>

              <div>✓ Evidence-Based Care</div>

            </div>

            {/* CTA Button */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-10
                py-5
                text-lg
                font-semibold
                text-primary
                shadow-2xl
                transition-all
                duration-300
              "
            >
              Book Your Appointment

              <FaArrowRight />
            </motion.button>

            {/* Small Trust Text */}

            <p className="mt-8 text-sm tracking-wide text-white/70">
              Trusted by patients seeking expert skin and hair care
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutCTA;