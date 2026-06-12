import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

import heroBg from "../../assets/hero/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "99%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* White Overlay */}

      {/* <div className="absolute inset-0 bg-white/75" /> */}

      {/* Purple Glow Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Advanced Dermatology & Aesthetic Care
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-[60px] font-bold leading-tight text-dark">
              Healthy Skin.
              <br />
              Confident You.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-[650px]">
              Personalized dermatology solutions designed to
              restore, rejuvenate, and protect your skin with
              medical precision and aesthetic excellence.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/book-appointment"
                className="
                  bg-primary
                  text-white
                  px-8
                  py-4
                  rounded-full
                  flex
                  items-center
                  gap-3
                  hover:bg-secondary
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-primary/20
                "
              >
                Book Appointment

                <FaArrowRight />
              </Link>

              <Link
                to="/treatments"
                className="
                  border
                  border-primary
                  text-primary
                  px-8
                  py-4
                  rounded-full
                  hover:bg-primary
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Explore Treatments
              </Link>

            </div>

            <div className="flex gap-8 mt-10">

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  500+
                </h3>

                <p className="text-gray-500">
                  Happy Patients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  10+
                </h3>

                <p className="text-gray-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  5.0
                </h3>

                <p className="text-[#FFD700] flex items-center gap-1">
                  <FaStar />
                  Rating
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

             

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
