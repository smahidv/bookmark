import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import whiteLogo from '../../images/WHITE-LOGO.png'
import "./footer.css";

const Footer = () => {
  const scrollToContact = (event) => {
    event.preventDefault();

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div className="footer-container grid">
        <div className="white-logo">
          <img src={whiteLogo} alt="bookmark logo" />
        </div>
        <nav>
          <ul className="footer">
            <li>
              <Link to="/">features</Link>
            </li>
            <li>
              <Link to="/pricing">pricing</Link>
            </li>
            <li>
              <a href="#contact" onClick={scrollToContact}>
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="icons-footer flex ">
          <AiFillFacebook style={{ color: "white" }} />
          <AiOutlineTwitter style={{ color: "white" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
