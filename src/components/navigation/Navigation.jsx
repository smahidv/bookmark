import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../images/logo-bookmark.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);

    const menuOpenBg = document.getElementById("menu-open-bg");
    const nav = document.getElementById("nav");

    function applyStyles() {
      if (window.innerWidth <= 720) {
        document.body.style.overflowY = !isMenuOpen ? "hidden" : "visible";
        menuOpenBg.style.backgroundColor = !isMenuOpen
          ? "var( --Very-Dark-Blue-transparent)"
          : "white";
        document.body.style.height = !isMenuOpen ? "100vh" : "auto";
        nav.style.height = !isMenuOpen ? "100vh" : "fit-content";
      } else {
        menuOpenBg.style.backgroundColor = "white";
        document.body.style.overflowY = "visible";
        nav.style.height = "fit-content";
      }
    }

    applyStyles();

    window.addEventListener("resize", applyStyles);

    return () => {
      window.removeEventListener("resize", applyStyles);
    };
  }

  return (
    <header>
      <div id="menu-open-bg" className="navigation-container ">
        <div className="primary-header-2 flex">
          <img src={logo} alt="logo of bookmark" />
          <div className="icon-nav">
            {isMenuOpen ? (
              <div onClick={toggleMenu} className="close">
                <IoCloseSharp style={{ color: "white", fontSize: "20px" }} />
              </div>
            ) : (
              <div onClick={toggleMenu} className="hamburger">
                <GiHamburgerMenu style={{ fontSize: "20px" }} />
              </div>
            )}
          </div>
        </div>
        <nav id="nav">
          <ul className={`primary-navigation  ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>
                features
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={toggleMenu}>
                pricing
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={toggleMenu}>
                contact
              </Link>
            </li>
            <li className="login-btn">
              <Link  to="/login" onClick={toggleMenu}>login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
