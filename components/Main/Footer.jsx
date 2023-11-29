import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-3 order-md-3 order-1">
              <div className="f_contacts_wrap">
                {locale === "ar" ? (
                  <Image
                    src="/img/logo_ar.png"
                    width="172"
                    height="50"
                    alt="aqar stock logo"
                  />
                ) : (
                  <Image
                    src="/img/logo_en.png"
                    width="172"
                    height="50"
                    alt="aqar stock logo"
                  />
                )}
              </div>
            </div>
            <div className="col-md-8 col-lg-3 order-md-3 order-1">
              <div className="f_contacts_wrap">
                <div className="f_title">Contact us</div>
                <div className="contacts">
                  <div className="phone">
                    <i className="fa fa-whatsapp"></i>
                    <span>
                      <span>(+20)</span> 123-456-789
                    </span>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope"></i>
                    <span>service@site-name.eg</span>
                  </div>
                  <div className="call">
                    <a
                      href="#modal_call"
                      className="ghost_button line popup-modal"
                    >
                      Request a call back
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-3 order-md-3 order-1">
              <div className="f_contacts_wrap">
                <div className="f_title">Contact us</div>
                <div className="contacts">
                  <div className="phone">
                    <i className="fa fa-whatsapp"></i>
                    <span>
                      <span>(+20)</span> 123-456-789
                    </span>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope"></i>
                    <span>service@site-name.eg</span>
                  </div>
                  <div className="call">
                    <a
                      href="#modal_call"
                      className="ghost_button line popup-modal"
                    >
                      Request a call back
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-3 order-md-3 order-1">
              <div className="f_contacts_wrap">
                <div className="f_title">Contact us</div>
                <div className="contacts">
                  <div className="phone">
                    <i className="fa fa-whatsapp"></i>
                    <span>
                      <span>(+20)</span> 123-456-789
                    </span>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope"></i>
                    <span>service@site-name.eg</span>
                  </div>
                  <div className="call">
                    <a
                      href="#modal_call"
                      className="ghost_button line popup-modal"
                    >
                      Request a call back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="sec_copyright">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 order-md-1 order-1">
              <div className="languages">
                <a href="#" className="current">
                  <img src="/img/ar.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/en.png" alt="" />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4 order-md-2 order-3">
              <div className="copyright_text">
                © 2022 All rights reserved to Aqar Stock
              </div>
            </div>

            <div className="col-6 col-md-4 order-md-3 order-2">
              <div className="contacts_links">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
