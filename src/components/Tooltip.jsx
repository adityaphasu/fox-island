import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent";
import { popOut } from "../utils/animatedVariants";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="block-container flex h-20 w-20 items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {children}
      <AnimatePresence>
        {visible && (
          <AnimatedComponent
            variants={popOut}
            exit="exit"
            className="absolute -left-7 -top-[3.65rem] z-20 w-32 rounded-lg bg-brown-550 py-1.5 text-center">
            <span className=" text-sm font-semibold text-offwhite">{text}</span>
          </AnimatedComponent>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
