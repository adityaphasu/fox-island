import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="block-container flex h-20 w-20 items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {children}

      {visible && (
        <div className="absolute -left-7 -top-[3.65rem] z-20 w-32 rounded-lg bg-brown-550 py-1.5 text-center">
          <span className=" text-sm font-semibold text-offwhite">{text}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
