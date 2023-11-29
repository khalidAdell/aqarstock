import React, { useState } from "react";

const ContactSellerSidebar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(true);
  return (
    <div className="project-sidebar">
      <div className="project-sidebar-title">
        <h4>Contact Sellers in</h4>
      </div>
      <div className="seller-namee">
        <span className="letter">D</span>
        <p>DLF The Aralias</p>
      </div>
      <form>
        <div className="seller-msg">
          <h5>Please share your contact</h5>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
          />

          <div className="agree-box">
            <div className="terms-option">
              <input
                type="checkbox"
                value={terms}
                onChange={(e) => setTerms(e.target.checked)}
                id="termsInput"
              />
              <label htmlFor="termsInput">
                I agree to be contacted by AqarStock and other agents via
                WhatsApp, SMS, phone, email etc
              </label>
            </div>
          </div>
        </div>
        <button className="btn" type="submit">
          Get Contact Details
        </button>
      </form>
    </div>
  );
};

export default ContactSellerSidebar;
