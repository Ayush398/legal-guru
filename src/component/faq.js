import "./home.css";
import React, { useState } from "react";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  return (
    <>
      <div className="faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            {faqItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <button
                  id={`accordion-button-${index}`}
                  aria-expanded={activeItem === index}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="accordion-title">{item.question}</span>
                  <span className="icon" aria-hidden="true" />
                </button>
                <div
                  className={`accordion-content ${
                    activeItem === index ? "active" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

// export default faq;
