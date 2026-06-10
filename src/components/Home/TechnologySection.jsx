import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaBolt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const technologies = [
  {
    icon: <FaMicroscope />,
    title: "Advanced Diagnostics",
    description:
      "Accurate skin analysis and diagnosis using modern dermatology tools and evidence-based assessment techniques.",
  },
  {
    icon: <FaBolt />,
    title: "Laser Technology",
    description:
      "Precision laser treatments for pigmentation, acne scars, hair removal, rejuvenation, and skin resurfacing.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Effective Care",
    description:
      "Every treatment is performed using clinically proven protocols with patient safety as our highest priority.",
  },
];

const stats = [
  {
    value: "100%",
    label: "Safety Focused",
  },
  {
    value: "Latest",
    label: "Technology",
  },
  {
    value: "Proven",
    label: "Results",
  },
  {
    value: "Advanced",
    label: "Equipment",
  },
];

const TechnologySection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-light to-white">

      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-primary/10
              text-primary
              text-sm
              font-medium
            "
          >
            Technology & Innovation
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-dark
            "
          >
            Advanced Dermatology
            <span className="text-primary">
              {" "}Technology
            </span>
            <br />
            For Exceptional Results
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            At Skin Scanctuary, we combine medical expertise with
            modern dermatology technology to provide safer,
            faster, and more effective treatments for skin,
            hair, laser, and aesthetic concerns.
          </p>
        </motion.div>

        {/* Technology Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {technologies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                bg-white
                rounded-[32px]
                p-8
                border
                border-gray-100
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_70px_rgba(109,40,217,0.12)]
                transition-all
                duration-500
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-primary/10
                  flex
                  items-center
                  justify-center
                  text-primary
                  text-3xl
                  mb-6
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-dark mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Trust Strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-20
            bg-white
            rounded-[36px]
            border
            border-gray-100
            shadow-[0_15px_50px_rgba(0,0,0,0.04)]
            p-8
            md:p-12
          "
        >

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {item.value}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

        {/* Technology Assurance */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <FaCheckCircle className="text-primary text-xl" />

          <p className="text-gray-600 font-medium">
            Modern Equipment • Evidence-Based Treatments • Patient Safety First
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnologySection;