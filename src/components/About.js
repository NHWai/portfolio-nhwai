import React, { useState } from "react";
import "../css/about.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import AboutMeSvg from "./AboutMeSvg";
import Ques from "./Ques";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function About() {
  const [show, setShow] = useState(false);

  const isShow = () => setShow((pre) => !pre);

  const navigate = useNavigate();
  const containerVariant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="content"
      onWheel={(e) => {
        if (e.deltaY < 0) {
          navigate("/");
        } else if (e.deltaY > 0) {
          navigate("/projects");
        }
      }}
    >
      <div className="inner">
        <motion.div
          className="ques"
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: 180, y: 60 }}
          transition={{ delay: 1, duration: 0.3, rotate: { type: "spring" } }}
        >
          <Ques />
        </motion.div>

        <div className="abt-contain">
          <div className={`slider ${show && "active"} `}>
            <div className="pg-heading-contain">
              <div className="pg-heading"> About Me </div>
              <span className="underline left"></span>
              <span className="underline right"></span>
            </div>
            <button onClick={isShow} className="btn-switch">
              {!show ? <> See More &#8594; </> : <>&#8592; See Less</>}
            </button>
          </div>
          <div className={`abtme-description ${show && "active"} `}>
            <FaQuoteLeft className="quote left" />
            <div>
              lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Adipisci ipsum molestias dicta perferendis explicabo sequi
              nisi sed voluptatem nostrum quisquam.
            </div>
            <FaQuoteRight className="quote right" />
          </div>

          <AboutMeSvg show={show} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
