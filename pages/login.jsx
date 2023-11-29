import React, { useEffect } from "react";
import Head from "next/head";
import LoginForm from "../components/LoginForm";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import Auth from "../layouts/auth";

const Login = () => {
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#f5f5f5";
  }, []);
  return (
    <Auth>
      <Head>
        <title>Aqar Stock - Login</title>
      </Head>
      <section className="sign-section">
        <div className="w-100">
          <div className="row g-0">
            <div className="col-lg-6 order-1 order-lg-0">
              <div className="user-form-box">
                <div className="user-type-area">
                  <h1>تسجيل الدخول</h1>
                  <LoginForm />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1">
              <div className="user-features">
                <div className="users-features-head">
                  <h2 className="users-features-title">
                    الكثير من <span>المزايا</span> في انتظارك
                  </h2>
                  <p className="users-features-subtitle">
                    احصل على مزايا وخدمات غير محدودة
                  </p>
                </div>
                <div className="user-feature-cards">
                  <div className="user-feature-card">
                    <span className="user-feature-card-icon">
                      <i className="far fa-check-circle"></i>
                    </span>
                    <div className="user-feature-card-content">
                      <h6>انشئ حساباً على عقار ستوك</h6>
                      <p>
                        قم بإنشاء ملف تعريفي وأبدا في رفع أو شراء افضل العقارات.
                      </p>
                    </div>
                  </div>
                  <div className="user-feature-card user-feature-card-lg">
                    <span className="user-feature-card-icon">
                      <i className="far fa-check-circle"></i>
                    </span>
                    <div className="user-feature-card-content">
                      <h6>انشئ حساباً على عقار ستوك</h6>
                      <p>
                        قم بإنشاء ملف تعريفي وأبدا في رفع أو شراء افضل العقارات.
                      </p>
                    </div>
                  </div>
                  <div className="user-feature-card">
                    <span className="user-feature-card-icon">
                      <i className="far fa-check-circle"></i>
                    </span>
                    <div className="user-feature-card-content">
                      <h6>انشئ حساباً على عقار ستوك</h6>
                      <p>
                        قم بإنشاء ملف تعريفي وأبدا في رفع أو شراء افضل العقارات.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Auth>
  );
};

export default Login;
