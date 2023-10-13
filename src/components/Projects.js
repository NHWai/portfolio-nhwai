import React, { useState } from "react";
import Pjcard from "./Pjcard";
import { useNavigate } from "react-router-dom";
import PjDatas from "../assests/pjdata.json";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  const navigate = useNavigate();
  const [item1, item2, item3, item4] = PjDatas;
  const initial = [item1, item2, item3, item4];

  const [startY, setStartY] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const touchstart = (e) => {
    setStartY((pre) => (pre = e.touches[0].clientY));
  };

  const touchmove = (e) => {
    setMoveY((pre) => e.touches[0].clientY);
  };

  const touchend = (e) => {
    if (moveY && startY + 10 < moveY) {
      navigate("/about");
    }
    // if (moveY && startY + 10 < moveY) {
    //   navigate("/");
    // }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.div
      onTouchStart={touchstart}
      onTouchMove={touchmove}
      onTouchEnd={touchend}
      onWheel={(e) => {
        if (e.deltaY < 0) {
          navigate("/about");
        }
        if (e.deltaY > 0) {
          navigate("/");
        }
      }}
      className="content"
    >
      <div className="inner">
        <div className="project">
          <div className="pg-heading-contain project-header">
            <div className="pg-heading"> Recent Projects </div>
            <span className="underline left"></span>
            <span className="underline right"></span>
          </div>

          <div className="pj-card_contain">
            <Carousel draggable infinite responsive={responsive}>
              {initial.map((el, idx) => (
                <Pjcard
                  key={idx}
                  name={el.name}
                  tech={el.tech}
                  imgurl={el.imgurl}
                  codeurl={el.codeurl}
                  demourl={el.demourl}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
