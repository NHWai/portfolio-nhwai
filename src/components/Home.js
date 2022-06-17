import React from "react";
import { useNavigate } from "react-router-dom";
import Profilesvg from "./Profilesvg";
import SocialBar from "./SocialBar";
import Logo from "./Logo";
import { motion } from "framer-motion/dist/framer-motion";
import Description from "./Description";

function Home() {
  const navigate = useNavigate();
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        // when: "beforeChildren",
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

  const blobVariant = {
    visible: {
      scale: 1.1,
      transition: {
        delay: 6,
        yoyo: "Infinity",
        duration: 1,
      },
    },
  };

  const socicalBarVariant = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
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
    <motion.div
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
              Hi, I'm <br /> <Logo />
            </div>
            <div className="sub-header">Frontend Developer</div>

            <Description />
          </motion.div>
          <motion.div className="profile" variants={profileVariant}>
            <motion.div className="blob" variants={blobVariant}>
              <Profilesvg />
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="social-bar_contain" variants={socicalBarVariant}>
          <SocialBar />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
