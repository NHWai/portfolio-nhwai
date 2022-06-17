import React from "react";
import Contact from "./Contact";

function Navbar() {
  return (
    <div className="navbar">
      <div
        style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}
      >
        nh<span className="logo-span">wai</span>
      </div>
      <Contact />
    </div>
  );
}

export default Navbar;
