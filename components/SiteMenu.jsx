import Link from "next/link";
import React from "react";

const SiteMenu = () => {
  return (
    <div className="site-menu">
      <ul>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <li className="site-menu-item" key={index}>
            <Link className="site-menu-link" href="#">
              <span></span>
              <h5>Link</h5>
            </Link>
            <Link href="#" className="site-menu-link">
              <span></span>
              <h5>Link</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMenu;
