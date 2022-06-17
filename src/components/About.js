import React, { useState } from "react";
import "../css/about.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ideas from "../assests/ideas.gif";
import Slider from "./Slider";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { FaCode } from "react-icons/fa";

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
        <div className="abt-contain">
          <Slider isShow={isShow} show={show} />
          <div className="skills">
            <div className="pg-heading-contain">
              <div className="pg-heading">Skills</div>
              <span className="underline left"></span>
              <span className="underline right"></span>
            </div>
            <div className="skill-item_contain">
              <div className="skill-item">
                <div className="skill-item-caption">HTML</div>
                <div className="progress-bar">
                  <div
                    style={{ background: "rgb(70, 70, 255)", width: "65%" }}
                    className="progress"
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-item-caption">CSS </div>
                <div className="progress-bar">
                  <div
                    style={{ background: "orangered", width: "75%" }}
                    className="progress"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="pg-heading-contain">
              <div className="pg-heading">Services </div>
              <span className="underline left"></span>
              <span className="underline right"></span>
            </div>
            <div className="service-items">
              <div className="service-item">
                <img src={ideas} />
                <p>
                  Creative <br /> Ideas
                </p>
              </div>
              <div className="service-item">
                <div className="code-icon">
                  <FaCode />
                </div>
                <p>
                  Web <br /> Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
