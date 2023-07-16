import React from "react";
import { FaGithub, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
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

  return (
    <motion.div variants={containerVariant} className="social-bar">
      <motion.a
        style={{ background: "#000" }}
        className="social-icon-contain"
        target="_blank"
        href="https://github.com/NHWai"
      >
        <FaGithub className="social-icon" />
        <div className="social-icon-text"> Github </div>
      </motion.a>

      <motion.a
        style={{ background: "#00acee" }}
        className="social-icon-contain"
        target="_blank"
        href="https://twitter.com/Archerootw"
      >
        <FaTwitter className="social-icon" />
        <div className="social-icon-text"> Twitter </div>
      </motion.a>

      <motion.a
        style={{ background: "#000" }}
        className="social-icon-contain"
        target="_blank"
        href="mailto:nayhtetwinee@gmail.com?subject=The%20subject%20of%20the%20email"
      >
        <FaTelegram className="social-icon" />
        <div className="social-icon-text">Gmail </div>
      </motion.a>

      <motion.a
        style={{ background: "#0072b1" }}
        className="social-icon-contain"
        target="_blank"
        href="https://www.linkedin.com/in/naing-htet-wai-28770a194/"
      >
        <FaLinkedin className="social-icon" />{" "}
        <div className="social-icon-text"> LinkedIn </div>
      </motion.a>
    </motion.div>
  );
}

export default SocialBar;
