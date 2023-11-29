import React, { useState } from "react";
import Head from "next/head";
import DashboardSidebar from "../../../components/dashboard/sidebar";
import Default from "../../../layouts/default";
import Units from "../../../components/dashboard/units";
import DProjects from "../../../components/dashboard/projects";

const AdminSearch = () => {
  const [activeTab, setActiveTab] = useState("units");
  return (
    <>
      <Head>
        <title>Aqarstock - Admin Search</title>
      </Head>
      <Default>
        <section className="dashboard-page">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <DashboardSidebar />
              </div>
              <div className="col-md-9">
                <div className="page-content">
                  <div className="search-area">
                    <div className="p-titles">
                      <h3 className="content-title">البحث</h3>
                      <span className="content-subtitle">
                        هذا هو نص بسيط يمكن استبدالة فيما بعد
                      </span>
                    </div>
                    <div className="dashboard-tabs">
                      <ul>
                        <li>
                          <button
                            onClick={() => setActiveTab("units")}
                            className={activeTab === "units" ? "active" : ""}
                          >
                            العقارات
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveTab("projects")}
                            className={activeTab === "projects" ? "active" : ""}
                          >
                            المشاريع
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveTab("companies")}
                            className={
                              activeTab === "companies" ? "active" : ""
                            }
                          >
                            الشركات
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveTab("users")}
                            className={activeTab === "users" ? "active" : ""}
                          >
                            المستخدمين
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveTab("units")}
                            className={activeTab === "units" ? "active" : ""}
                          >
                            طلبات الشراء
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveTab("units")}
                            className={activeTab === "units" ? "active" : ""}
                          >
                            استفسارات العملاء
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dashboard-active-tab-content">
                      {activeTab === "units" && <Units />}
                      {activeTab === "projects" && <DProjects />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Default>
    </>
  );
};

export default AdminSearch;
