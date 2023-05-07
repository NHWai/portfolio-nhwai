import React, { useState } from "react";
import Ques from "./Ques";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Slider({ isShow, show }) {
  return (
    <div className={`slider ${show && "active"} `}>
      {window.innerWidth < 640 && show ? (
        <motion.button
          style={{ marginTop: "2rem" }}
          onClick={(e) => isShow(e)}
          // onClick={(e) => showAbt(e)}
          className="btn-switch"
        >
          See Services
        </motion.button>
      ) : (
        <>
          <Ques />
          <div className="pg-heading-contain-abt">
            What {show ? " Services " : "Skills"} <br /> I{" "}
            {show ? "provide " : "have"}{" "}
            <span className="underline left"></span>
            <span className="underline right"></span>
          </div>
          <motion.button
            style={{ marginTop: "2rem" }}
            onClick={(e) => isShow(e)}
            // onClick={(e) => showAbt(e)}
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
