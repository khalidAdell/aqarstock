import React from "react";

function ContactSellers() {
  return (
    <section className="project_contact_sellers">
      <div className="project-section-title">
        <h4>Contact Sellers</h4>
      </div>

      <div className="seller-contact-box">
        <div>
          <div className="seller-img">
            <img src="/img/client-image.jpg" alt="project author" />
          </div>
          <div className="seller-info">
            <h5>Aqar Stock </h5>
            <span>Seller</span>
            <p> 24 Cr - 25 Cr</p>
          </div>
        </div>
        <button className="btn">contact</button>
      </div>
    </section>
  );
}

export default ContactSellers;
