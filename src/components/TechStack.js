import React from "react";
import { FaBootstrap, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";
import tailwind from "../assests/tailwindcss-icon-white.svg";

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
      <motion.div className="techicon" variants={childVariant}>
        <FaHtml5 />
      </motion.div>
      <motion.div className="techicon" variants={childVariant}>
        <FaCss3 />
      </motion.div>
      <motion.div className="techicon" variants={childVariant}>
        <FaBootstrap />
      </motion.div>
      <motion.div className="techicon" variants={childVariant}>
        <FaReact />
      </motion.div>
      <motion.div className="techicon" variants={childVariant}>
        <img src={tailwind} />
      </motion.div>
    </>
  );
}

export default TechStack;
