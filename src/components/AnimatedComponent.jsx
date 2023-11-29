import { motion, useReducedMotion } from "framer-motion";

const AnimatedComponent = ({ tag = "div", variants, ...otherProps }) => {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = prefersReducedMotion ? "" : variants;

  return (
    <MotionTag
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, threshold: 0.5 }}
      variants={shouldAnimate}
      {...otherProps}></MotionTag>
  );
};

export default AnimatedComponent;
