import React, { useState } from "react";
import error from "../../images/icon-error.svg";
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div id="contact" className="contact-container grid">
      <div className="info-joined">35,000+ already joined</div>
      <h2>Stay up-to-date with what we’re doing</h2>
      <form action="#/#contact" className="grid" onSubmit={handleSubmit}>
        <div className="contact-email grid">
          <div className="input-container flex relative">
            <div className={`input-error-container ${isValidEmail ? "" : "input-error-container-padding-red"}`}>
              <input
                type="text"
                placeholder="Enter your email address"
                className="contact-input"
                value={email}
                onChange={handleInputChange}
              />
              {!isValidEmail && (
                <div className={`error-message ${isValidEmail ? "" : "invalid"}`}>
                  Whoops, make sure it's a valid email
                </div>
              )}
            </div>
            {!isValidEmail && (
              <img src={error} alt="error" className={`absolute error ${isValidEmail ? "" : "invalid"}`} />
            )}
          </div>
        </div>
        <button className={`red-btn ${ isValidEmail ? "" :"height-unset"}`}>contact Us</button>
      </form>
    </div>
  );
};

export default Contact;
