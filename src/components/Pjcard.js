import React from "react";
import "../css/projects.css";
import Tailwind from "../assests/tailwindcss-icon-white.svg";
import VanillaJs from "../assests/javascript-horizontal-white.svg";
import BootStrap from "../assests/getbootstrap-icon.svg";
import ReAct from "../assests/reactjs-icon-white.svg";

function Pjcard({ name, tech }) {
  return (
    <div className="pj-card">
      <div className="pj-card-img">
        <div className="code-demo">
          <a>Code </a>
          <a>Demo</a>
        </div>

        <img src="https://img-for-portfolio.vercel.app/img/landing-page-tailwind.png" />
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

          {tech.some((el) => el === "ReAct") && (
            <img className="tech-logo" src={ReAct} />
          )}
          {tech.some((el) => el === "BootStrap") && (
            <img className="tech-logo" src={BootStrap} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pjcard;
