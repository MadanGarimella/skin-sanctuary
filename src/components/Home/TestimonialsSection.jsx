import { motion } from "framer-motion";
import {
  FaStar,
  FaGoogle,
  FaQuoteLeft,
} from "react-icons/fa";
import GoogleIconIcon from '@iconify-react/logos/google-icon';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    name: "Priya R.",
    review:
      "Dr. Vaishnavi is extremely professional and patient. My acne has improved significantly within a few months.",
  },
  {
    name: "Anjali K.",
    review:
      "The clinic is clean, modern, and welcoming. The treatment plan was explained clearly and the results were excellent.",
  },
  {
    name: "Sneha M.",
    review:
      "Highly recommended for pigmentation treatments. Very happy with the outcome and overall experience.",
  },
  {
    name: "Rahul V.",
    review:
      "Excellent dermatologist. The staff was friendly and the treatment was effective from the first few sessions.",
  },
  {
    name: "Keerthana S.",
    review:
      "Professional consultation and personalized care. I felt comfortable throughout the entire treatment process.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-light overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
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
            Patient Experiences
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-bold
              text-dark
            "
          >
            Trusted By Hundreds Of
            <span className="text-primary">
              {" "}Happy Patients
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Real experiences shared by patients who trusted
            Skin Sanctuary with their skin, hair, and aesthetic concerns.
          </p>
        </motion.div>

        {/* Rating Summary */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mt-14
            bg-white
            rounded-[32px]
            p-8
            shadow-[0_15px_50px_rgba(0,0,0,0.05)]
            border
            border-gray-100
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
        >
          <div className="flex items-center gap-5">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-primary/10
                flex
                items-center
                justify-center
              "
            >
              {/* <FaGoogle className="text-primary text-3xl" /> */}
              <GoogleIconIcon height="1em" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-dark">
                4.9
              </h3>

              <div className="flex text-yellow-400 gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-500 mt-2">
                Based on 150+ Google Reviews
              </p>
            </div>

          </div>

          
        </motion.div>

        {/* Reviews Slider */}

        <div className="mt-16">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >

            {reviews.map((review, index) => (
              <SwiperSlide key={index}>

                <div
                  className="
                    h-full
                    bg-white
                    p-8
                    rounded-[32px]
                    border
                    border-gray-100
                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_20px_60px_rgba(109,40,217,0.12)]
                    transition-all
                    duration-500
                  "
                >

                  <FaQuoteLeft className="text-primary text-3xl mb-6" />

                  <p className="text-gray-600 leading-relaxed">
                    {review.review}
                  </p>

                  <div className="flex items-center justify-between mt-8">

                    <div>
                      <h4 className="font-semibold text-dark">
                        {review.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        Verified Google Review
                      </p>
                    </div>

                    <FaGoogle className="text-primary text-xl" />

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;
