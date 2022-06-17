import React, { useEffect, useRef } from "react";
import "../css/description.css";

function Description() {
  useEffect(() => {
    setTimeout(typing, 2000);
    return function cleanup() {
      clearTimeout(typing);
    };
  }, []);

  const ref = useRef();
  function typing() {
    const cursorEl = document.querySelector(".cursor");
    const textEl = document.querySelector(".text");
    cursorEl.style.animationName = "none";
    cursorEl.style.background = "black";
    let i = 0;
    const text =
      "  A creative freelance developer who loves coding and blogging.";
    function show() {
      if (i < text.length) {
        textEl.textContent += text.charAt(i);

        i++;
        setTimeout(show, 50);
      }
      if (i === text.length) {
        cursorEl.style.animationName = "blink";
        cursorEl.style.background = "inherit";
      }
    }
    show();
  }
  return (
    <div className="container">
      <div className="text" ref={ref}></div>
      <span className="cursor">a</span>
    </div>
  );
}

export default Description;
