import React from "react";
import Ques from "./Ques";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Slider({ isShow, show }) {
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
      {show ? (
        <div className="abtme-description">
          <FaQuoteLeft className="quote left" />
          <div>
            lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci ipsum molestias dicta perferendis explicabo sequi nisi sed
            voluptatem nostrum quisquam.
          </div>
          <FaQuoteRight className="quote right" />
          <motion.button onClick={isShow} className="btn-switch">
            See Less
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
            variants={btnVariant}
            onClick={isShow}
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
