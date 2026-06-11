import { motion } from "framer-motion";
import { FaClipboardCheck, FaComments, FaRegCalendarCheck, FaUserMd } from "react-icons/fa";

const steps = [
  ["Book", "Choose an appointment slot online or through WhatsApp.", <FaRegCalendarCheck />],
  ["Consult", "Meet the dermatologist for diagnosis and goal setting.", <FaComments />],
  ["Plan", "Receive a treatment roadmap with realistic outcomes.", <FaClipboardCheck />],
  ["Review", "Track results with follow-up care and maintenance.", <FaUserMd />],
];

const ProcessTimeline = () => (
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Patient Journey</span>
        <h2 className="mt-6 text-4xl font-bold text-dark md:text-5xl">A clear process from concern to care</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map(([title, description, icon], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl bg-light p-7"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">{icon}</div>
            <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
            <h3 className="mt-2 text-2xl font-bold text-dark">{title}</h3>
            <p className="mt-3 text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
