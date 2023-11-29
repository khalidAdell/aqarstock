import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import Head from "next/head";
import Default from "../layouts/default";

const ForgetPassword = () => {
  return (
    <>
      <Default>
        <Head>
          <title>Aqar Stock Forget password</title>
        </Head>
        <div className="login-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* <ForgetPasswordForm /> */}
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default ForgetPassword;