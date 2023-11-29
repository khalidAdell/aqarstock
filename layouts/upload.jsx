import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import UnitSteps from "../components/UnitSteps";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";

const UploadLayout = ({ children, progress, setTab }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <Navbar />
      <div className="upload-layout">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <UnitSteps progress={progress} setTab={setTab} />
            </div>
            <div className="col-md-6">
              {children}
              <footer className="upload-footer">
                <div className="upload-footer-container">
                  <div className="upload-footer-btns">
                    {progress !== 1 && (
                      <button
                        className="btn back-btn"
                        onClick={() =>
                          setTab(progress === 1 ? 1 : +progress - 1)
                        }
                      >
                        <AiOutlineRight />
                        <span>رجوع</span>
                      </button>
                    )}
                    <button
                      className="btn next-btn"
                      onClick={() => setTab(+progress + 1)}
                    >
                      <span>التالي</span>
                    </button>
                  </div>
                </div>
              </footer>
            </div>
            <div className="col-md-3">
              <div className="unit-step-info">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  iste quaerat mollitia maxime reiciendis veritatis ab
                  doloremque eos quis obcaecati!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadLayout;
