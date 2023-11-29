import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import SiteMenu from "../SiteMenu";
import { FormattedMessage } from "react-intl";
const Navbar = ({ In }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locales, locale, asPath } = useRouter();

  return (
    <>
      <nav className={`aqar-navbar site-nav ${In === "home" ? "bb-n" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="navbar-menu">
                <ul>
                  <li>
                    <Link href="/">
                      <span>
                        <FormattedMessage id="menu.rent" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>
                        <FormattedMessage id="menu.sell" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <span>
                        <FormattedMessage id="menu.projects" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>
                        <FormattedMessage id="menu.more" />
                      </span>
                      <BiChevronDown />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>
                        <FormattedMessage id="menu.contact-us" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineMenu />
              </div> */}
            </div>
            <div className="col-md-2">
              <div className="left-in-en-box">
                <div className="logo">
                  <Link href="/">
                    {locale === "ar" ? (
                      <img src="/img/logo_ar.png" alt="logo" />
                    ) : (
                      <img src="/img/logo_en.png" alt="logo" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-in-en-box">
                <div className="submit-property">
                  <Link className="btn add-property-btn" href="/add-unit">
                    <FormattedMessage id="menu.add-property" />
                  </Link>
                </div>
                <div className="user-info">
                  <Link href="/login">
                    <FormattedMessage id="menu.login" />
                  </Link>
                </div>
                <div className="navbar-lang-switcher">
                  {[...locales]
                    .filter((item) => item !== locale)
                    .sort()
                    .map((locale) => (
                      <Link href={asPath} key={locale} locale={locale}>
                        {locale === "ar" ? (
                          <>
                            <span>العربية</span>
                            {/* <img src="/img/ar.png" alt="" /> */}
                          </>
                        ) : (
                          <>
                            <span>English</span>
                            {/* <img src="/img/en.png" alt="" /> */}
                          </>
                        )}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <SiteMenu />}
    </>
  );
};

export default Navbar;
