"use client";

import React from "react";
import { motion } from "framer-motion";

const barVariants = {
  animate: (i) => ({
    scaleY: [1, 1.5, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      duration: 0.8,
      delay: i * 0.1,
    },
  }),
};

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-8 bg-black rounded"
            variants={barVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
