import React from "react";
import hero from "../../images/illustration-hero.svg";
import Features from "../../components/features/Features";
import Contact from "../../components/contact/Contact";
import dots from "../../images/bg-dots.svg"
import Faq from "../../components/faq/Faq"
import chrome from "../../images/logo-chrome.svg"
import firefox from "../../images/logo-firefox.svg"
import opera from "../../images/logo-opera.svg"

import "./home.css";

const Home = () => {
  return (
    <div className="main-page">
      <div className="home-container-2">
        <div className="hero-image">
          <div className="sub-hero-image">
            <img
            className="sub-hero-image "
              src={hero}
              alt="example of how your websites will be displayed"
            />
          </div>
        </div>
        <div className="description">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="button-2 flex">
            <button  className="blue-btn">Get it on Chrome</button>
            <button>Get it on Firefox </button>
          </div>
        </div>
      </div>
      <Features />
      <div className="download-container">
        <div className="download-hero grid">
        <h3>Download the extension</h3>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        </div>
        <div className="download-boxes responsive-padding grid">
            <div className="box">
                <img src={chrome} alt="chroma logo" />
                <h4>add to Chrome</h4>
                <p>minimum version 62</p>
                <img src={dots} alt="" />
                <button className="blue-btn">add & install extension</button>
            </div>
            <div className="box">
            <img src={firefox} alt="firefox logo" />
                <h4>add to Firefox</h4>
                <p>minimum version 55</p>
                <img src={dots} alt="" />
                <button className="blue-btn" >add & install extension</button>
            </div>
            <div className="box">
            <img src={opera} alt="opera logo" />
                <h4>add to Opera</h4>
                <p>minimum version 46</p>
                <img src={dots} alt="" />
                <button className="blue-btn">add & install extension</button>
            </div>
        </div>
      </div>
      <Faq/>
      <Contact />
   
    </div>
  );
};

export default Home;
