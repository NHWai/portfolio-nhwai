import React from "react";

function Navpanel({ currpage }) {
  return (
    <div className="navpanel">
      <div className={`panel-bar ${currpage === "/" && "active"}`}></div>
      <div className={`panel-bar ${currpage === "/about" && "active"}`}></div>
      <div
        className={`panel-bar ${currpage === "/projects" && "active"}`}
      ></div>
    </div>
  );
}

export default Navpanel;
