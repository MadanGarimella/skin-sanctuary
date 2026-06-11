import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import acne from "../../assets/treatments/acne.png";
import pigmentation from "../../assets/treatments/pigmentation.png";
import hydrafacial from "../../assets/treatments/hydrafacial.png";
import prptreatment from "../../assets/treatments/prptreatment.png";
import hair from "../../assets/treatments/hairrestoration.png";
import botox from "../../assets/treatments/botox.png";

const treatments = [
  {
    title: "Acne Treatment",
    description:
      "Advanced solutions for active acne, inflammation, and long-term skin health.",
    image: acne,
  },
  {
    title: "Pigmentation Correction",
    description:
      "Target stubborn pigmentation, melasma, and uneven skin tone effectively.",
    image: pigmentation,
  },
  {
    title: "HydraFacial",
    description:
      "Deep cleansing, hydration, and instant glow with advanced facial technology.",
    image: hydrafacial,
  },
  {
    title: "PRP Therapy",
    description:
      "Natural regenerative treatment to improve skin and stimulate hair growth.",
    image: prptreatment,
  },
  {
    title: "Hair Restoration",
    description:
      "Comprehensive solutions for hair thinning, hair fall, and scalp health.",
    image: hair,
  },
  {
    title: "Botox & Fillers",
    description:
      "Subtle rejuvenation treatments designed to enhance natural beauty.",
    image: botox,
  },
];

const FeaturedTreatments = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-light overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Signature Treatments
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-dark">
            Personalized Treatments For
            <span className="text-primary"> Healthy, Radiant Skin</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Combining medical expertise with advanced technology to deliver
            visible, long-lasting results tailored to your skin and hair goals.
          </p>
        </motion.div>

        {/* Treatment Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {treatments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -12 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                h-[300px]
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_70px_rgba(109,40,217,0.18)]
                transition-all
                duration-500
              "
            >

              {/* Image */}

              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Base Gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* Hover Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-primary
                  via-primary/90
                  to-primary/30
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                  z-10
                "
              >

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                  "
                >
                  {item.title}
                </h3>

                {/* Hidden Content */}

                <div
                  className="
                    max-h-0
                    opacity-0
                    overflow-hidden
                    group-hover:max-h-40
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <p className="mt-4 text-white/90 leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    to="/book-appointment"
                    className="
                      mt-5
                      flex
                      items-center
                      gap-3
                      text-white
                      font-medium
                      hover:gap-4
                      transition-all
                      duration-300
                    "
                  >
                    Book Consultation now

                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/treatments"
            className="
              px-8
              py-4
              rounded-full
              bg-primary
              text-white
              font-medium
              hover:bg-secondary
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-primary/20
            "
          >
            View All Treatments
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedTreatments;
