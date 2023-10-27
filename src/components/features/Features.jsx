import React, { useState, useEffect } from "react";
import tab1 from "../../images/illustration-features-tab-1.svg";
import tab2 from "../../images/illustration-features-tab-2.svg";
import tab3 from "../../images/illustration-features-tab-3.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./features.css";

const Features = () => {
  const { ref, inView } = useInView({ 
    threshold: 0.2
});
  const animation = useAnimation();
  useEffect(() => {
    console.log("inView:", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: { 
          type: "spring", duration: 1
        }
      });
    }
    if (!inView) {
      animation.start({ x: "-100%" });
    }
  }, [inView, animation]);
  const [selectedFeature, setSelectedFeature] = useState("Simple Bookmarking");
  const featureData = {
    "Simple Bookmarking": {
      title: "Bookmark in one click",
      image: tab1,
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    "Speedy Searching": {
      title: "Intelligent search",
      image: tab2,
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    "Easy Sharing": {
      title: "Share your bookmarks",
      image: tab3,
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="features-container grid">
      <div className="features-hero grid">
        <h2>features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features-slide-container">
        <ul className="features-slide-header ">
          {Object.keys(featureData).map((feature) => (
            <li
              key={feature}
              className={`grey-underline`}
              onClick={() => handleFeatureClick(feature)}
            >
              <p>{feature}</p>
              {selectedFeature === feature && (
                <div className="red-underline"></div>
              )}
            </li>
          ))}
        </ul>
        <div className="features-slide-2 grid" ref={ref}>
          <motion.div 
          className="images-slides relative" 
          animate={animation}
          >
            <img
              src={featureData[selectedFeature].image}
              alt={selectedFeature}
            />
          </motion.div>
          <div className="description-slides ">
            <h3>{featureData[selectedFeature].title}</h3>
            <p>{featureData[selectedFeature].description}</p>
            <button className="blue-btn">more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
