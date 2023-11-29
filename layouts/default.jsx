import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Main/Footer";
import Navbar from "../components/Main/Navbar";

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }
  return "ltr";
}

const Default = ({ children, pageName, className }) => {
  const { locale } = useRouter();
  return (
    <div className={`${getDirection(locale)} ${className}`} dir={getDirection(locale)}>
      <Navbar In={pageName} />
      {children}
      <Footer />
    </div>
  );
};

export default Default;
