import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to ensure minimal waiting time and personalized consultation.",
  },
  {
    question: "What skin concerns do you treat?",
    answer:
      "We provide treatments for acne, acne scars, pigmentation, melasma, hair loss, anti-aging concerns, laser procedures, and various dermatological conditions.",
  },
  {
    question: "Are dermatology treatments safe?",
    answer:
      "Yes. All treatments are performed under medical supervision using clinically proven techniques and advanced technology to ensure patient safety.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your condition, treatment plan, and desired outcomes. During consultation, a personalized treatment roadmap will be provided.",
  },
  {
    question: "Do you offer laser treatments?",
    answer:
      "Yes. We offer advanced laser treatments for pigmentation, acne scars, skin rejuvenation, hair reduction, and other cosmetic concerns.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "You can schedule an appointment through our website, call the clinic directly, or contact us via WhatsApp for quick assistance.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onClick,
}) => {
  return (
    <motion.div
      layout
      className="
        bg-white
        rounded-3xl
        border
        border-gray-100
        shadow-sm
        overflow-hidden
      "
    >
      <button
        onClick={onClick}
        className="
          w-full
          flex
          justify-between
          items-center
          p-6
          text-left
        "
      >
        <h3
          className="
            text-lg
            md:text-xl
            font-semibold
            text-dark
            pr-6
          "
        >
          {faq.question}
        </h3>

        <div
          className="
            w-10
            h-10
            rounded-full
            bg-primary/10
            flex
            items-center
            justify-center
            text-primary
            shrink-0
          "
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-light overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10 max-w-5xl">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-16"
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
            Frequently Asked Questions
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
            Everything You Need
            <span className="text-primary">
              {" "}To Know
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              max-w-2xl
              mx-auto
            "
          >
            Find answers to the most common questions
            about our dermatology, hair, laser, and
            aesthetic treatments.
          </p>
        </motion.div>

        {/* FAQ Accordion */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() =>
                handleToggle(index)
              }
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;