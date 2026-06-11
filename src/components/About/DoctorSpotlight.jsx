import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Users,
  Stethoscope,
} from "lucide-react";

import doctor from "../../assets/doctor/doctor.png";

const DoctorSpotlight = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-40">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        <div className="grid items-center gap-20 lg:grid-cols-12">

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-primary/10 blur-2xl" />

              {/* Image */}
              <motion.img
                src={doctor}
                alt="Dr. Vaishnavi Nendraganti"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full rounded-[40px] border border-white shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
              />

              {/* Floating Experience Card */}
              <div className="absolute -bottom-8 right-6 z-20 rounded-3xl bg-white px-8 py-5 shadow-2xl">
                <h3 className="text-3xl font-bold text-primary">
                  10+
                </h3>
                <p className="text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >

            <span className="inline-flex items-center rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary">
              ✦ Meet Your Dermatologist
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-dark">
              Dr. Vaishnavi
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nendraganti
              </span>
            </h2>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Consultant Dermatologist specializing in
              clinical dermatology, trichology, laser
              treatments, and aesthetic medicine.
            </p>

            <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              With a passion for delivering evidence-based
              dermatological care, Dr. Vaishnavi combines
              advanced medical expertise with a personalized
              approach to help patients achieve healthier skin,
              stronger hair, and lasting confidence.
            </p>

            {/* Credentials */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <GraduationCap
                    size={22}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">
                    Specialized Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Clinical Dermatology & Aesthetic Medicine
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Award
                    size={22}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">
                    Advanced Treatments
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Lasers, Hair Restoration & Skin Rejuvenation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Users
                    size={22}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">
                    500+ Patients
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Trusted by individuals across Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Stethoscope
                    size={22}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">
                    Patient-Centered Care
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Personalized treatment plans for every patient
                  </p>
                </div>
              </div>

            </div>

            {/* Signature */}
            <div className="mt-14 border-l-2 border-primary pl-6">
              <p className="text-lg italic text-gray-600">
                "Healthy skin is not just about appearance —
                it is about confidence, comfort, and overall well-being."
              </p>

              <p className="mt-4 font-semibold text-dark">
                — Dr. Vaishnavi Nendraganti
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DoctorSpotlight;