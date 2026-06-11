import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-36 lg:py-44">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />

        {/* Luxury Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right,#000 1px,transparent 1px), linear-gradient(to bottom,#000 1px,transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>
      </div>

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-5xl text-center"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-medium text-primary shadow-lg shadow-primary/5 backdrop-blur-sm">
              ✦ About Skin Scanctuary
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-3xl font-bold leading-[1.05] tracking-tight text-dark md:text-6xl lg:text-6xl"
          >
            Redefining
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Dermatology,
            </span>
            <br />
            Beauty & Wellness
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-10 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            At Skin Scanctuary, we combine advanced dermatological
            science, aesthetic innovation, and personalized patient care
            to deliver exceptional outcomes. Every treatment is guided by
            clinical expertise, ethical practice, and a commitment to
            helping you achieve healthier, more confident skin.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16"
          >
            <div>
              <h3 className="text-3xl font-bold text-dark">1000+</h3>
              <p className="mt-1 text-gray-500">Happy Patients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-dark">Advanced</h3>
              <p className="mt-1 text-gray-500">Dermatology Care</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-dark">Safe</h3>
              <p className="mt-1 text-gray-500">Evidence-Based Treatments</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;