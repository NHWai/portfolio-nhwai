import React, { useState, useEffect } from "react";
import "../css/contact.css";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

function Contact() {
  useEffect(() => {
    waveLetter();
  }, []);

  const [show, setShow] = useState(false);
  const isShow = () => setShow((pre) => !pre);

  function waveLetter() {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms "  >${letter}</span>`
        )
        .join("");
    });
  }

  return (
    <div className="contact-container">
      <button className={`btn ${show ? "active" : null}`} onClick={isShow}>
        Contact
        <FaPaperPlane />
      </button>

      <div className={`contact-bg ${show ? "active" : null}`}>
        <form className="contact-form">
          <div onClick={isShow} className="close-btn">
            <FaTimes />
          </div>
          <div className="fieldSet">
            <input autoComplete="off" className="input" id="name" type="text" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="email"
              type="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="phone"
              type="number"
            />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="subject"
              type="text"
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="fieldSet message">
            {/* <input autoComplete="off" className="input" id="msg" type="text" />
            <label htmlFor="msg">Message</label> */}

            <textarea
              className="message-input"
              rows="4"
              cols="50"
              placeholder="message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
