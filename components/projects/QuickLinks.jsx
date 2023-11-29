import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  return (
    <section className="project-quick-links">
      <div className="project-section-title">
        <h4>DLF The Aralias - Quick Links</h4>
      </div>
      <div className="project-quick-links-content">
        <ul className="quick-links-list">
          <li>
            <Link href="/projects/1/brochure">DLF The Aralias - Brochure</Link>
          </li>
          <li>
            <Link href="/projects/1/amenities">DLF The Aralias - Amenities</Link>
          </li>
          <li>
            <Link href="/projects/1/reviews">DLF The Aralias - Reviews</Link>
          </li>
          <li>
            <Link href="/projects/1/specifications">DLF The Aralias - Specifications</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default QuickLinks;
