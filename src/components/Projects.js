import React, { useState } from "react";
import Pjcard from "./Pjcard";
import { useNavigate } from "react-router-dom";

import PjDatas from "../assests/pjdata.json";
import Webflow from "../assests/webflow-icon.svg";
import VanillaJs from "../assests/javascript-horizontal.svg";
import ReAct from "../assests/reactjs-icon.svg";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import TechStack from "./TechStack";
import tt from "../assests/techstack.svg";

function Projects() {
  const navigate = useNavigate();
  const [item1, item2, item3] = PjDatas;
  const initial = [item1, item2, item3];

  const [selected, setSelected] = useState(initial[0]);

  const containerVariant = {
    hidden: {},
  };

  const techstackVariant = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      onWheel={(e) => {
        if (e.deltaY < 0) {
          navigate("/about");
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
            <div className="pagination">
              {initial.map((item) => {
                return (
                  <div
                    key={item.tabname}
                    className={`tab ${item === selected && "selected"} `}
                    onClick={() => setSelected(item)}
                  >
                    {item.tabname === "Vanilla JS" && (
                      <img className="tech-logo" src={VanillaJs} />
                    )}

                    {item.tabname === "React" && (
                      <img className="tech-logo" src={ReAct} />
                    )}
                    {item.tabname === "Webflow" && (
                      <img className="tech-logo" src={Webflow} />
                    )}
                    {item.tabname}
                  </div>
                );
              })}
            </div>

            <AnimatePresence exitBeforeEnter>
              <motion.div
                style={{ width: "100%", height: "100%" }}
                key={selected.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Pjcard name={selected.name} tech={selected.tech} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <motion.div
          className="techstack"
          variants={techstackVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="cap">techstack</div>
          <TechStack />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
