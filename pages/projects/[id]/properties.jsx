import React from "react";
import Default from "../../../layouts/default";
import Properties from "../../../components/projects/Properties";
import QuickLinks from "../../../components/projects/QuickLinks";
import Disclaimer from "../../../components/projects/Disclaimer";
import ContactSellerSidebar from "../../../components/ContactSeller";

const PropertiesPage = () => {
  return (
    <>
      <Default>
        <main id="main" className="single-project">
          <header className="project-header">
            <div className="container">
              {/* <div className="d-flex justify-content-between">
              <Breadcrumb />
              <span>Last updated: Mar 16, 2023</span>
            </div> */}
              <div className="grid-images">
                <div className="row">
                  <div className="col-md-6">
                    <div className="grid-item">
                      <img src="/img/property/2.jpg" alt="project image" />
                      <div className="opacity-hover"></div>
                      <button className="btn show-all-images">
                        show all photos
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="g4item">
                      <div className="grid-item">
                        <img src="/img/property/3.jpg" alt="project image" />
                        <div className="opacity-hover"></div>
                      </div>
                      <div className="grid-item">
                        <img src="/img/property/4.jpg" alt="project image" />
                        <div className="opacity-hover"></div>
                      </div>
                      <div className="grid-item">
                        <img src="/img/property/5.jpg" alt="project image" />
                        <div className="opacity-hover"></div>
                      </div>
                      <div className="grid-item">
                        <img
                          src="/img/property/property-7.jpg"
                          alt="project image"
                        />
                        <div className="opacity-hover"></div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="properties-page">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <Properties />
                  <QuickLinks />
                  <Disclaimer />
                </div>
                <div className="col-md-4">
                <ContactSellerSidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Default>
    </>
  );
};

export default PropertiesPage;
