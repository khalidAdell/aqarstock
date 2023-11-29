import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const RegisterForm = () => {
  const [accountType, setAccountType] = useState(null);
  const [companyType, setCompanyType] = useState(null);
  const [formTour, setFormTour] = useState(1);

  useEffect(() => {
    if (accountType) {
      setFormTour(2);
    }
  }, [accountType]);

  useEffect(() => {
    if (companyType) {
      setFormTour(3);
    }
  }, [companyType]);

  return (
    <>
      <div className="login-form register-form">
        <form>
          <div className="row">
            {formTour === 1 && (
              <>
                <div className="col-12">
                  <div className="t-labels">
                    <label className="type-label">
                      <FormattedMessage id="choose-account-type" />
                    </label>
                  </div>
                  <div className="df">
                    <div className="form-group custom-radio">
                      <div className="acount-type">
                        <div
                          className={`personal-type at ${
                            accountType === "personal" ? "active" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="acount-type"
                            checked={accountType === "personal" ? true : false}
                            onChange={() => setAccountType("personal")}
                          />
                          <div className="type-img">
                            <Image
                              src="/img/login_icons/user.png"
                              alt="personal image"
                              width="90"
                              height="90"
                            />
                          </div>
                          <span>
                            <FormattedMessage id="personal" />
                          </span>
                        </div>
                        <div
                          className={`company-type at ${
                            accountType === "company" ? "active" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="acount-type"
                            checked={accountType === "company" ? true : false}
                            onChange={() => setAccountType("company")}
                          />
                          <div className="type-img">
                            <Image
                              src="/img/login_icons/company.png"
                              alt="personal image"
                              width="90"
                              height="90"
                            />
                          </div>

                          <span>
                            <FormattedMessage id="company" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="df paginationxx">
                    <button
                      type="button"
                      className="btn"
                      disabled
                      onClick={(e) => {
                        e.preventDefault();
                        formTour > !1
                          ? setFormTour(1)
                          : setFormTour(formTour - 1);
                      }}
                    >
                      <FormattedMessage id="prev" />
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormTour(2);
                      }}
                    >
                      <FormattedMessage id="next" />
                    </button>
                  </div>
                </div>
              </>
            )}

            {accountType === "company"
              ? formTour === 2 && (
                  <>
                    <label className="type-label">
                      <FormattedMessage id="choose-company-type" />
                    </label>
                    <div className="df">
                      <div className="form-group custom-radio">
                        <div className="company-type">
                          <div
                            className={`samsara-type at ${
                              companyType === "brokerage" ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="company-type"
                              checked={
                                companyType === "brokerage" ? true : false
                              }
                              onChange={() => setCompanyType("brokerage")}
                            />
                            <div className="type-img">
                              <Image
                                src="/img/login_icons/brokerage.png"
                                alt="personal image"
                                width="90"
                                height="90"
                              />
                            </div>
                            <span>
                              <FormattedMessage id="brokerage" />
                            </span>
                          </div>
                          <div
                            className={`development-type at ${
                              companyType === "development" ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="company-type"
                              checked={
                                companyType === "development" ? true : false
                              }
                              onChange={() => setCompanyType("development")}
                            />
                            <div className="type-img">
                              <Image
                                src="/img/login_icons/construction.png"
                                alt="personal image"
                                width="90"
                                height="90"
                              />
                            </div>
                            <span>
                              <FormattedMessage id="development" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="df paginationxx">
                      <button
                        type="button"
                        className="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormTour(1);
                        }}
                      >
                        <FormattedMessage id="prev" />
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormTour(3);
                        }}
                      >
                        <FormattedMessage id="next" />
                      </button>
                    </div>
                  </>
                )
              : formTour === 2 && (
                  <>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <FormattedMessage id="username-label" />
                        </label>
                        <input type="text" placeholder="..." />
                      </div>
                      <div className="form-group">
                        <label>
                          <FormattedMessage id="email-label" />
                        </label>
                        <input type="email" />
                      </div>
                      <div className="form-group">
                        <label>
                          <FormattedMessage id="password-label" />
                        </label>
                        <input type="password" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <FormattedMessage id="name-label" />
                        </label>
                        <input type="text" />
                      </div>
                      <div className="form-group">
                        <label>
                          <FormattedMessage id="phone-label" />
                        </label>
                        <input type="number" />
                      </div>

                      <div className="form-group">
                        <label>
                          <FormattedMessage id="confirm-password-label" />
                        </label>
                        <input type="password" />
                      </div>
                      <div className="df paginationxx">
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => {
                            e.preventDefault();
                            setFormTour(1);
                          }}
                        >
                          <FormattedMessage id="prev" />
                        </button>
                        <button
                          type="submit"
                          className="btn submit-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("login done :)");
                          }}
                        >
                          <FormattedMessage id="submit" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
            {formTour === 3 &&
              (accountType !== "company" ? (
                <>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="username-label" />
                      </label>
                      <input type="text" placeholder="..." />
                    </div>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="email-label" />
                      </label>
                      <input type="email" />
                    </div>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="password-label" />
                      </label>
                      <input type="password" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="name-label" />
                      </label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="phone-label" />
                      </label>
                      <input type="number" />
                    </div>

                    <div className="form-group">
                      <label>
                        <FormattedMessage id="confirm-password-label" />
                      </label>
                      <input type="password" />
                    </div>
                    <div className="df paginationxx">
                      <button
                        type="button"
                        className="btn submit-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormTour(1);
                        }}
                      >
                        Prev
                      </button>
                      <button
                        type="submit"
                        className="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("login done :)");
                        }}
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="username-label" />
                      </label>
                      <input type="text" placeholder="..." />
                    </div>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="email-label" />
                      </label>
                      <input type="email" />
                    </div>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="password-label" />
                      </label>
                      <input type="password" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="name-label" />
                      </label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="phone-label" />
                      </label>
                      <input type="number" />
                    </div>

                    <div className="form-group">
                      <label>
                        <FormattedMessage id="confirm-password-label" />
                      </label>
                      <input type="password" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="df paginationxx">
                      <button
                        type="button"
                        className="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormTour(2);
                        }}
                      >
                        <FormattedMessage id="prev" />
                      </button>
                      <button
                        type="button"
                        className="btn submit-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("register done :)");
                        }}
                      >
                        <FormattedMessage id="submit" />
                      </button>
                    </div>
                  </div>
                </>
              ))}
          </div>

          {/* accountType !== "company" && accountType */}
          {true && (
            <>
              <label className="social-login">
                <FormattedMessage id="login-with" />
              </label>

              <ul className="user-sign-social">
                <li>
                  <a href="#" className="google-sign">
                    <img
                      src="/img/google-logo.svg"
                      width="24"
                      height="24"
                      alt="google-logo"
                    />
                    <span>
                      <FormattedMessage id="login-with-google" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook-sign">
                    <img
                      src="/img/facebook.svg"
                      width="24"
                      height="24"
                      alt="facebook-logo"
                    />
                    <span>
                      <FormattedMessage id="login-with-google" />
                    </span>
                  </a>
                </li>
              </ul>
            </>
          )}
        </form>
      </div>
      {/* <div className="register-area">
        <h3>
          <FormattedMessage id="do-you-have-an-account" />
        </h3>
        <p>
          Add items to your wishlistget personalised recommendations check out
          more quickly track your orders register
        </p>

        <Link href="/login" className="btn">
          <FormattedMessage id="sign-in" />
        </Link>
      </div> */}
    </>
  );
};

export default RegisterForm;
