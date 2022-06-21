import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profilesvg from "./Profilesvg";
import SocialBar from "./SocialBar";
import Logo from "./Logo";
import { motion } from "framer-motion";
import Description from "./Description";

function Home() {
  const navigate = useNavigate();
  const [startY, setStartY] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const touchstart = (e) => {
    setStartY((pre) => (pre = e.touches[0].clientY));
  };

  const touchmove = (e) => {
    setMoveY((pre) => (pre = e.touches[0].clientY));
  };

  const touchend = () => {
    if (moveY && startY + 10 > moveY) {
      navigate("/about");
    }
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const introVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 1,
      },
    },
  };

  const profileVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        duration: 1,
      },
    },
  };

  // const blobVariant = {
  //   visible: {
  //     scale: 1.1,
  //     transition: {
  //       delay: 6,
  //       yoyo: "Infinity",
  //       duration: 1,
  //     },
  //   },
  // };

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
        if (e.deltaY > 0) {
          navigate("/about");
        }
      }}
    >
      <div className="inner">
        <div className="home">
          <motion.div className="intro" variants={introVariant}>
            <div className="header">
              <div className="header-intro">Hi I'm</div>
              <Logo />
            </div>
            <div className="sub-header">Frontend Developer</div>
            <Description />
          </motion.div>
          <motion.div className="profile" variants={profileVariant}>
            <motion.div className="blob">
              <Profilesvg />
            </motion.div>
          </motion.div>
        </div>
        <div className="social-bar_contain">
          <SocialBar />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
