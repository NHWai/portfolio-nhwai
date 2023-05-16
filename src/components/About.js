import React, { useState } from "react";
import "../css/about.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ideas from "../assests/ideas.gif";
import Slider from "./Slider";

import { FaCode } from "react-icons/fa";
import Skillitem from "./Skillitem";

function About() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [startY, setStartY] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const touchstart = (e) => {
    setStartY((pre) => (pre = e.touches[0].clientY));
  };

  const touchmove = (e) => {
    setMoveY((pre) => (pre = e.touches[0].clientY));
  };

  const touchend = (e) => {
    if (moveY && startY + 10 < moveY) {
      navigate("/");
    }
    if (moveY && startY + 10 > moveY) {
      navigate("/projects");
    }
  };

  const isShow = (e) => {
    e.stopPropagation();
    setShow((pre) => !pre);
  };

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
      onTouchStart={touchstart}
      onTouchMove={touchmove}
      onTouchEnd={touchend}
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

            {show && (
              <div className="skill-item_contain">
                <Skillitem skill="HTML" width={75} bg="rgb(70, 70, 255)" />
                <Skillitem skill="CSS" width={70} bg="orangered" />
                <Skillitem skill="Github" width={50} bg="green" />
                <Skillitem skill="React" width={60} bg="#61dbfb" />
                <Skillitem skill="Typescript" width={45} bg="#007acc" />
                <Skillitem skill="Nodejs" width={45} bg="#303030" />
              </div>
            )}
          </div>

          {window.innerWidth < 640 && show ? null : (
            <div className={`services`}>
              <div className="pg-heading-contain">
                <div className="pg-heading">Services</div>
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
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
