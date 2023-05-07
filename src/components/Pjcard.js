import React from "react";
import "../css/projects.css";
import Tailwind from "../assests/tailwindcss-icon-white.svg";
import VanillaJs from "../assests/javascript-horizontal-white.svg";
import BootStrap from "../assests/getbootstrap-icon.svg";
import ReAct from "../assests/reactjs-icon-white.svg";
import Typescript from "../assests/typescript-official-svgrepo-com.svg";
import Nodejs from "../assests/nodejs-svgrepo-com.svg";
import Webflow from "../assests/webflow-icon.svg";

function Pjcard({ name, tech, imgurl, codeurl, demourl }) {
  return (
    <div className="pj-card">
      <div className="pj-card-img">
        <div className="code-demo">
          {codeurl && (
            <a target="_blank" rel="noopener noreferrer" href={codeurl}>
              Code{" "}
            </a>
          )}
          {demourl && (
            <a target="_blank" rel="noopener noreferrer" href={demourl}>
              Demo
            </a>
          )}
        </div>

        <img src={imgurl} />
      </div>

      <div className="pj-card-caption">
        <div> {name}</div>
        <div>
          {tech.some((el) => el === "VanillaJs") && (
            <img className="tech-logo" src={VanillaJs} />
          )}
          {tech.some((el) => el === "Tailwind") && (
            <img className="tech-logo" src={Tailwind} />
          )}
          {tech.some((el) => el === "Typescript") && (
            <img className="tech-logo" src={Typescript} />
          )}
          {tech.some((el) => el === "Nodejs") && (
            <img className="tech-logo" src={Nodejs} />
          )}
          {tech.some((el) => el === "ReAct") && (
            <img className="tech-logo" src={ReAct} />
          )}
          {tech.some((el) => el === "BootStrap") && (
            <img className="tech-logo" src={BootStrap} />
          )}
          {tech.some((el) => el === "Webflow") && (
            <img className="tech-logo" src={Webflow} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pjcard;
