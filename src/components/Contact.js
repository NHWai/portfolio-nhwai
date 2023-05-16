import React, { useState, useEffect } from "react";
import "../css/contact.css";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [show, setShow] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientSubject: "",
    clientMessage: "",
  });

  useEffect(() => {
    waveLetter();
  }, [formData]);

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

  const handleChange = (e) => {
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formEl = new FormData(event.target);
    const date = new Date(Date.now());
    formEl.append("date", date);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzNpwtx8iC_K1SELwjO-wj8uuM61jTBLEJfABWSn9JpnTPNgPCk4N1WVol9CW7tI4Pq/exec",
        {
          method: "POST",
          body: formEl,
        }
      );
      if (response.status === 200) {
        setFormData({
          ...formData,
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          clientSubject: "",
          clientMessage: "",
        });
        setIsComplete(true);
        setTimeout(() => setIsComplete(false), 3000);
      } else {
        throw new Error("Something wrong!!");
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="contact-container">
      <button className={`btn ${show ? "active" : null}`} onClick={isShow}>
        Contact
        <FaPaperPlane />
      </button>

      <div className={`contact-bg ${show ? "active" : null}`}>
        <form onSubmit={handleSubmit} className="contact-form">
          <div onClick={isShow} className="close-btn">
            <FaTimes />
          </div>
          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="name"
              type="text"
              value={formData.clientName}
              name="clientName"
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="email"
              type="email"
              value={formData.clientEmail}
              name="clientEmail"
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="phone"
              type="number"
              value={formData.clientPhone}
              name="clientPhone"
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="fieldSet">
            <input
              autoComplete="off"
              className="input"
              id="subject"
              type="text"
              value={formData.clientSubject}
              name="clientSubject"
              onChange={handleChange}
              required
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
              value={formData.clientMessage}
              name="clientMessage"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            style={{ background: `${isComplete && "transparent"}` }}
            type="submit"
            className="submit-btn"
          >
            {isComplete ? "Submitted 🎉🎉" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
