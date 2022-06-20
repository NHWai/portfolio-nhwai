import React from "react";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

function Skillitem({ width, bg, skill }) {
  return (
    <div className="skill-item">
      <div className="skill-item-caption">{skill} </div>
      <div className="progress-bar">
        <small className="percent">
          <CountUp end={width} start={0} timer={1000 / width} delay={1000} />
          <span>%</span>
        </small>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width + "%"}` }}
          transition={{ delay: 1, duration: 1, ease: "easeIn" }}
          style={{ background: `${bg}` }}
          className="progress"
        ></motion.div>
      </div>
    </div>
  );
}

export default Skillitem;
