import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGlobe } from "react-icons/fa";

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }
  return "ltr";
}

const Auth = ({ children, className }) => {
  const { locales, locale, asPath } = useRouter();

  return (
    <div
      className={`${getDirection(locale)} ${className}`}
      dir={getDirection(locale)}
    >
      <nav className={`aqar-navbar site-navauth-navbar`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="navbar-lang-switcher">
                {[...locales]
                  .filter((item) => item !== locale)
                  .sort()
                  .map((locale) => (
                    <Link href={asPath} key={locale} locale={locale}>
                      {locale === "ar" ? (
                        <>
                          <span>العربية</span>
                          <FaGlobe />
                        </>
                      ) : (
                        <>
                          <span>English</span>
                          <FaGlobe />
                        </>
                      )}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Auth;
