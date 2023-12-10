export const pageAnimation = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.25 } },
  exit: { opacity: 0, x: -10 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.5 } },
};

export const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.5 } },
};

export const fadeInX = (value) => ({
  initial: {
    opacity: 0,
    x: value,
  },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
});

export const popOut = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 12,
      duration: 0.15,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};
