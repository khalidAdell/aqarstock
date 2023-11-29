import React, { useState } from "react";

const FAQs = ({ sectionRef }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "What is the price of 3+ BHK in DLF The Aralias?",
      content:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
    {
      title: "What is the price of 3+ BHK in DLF The Aralias?",
      content:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
    {
      title: "What is the price of 3+ BHK in DLF The Aralias?",
      content:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
    {
      title: "What is the price of 3+ BHK in DLF The Aralias?",
      content:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
  ];

  return (
    <section
      className="project-faqs-section"
      id="FrequentlyAskedQuestions"
      ref={sectionRef}
    >
      <div className="project-section-title">
        <h4>DLF The Aralias FAQs</h4>
      </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-title">
              <h3>{item.title}</h3>
              <span
                className={`arrow-icon ${activeIndex === index ? "open" : ""}`}
              >
                &#8250;
              </span>
            </div>
            <div className="faq-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
