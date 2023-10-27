import React, { useEffect } from "react";
import hero from "../../images/illustration-hero.svg";
import Features from "../../components/features/Features";
import Contact from "../../components/contact/Contact";
import dots from "../../images/bg-dots.svg";
import Faq from "../../components/faq/Faq";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0 });
  const { ref: boxesRef, inView: boxesInView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (heroInView) {
      animation.start({
        x: 0,
        transition: { type: 'spring', duration: 1},
      });
    }
    if (!heroInView) {
      animation.start({ x: '100%' });
    }
  }, [heroInView]);

  useEffect(() => {
    if (boxesInView) {
      animation1.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
      animation2.start({ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } });
      animation3.start({ y: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } });
    }
    if (!boxesInView) {
      animation1.start({ y: '-100%', opacity: 0 });
      animation2.start({ y: '-100%', opacity: 0 });
      animation3.start({ y: '-100%', opacity: 0 });
    }
  }, [boxesInView]);

  return (
    <div className="main-page">
      <div className="home-container-2" ref={heroRef}>
        <motion.div className="hero-image" animate={animation}>
          <div className="sub-hero-image">
            <img
              className="sub-hero-image "
              src={hero}
              alt="example of how your websites will be displayed"
            />
          </div>
        </motion.div>
        <div className="description">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="button-2 flex">
            <button className="blue-btn">Get it on Chrome</button>
            <button>Get it on Firefox </button>
          </div>
        </div>
      </div>
      <Features />
      <div className="download-container" >
        <div className="download-hero grid">
          <h3>Download the extension</h3>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="download-boxes responsive-padding grid" ref={boxesRef}>
          <motion.div className="box" animate={animation1} initial={{ y: '-100%', opacity: 0 }}>
            <img src={chrome} alt="chroma logo" />
            <h4>add to Chrome</h4>
            <p>minimum version 62</p>
            <img src={dots} alt="" />
            <button className="blue-btn">add & install extension</button>
          </motion.div>
          <motion.div className="box" animate={animation2} initial={{ y: '-100%', opacity: 0 }}>
            <img src={firefox} alt="firefox logo" />
            <h4>add to Firefox</h4>
            <p>minimum version 55</p>
            <img src={dots} alt="" />
            <button className="blue-btn">add & install extension</button>
          </motion.div>
          <motion.div className="box" animate={animation3} initial={{ y: '-100%', opacity: 0 }}>
            <img src={opera} alt="opera logo" />
            <h4>add to Opera</h4>
            <p>minimum version 46</p>
            <img src={dots} alt="" />
            <button className="blue-btn">add & install extension</button>
          </motion.div>
        </div>
      </div>
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
