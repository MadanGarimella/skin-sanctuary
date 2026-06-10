export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const scaleHover = {
  whileHover: {
    scale: 1.05,
  },
};

export const imageHover = {
  whileHover: {
    scale: 1.08,
  },
};