import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

function SocialBar() {
  return (
    <div className="social-bar">
      <div className="line-sm"></div>
      <a target="_blank" href="https://www.google.com/doodles">
        <FaFacebook className="social-icon" />
      </a>
      <div className="line-sm"></div>
      <a target="_blank" href="https://www.google.com/doodles">
        <FaTwitter className="social-icon" />
      </a>
      <div className="line-sm"></div>
      <a target="_blank" href="https://www.google.com/doodles">
        <FaTelegram className="social-icon" />
      </a>
      <div className="line-sm"></div>
      <a target="_blank" href="https://www.google.com/doodles">
        <FaLinkedin className="social-icon" />
      </a>
      <div className="line-sm"></div>
    </div>
  );
}

export default SocialBar;
