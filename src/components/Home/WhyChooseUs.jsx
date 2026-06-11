import { motion } from "framer-motion";
import {
  FaAward,
  FaUserMd,
  FaMicroscope,
  FaHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd />,
    title: "Expert Dermatologist",
    description:
      "Personalized diagnosis and treatment plans guided by extensive clinical expertise.",
  },
  {
    icon: <FaMicroscope />,
    title: "Advanced Technology",
    description:
      "Modern dermatology equipment and evidence-based procedures for superior outcomes.",
  },
  {
    icon: <FaAward />,
    title: "Proven Results",
    description:
      "Trusted by hundreds of patients for effective skin, hair, and aesthetic solutions.",
  },
  {
    icon: <FaHeart />,
    title: "Patient-Centric Care",
    description:
      "Compassionate consultations and treatments tailored to your unique concerns.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-light">

      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
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
            Why Choose Skin Sanctuary
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              text-dark
            "
          >
            Excellence In Dermatology,
            <span className="text-primary">
              {" "}Care You Can Trust
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Combining advanced medical expertise, cutting-edge technology,
            and personalized care to help you achieve healthier skin,
            stronger hair, and lasting confidence.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => (
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
                relative
                bg-white
                rounded-[32px]
                p-8
                border
                border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                hover:shadow-[0_20px_60px_rgba(109,40,217,0.12)]
                transition-all
                duration-500
                overflow-hidden
              "
            >

              {/* Hover Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-primary/5
                  to-accent/5
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  z-10
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

              {/* Content */}

              <div className="relative z-10">

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-dark
                    mb-4
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            text-center
          "
        >

          <div>
            <h3 className="text-4xl font-bold text-primary">
              500+
            </h3>
            <p className="text-gray-500 mt-2">
              Happy Patients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">
              10+
            </h3>
            <p className="text-gray-500 mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">
              25+
            </h3>
            <p className="text-gray-500 mt-2">
              Treatments Offered
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">
              4.9★
            </h3>
            <p className="text-gray-500 mt-2">
              Patient Rating
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
