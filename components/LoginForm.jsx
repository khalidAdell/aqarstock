import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

const LoginForm = () => {
  return (
    <div className="login-form login-only register-form">
      <form>
        <div className="form-group">
          <label>
            <FormattedMessage id="username-label" />
          </label>
          <input type="text" placeholder="..." />
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="password-label" />
          </label>
          <input type="password" />
        </div>
        <div className="two-group">
          <div className="form-group form-link">
            <Link href="/forget-password">
              <FormattedMessage id="forget-password" />
            </Link>
          </div>
          <div className="form-btn">
            <button type="submit" className="btn">
              <FormattedMessage id="sign-in" />
            </button>
          </div>
        </div>
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
      </form>
    </div>
  );
};

export default LoginForm;
