import { useState } from "react";
import Modal from "../Main/Modal";

const QuestionsAndAnswers = ({ sectionRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="project-questions-and-answer"
        ref={sectionRef}
        id="QAndA"
      >
        <div className="project-section-title ques-section-header">
          <h4>Questions and Answers</h4>
          {/* <button onClick={() => setIsOpen(true)} className="btn">
            Have Any Question? Ask Here...
          </button> */}
        </div>
        <div className="ques-section-content">
          <span className="p-smal">
            Get answers to your un-answered questions.
          </span>
          <div className="ques-list">
            <div className="ques-item">
              <span className="ques-item-for">For Project</span>
              <div className="ques-item-q">
                <p>
                  <span>Q:</span> Is there a promised date of completion under
                  RERA?
                </p>
              </div>
              <div className="ques-item-a">
                <p>
                  <span>A:</span> Date of completion as provided to RERA is Oct,
                  2009. RERA?
                </p>
              </div>
            </div>
            <div className="ques-item">
              <span className="ques-item-for">For Project</span>
              <div className="ques-item-q">
                <p>
                  <span>Q:</span> Is there a servant room?
                </p>
              </div>
              <div className="ques-item-a">
                <p>
                  <span>A:</span> Yes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ques-section-footer">
          <p className="small-note">
            Disclaimer: While aqarstock.com takes all steps to ensure accuracy
            of the information provided in this section, please check the same
            with the developers. aqarstock.com does not take responsibility for
            any discrepancies in the information provided.
          </p>
        </div>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default QuestionsAndAnswers;
