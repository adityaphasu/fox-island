import { motion } from "framer-motion";

const AnimatedPage = ({ children, variants, ...props }) => {
  return (
    <motion.section {...props} variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.section>
  );
};

export default AnimatedPage;
