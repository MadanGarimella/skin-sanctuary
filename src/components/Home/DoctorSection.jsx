import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaUserMd,
  FaArrowRight,
} from "react-icons/fa";

import doctor from "../../assets/doctor/doctor.png";

const DoctorSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* Background Effects */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-center">

          {/* Doctor Image Section */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[540px] mx-auto"
          >

            {/* Decorative Border */}

            <div className="absolute -top-5 -left-5 w-full h-full border border-primary/15 rounded-[40px]" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-gradient-to-br
                from-primary/5
                to-accent/5
                shadow-[0_20px_60px_rgba(109,40,217,0.08)]
                group
              "
            >

              <motion.img
                src={doctor}
                alt="Dr. Vaishnavi Nendraganti"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="
                  w-full
                  h-[380px]
                  md:h-[450px]
                  object-cover
                "
              />

              {/* Doctor Info Card */}

              <div
                className="
                  absolute
                  left-6
                  bottom-6
                  bg-white/95
                  backdrop-blur-md
                  rounded-2xl
                  px-5
                  py-4
                  shadow-lg
                "
              >
                <h4 className="font-bold text-lg text-dark">
                  Dr. Vaishnavi Nendraganti
                </h4>

                <p className="text-sm text-gray-500">
                  Consultant Dermatologist
                </p>
              </div>

            </div>

            {/* Rating Badge */}

            

          </motion.div>

          {/* Content Section */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              Meet Your Specialist
            </span>

            <h2
              className="
                mt-6
                text-4xl
                lg:text-5xl
                xl:text-6xl
                font-bold
                leading-[1.1]
                text-dark
              "
            >
              Expert Dermatology Care
              <br />
              <span className="text-primary">
                Backed By Experience
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Dr. Vaishnavi Nendraganti is dedicated to delivering
              advanced dermatology, hair restoration, laser, and
              aesthetic treatments through evidence-based medical
              care and personalized treatment plans designed around
              every patient's unique needs and goals.
            </p>

            {/* Credentials */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  bg-light
                  rounded-2xl
                "
              >
                <FaUserMd className="text-primary text-2xl" />

                <div>
                  <h4 className="font-semibold">
                    10+ Years
                  </h4>

                  <p className="text-sm text-gray-500">
                    Clinical Experience
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  bg-light
                  rounded-2xl
                "
              >
                <FaAward className="text-primary text-2xl" />

                <div>
                  <h4 className="font-semibold">
                    Certified Expert
                  </h4>

                  <p className="text-sm text-gray-500">
                    Skin, Hair & Aesthetics
                  </p>
                </div>
              </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-4 gap-8 mt-10">

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  500+
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Happy Patients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  10+
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  25+
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Treatments Offered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  4.5
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Patient Rating
                </p>
              </div>

            </div>

            {/* CTA Buttons */}

            <div className="flex flex-wrap gap-4 mt-12">

              <Link
                to="/book-appointment"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-primary
                  text-white
                  font-medium
                  hover:bg-secondary
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-primary/20
                "
              >
                Book Consultation
              </Link>

              <Link
                to="/doctor"
                className="
                  flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  border
                  border-primary
                  text-primary
                  font-medium
                  hover:bg-primary
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                View Full Profile
                <FaArrowRight />
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default DoctorSection;
