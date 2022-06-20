import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

function SocialBar() {
  const containerVariant = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
    exit: {
      y: "100vh",
      transition: {
        type: "tween",
      },
    },
  };

  const childVariant = {
    hidden: {
      y: 3,
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
    <motion.div variants={containerVariant} className="social-bar">
      <motion.a
        style={{ background: "#000" }}
        className="social-icon-contain"
        target="_blank"
        href="https://www.google.com/doodles"
      >
        <FaGithub className="social-icon" />
        <div className="social-icon-text"> Github </div>
      </motion.a>

      <motion.a
        style={{ background: "#00acee" }}
        className="social-icon-contain"
        target="_blank"
        href="https://www.google.com/doodles"
      >
        <FaTwitter className="social-icon" />
        <div className="social-icon-text"> Twitter </div>
      </motion.a>

      <motion.a
        style={{ background: "#0088cc" }}
        className="social-icon-contain"
        target="_blank"
        href="https://www.google.com/doodles"
      >
        <FaTelegram className="social-icon" />
        <div className="social-icon-text"> Telegram </div>
      </motion.a>

      <motion.a
        style={{ background: "#0072b1" }}
        className="social-icon-contain"
        target="_blank"
        href="https://www.google.com/doodles"
      >
        <FaLinkedin className="social-icon" />{" "}
        <div className="social-icon-text"> LinkedIn </div>
      </motion.a>
    </motion.div>
  );
}

export default SocialBar;
