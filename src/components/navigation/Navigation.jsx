import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../images/logo-bookmark.svg";
import whiteLogo from "../../images/WHITE-LOGO.png";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 720);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 720);

      if (!isMenuOpen) {
        document.body.style.overflowY = isSmallScreen ? "hidden" : "visible";
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, isSmallScreen]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    const menuOpenBg = document.getElementById("menu-open-bg");
    const nav = document.getElementById("nav");

    if (isSmallScreen) {
      const bgColor = isMenuOpen ? "white" : "var(--Very-Dark-Blue-transparent)";
      menuOpenBg.style.backgroundColor = bgColor;
      document.body.style.height = isMenuOpen ? "auto" : "100vh";
      nav.style.height = isMenuOpen ? "fit-content" : "100vh";
    } else {
      menuOpenBg.style.backgroundColor = "white";
      nav.style.height = "fit-content";
    }
  }

  return (
    <header>
      <div id="menu-open-bg" className="navigation-container">
        <div className="primary-header-2 flex">
          <img src={isMenuOpen ? whiteLogo : logo} alt="logo of bookmark" />
          <div className="icon-nav">
            <div onClick={toggleMenu} className={isMenuOpen ? "close" : "hamburger"}>
              {isMenuOpen ? (
                <IoCloseSharp style={{ color: "white", fontSize: "20px" }} />
              ) : (
                <GiHamburgerMenu style={{ fontSize: "20px" }} />
              )}
            </div>
          </div>
        </div>
        <nav id="nav">
          <ul className={`primary-navigation ${isMenuOpen ? "open" : ""}`}>
          
              <li>
                <Link to="/" onClick={isSmallScreen ? toggleMenu : null}>
                  features
                </Link>
              </li>
          
            <li>
              <Link to="/pricing" onClick={isSmallScreen ? toggleMenu : null}>
                pricing
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={isSmallScreen ? toggleMenu : null}>
                contact
              </Link>
            </li>
            <li className="login-btn">
              <Link to="/login" onClick={isSmallScreen ? toggleMenu : null}>
                login
              </Link>
            </li>
          </ul>
          {isMenuOpen && (
            <div className="icons-footer flex">
              <AiFillFacebook style={{ color: "white" }} />
              <AiOutlineTwitter style={{ color: "white" }} />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
