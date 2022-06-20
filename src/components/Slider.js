import React, { useState } from "react";
import Ques from "./Ques";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Slider({ isShow, show }) {
  const [renderAbt, setrenderAbt] = useState(false);

  const showAbt = (e) => {
    e.stopPropagation();
    setrenderAbt((pre) => !pre);
  };

  const btnVariant = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1.04,
      transition: {
        delay: 2,
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`slider ${show && "active"} `}>
      {renderAbt ? (
        <div className="abtme-description">
          <div className="eating">
            Hello! I am Naing Htet Wai. Front-End Developer who focuses on
            writing clean code and creative web design with HTML, CSS and React
            JS.
            <small
              style={{ color: "#aaa", cursor: "pointer", marginLeft: "1rem" }}
              onClick={(e) => showAbt(e)}
            >
              See Less
            </small>
          </div>

          <motion.button onClick={(e) => isShow(e)} className="btn-switch">
            {show ? "Close" : "Explore"}
          </motion.button>
        </div>
      ) : (
        <>
          <Ques />
          <div className="pg-heading-contain">
            <div className="pg-heading"> Who am I </div>
            <span className="underline left"></span>
            <span className="underline right"></span>
          </div>
          <motion.button
            style={{ marginTop: "2rem" }}
            variants={btnVariant}
            onClick={(e) => showAbt(e)}
            className="btn-switch"
          >
            See More
          </motion.button>
        </>
      )}
    </div>
  );
}

export default Slider;
