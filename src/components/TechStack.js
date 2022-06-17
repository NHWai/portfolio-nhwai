import React from "react";
import { FaBootstrap, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion/dist/framer-motion";

function TechStack() {
  const childVariant = {
    hidden: {
      y: 5,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        yoyo: "Infinity",
      },
    },
  };

  return (
    <>
      <motion.div variants={childVariant}>
        <FaHtml5 />
      </motion.div>
      <motion.div variants={childVariant}>
        <FaCss3 />
      </motion.div>
      <motion.div variants={childVariant}>
        <FaBootstrap />
      </motion.div>
      <motion.div variants={childVariant}>
        <FaReact />
      </motion.div>
    </>
  );
}

export default TechStack;
