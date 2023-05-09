import React from "react";
import { motion as m } from "framer-motion";

const JoinButton = () => {
  return (
    <div>
      <m.button
        className="btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Join Now
      </m.button>
    </div>
  );
};

export default JoinButton;
