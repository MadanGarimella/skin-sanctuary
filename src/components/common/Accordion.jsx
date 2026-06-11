import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {items.map(([question, answer], index) => (
        <div key={question} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
          >
            <span className="font-semibold text-dark">{question}</span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              {open === index ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          <AnimatePresence>
            {open === index && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <p className="px-6 pb-6 leading-relaxed text-gray-600">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
