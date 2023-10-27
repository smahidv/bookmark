import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./faq.css";

const Faq = () => {
 const response =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis. ";
  const [sections, setSections] = useState(
    [
      { question: "what is Bookmark ?", response, isOpen: false },
      { question: "How can I request a new browser ?", response, isOpen: false },
      { question: "Is there a mobile app ?", response, isOpen: false },
      { question: "What about other Chromium browsers ?", response, isOpen: false },
    ],
  );

  const toggleSection = (index) => {
    setSections((prevSections) =>
      prevSections.map((section, i) => {
        if (i === index) {
          return { ...section, isOpen: !section.isOpen };
        }
        return section;
      })
    );
  };



  return (
    <div className="faq-container responsive-padding grid">
      <h3>Frequently Asked Questions</h3>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="faq-section">
        {sections.map((section, index) => (
          <div className="sub-section" key={index}>
             <div className={`question flex pointer ${section.isOpen ? 'active' : ''}`} onClick={() => toggleSection(index)}>
              <h4>{section.question}</h4>
              <div className="icons-faq">
                {section.isOpen ? (
                  <IoIosArrowUp
                    style={{ color: "var(--Soft-Red)" }}
                  />
                ) : (
                  <IoIosArrowDown
                    style={{ color: "var(--Soft-Blue)" }}
                  />
                )}
              </div>
            </div>

            <div
              className={section.isOpen ? "display-response flex" : "response"}
            >
              <p>{section.response}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="blue-btn">more info</button>
    </div>
  );
};

export default Faq;
