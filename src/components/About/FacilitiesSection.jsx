import { motion } from "framer-motion";

import consultationRoom from "../../assets/facilities/consultation-room.png";
import treatmentRoom from "../../assets/facilities/treatment-room.png";
import laserEquipment from "../../assets/facilities/laser-equipment.png";
import receptionLounge from "../../assets/facilities/reception.png";

const facilities = [
  {
    image: consultationRoom,
    title: "Private Consultation Suites",
    description:
      "Elegant consultation rooms designed to provide privacy, comfort, and personalized dermatological care.",
  },
  {
    image: treatmentRoom,
    title: "Advanced Treatment Rooms",
    description:
      "Purpose-built treatment spaces equipped to deliver safe, effective, and comfortable procedures.",
  },
  {
    image: laserEquipment,
    title: "Modern Technology",
    description:
      "Advanced dermatology and aesthetic equipment ensuring precision, safety, and optimal outcomes.",
  },
  {
    image: receptionLounge,
    title: "Luxury Patient Lounge",
    description:
      "A welcoming environment thoughtfully designed to make every visit relaxing and stress-free.",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#111827] py-32 lg:py-40">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

      </div>

      <div className="container-custom relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >

          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm">
            ✦ Inside Skin Sanctuary
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            A Clinic Experience
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crafted For Excellence
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Every space within Skin Sanctuary has been thoughtfully
            designed to create an environment where advanced
            dermatological care meets comfort, safety, and trust.
          </p>

        </motion.div>

        {/* Facilities Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
              "
            >

              {/* Image */}

              <div className="h-64 overflow-hidden">

                <img
                  src={facility.image}
                  alt={facility.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white">
                  {facility.title}
                </h3>

                <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-primary to-transparent" />

                <p className="mt-6 leading-relaxed text-gray-300">
                  {facility.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Trust Metrics */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            p-10
            md:p-16
            backdrop-blur-sm
          "
        >

          <div className="grid gap-10 text-center md:grid-cols-3">

            <div>

              <h3 className="text-5xl font-bold text-white">
                100%
              </h3>

              <p className="mt-3 text-gray-400">
                Sterilized Treatment Protocols
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-white">
                500+
              </h3>

              <p className="mt-3 text-gray-400">
                Successful Patient Transformations
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-white">
                Latest
              </h3>

              <p className="mt-3 text-gray-400">
                Dermatology Technology
              </p>

            </div>

          </div>

        </motion.div>

        {/* Quote Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-24 max-w-5xl text-center"
        >

          <p className="text-2xl font-light leading-relaxed text-white md:text-3xl lg:text-4xl">
            “Every detail within Skin Sanctuary has been carefully
            designed to create an environment where advanced
            dermatological care meets comfort, trust, and excellence.”
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default FacilitiesSection;
