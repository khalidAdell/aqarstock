import React from "react";
import Head from "next/head";
import DashboardSidebar from "../../../components/dashboard/sidebar";
import { AiOutlineEdit, AiOutlineLeft } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import Default from "../../../layouts/default";

const AdminProfile = () => {
  return (
    <>
      <Head>
        <title>Aqarstock - Admin Profile</title>
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
                  <div className="profile-area">
                    <div className="profile-form-box">
                      <div className="p-titles">
                        <h3 className="content-title">بيانات الحساب</h3>
                        <span className="content-subtitle">
                          معلومات الحساب الخاص بك يمكنك تحديثها بناء على رغبتك
                        </span>
                      </div>
                      <form>
                        <div className="form-group">
                          <label>الصورة</label>
                          <span className="label-t">
                            الصورة تساعدك على تخصيص وتمييز صورة حسابك
                          </span>
                          <div className="input-val">
                            <svg
                              width="72"
                              height="72"
                              viewBox="0 0 72 72"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="36" cy="36" r="36" fill="#F8F8F8" />
                              <mask
                                id="mask0_2_5"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="72"
                                height="72"
                              >
                                <circle cx="36" cy="36" r="36" fill="#F5F5F5" />
                              </mask>
                              <g mask="url(#mask0_2_5)">
                                <path
                                  d="M36.2121 43.2011C44.2327 43.2011 50.7332 36.7533 50.7332 28.8003C50.7332 20.8472 44.2327 14.3994 36.2121 14.3994C28.1916 14.3994 21.6911 20.8472 21.6911 28.8003C21.6911 36.7533 28.1916 43.2011 36.2121 43.2011ZM41.9638 48.6014H30.4605C19.6049 48.6014 10.8004 57.3319 10.8004 68.0988C10.8004 70.2522 12.5611 71.9994 14.7324 71.9994H57.6942C59.8655 72.0028 61.6239 70.2589 61.6239 68.0988C61.6239 57.3319 52.8206 48.6014 41.9638 48.6014Z"
                                  fill="#D5D5D5"
                                />
                              </g>
                              <path
                                opacity="0.1"
                                d="M72 36C72 40.7276 71.0688 45.4089 69.2597 49.7766C67.4505 54.1443 64.7988 58.1129 61.4558 61.4558C58.1129 64.7988 54.1443 67.4505 49.7766 69.2597C45.4089 71.0688 40.7276 72 36 72C31.2724 72 26.5911 71.0688 22.2234 69.2597C17.8557 67.4505 13.8871 64.7988 10.5442 61.4558C7.20125 58.1129 4.5495 54.1443 2.74034 49.7766C0.931167 45.4089 -4.13299e-07 40.7276 0 36L36 36H72Z"
                                fill="#20211F"
                              />
                              <path
                                d="M46 47.625V58.875C46 59.9102 45.1602 60.75 44.125 60.75H27.875C26.8398 60.75 26 59.9102 26 58.875V47.625C26 46.5898 26.8398 45.75 27.875 45.75H31.3125L31.793 44.4648C32.0664 43.7344 32.7656 43.25 33.5469 43.25H38.4492C39.2305 43.25 39.9297 43.7344 40.2031 44.4648L40.6875 45.75H44.125C45.1602 45.75 46 46.5898 46 47.625ZM40.6875 53.25C40.6875 50.6641 38.5859 48.5625 36 48.5625C33.4141 48.5625 31.3125 50.6641 31.3125 53.25C31.3125 55.8359 33.4141 57.9375 36 57.9375C38.5859 57.9375 40.6875 55.8359 40.6875 53.25ZM39.4375 53.25C39.4375 55.1445 37.8945 56.6875 36 56.6875C34.1055 56.6875 32.5625 55.1445 32.5625 53.25C32.5625 51.3555 34.1055 49.8125 36 49.8125C37.8945 49.8125 39.4375 51.3555 39.4375 53.25Z"
                                fill="#20211F"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>الاسم</label>
                          <span className="label-t">مصطفي فتحي ابراهيم</span>
                          <div className="input-val">
                            <AiOutlineEdit />
                            <span>تعديل</span>
                            <AiOutlineLeft />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>البريد الإلكتروني</label>
                          <span className="label-t">
                            mustafa.fathi7@gmail.com
                          </span>
                          <div className="input-val">
                            <AiOutlineEdit />
                            <span>تعديل</span>
                            <AiOutlineLeft />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>الأمان وكلمة المرور</label>
                          <div>
                            <span className="label-t">********</span>
                            <span>اخر تغيير تم في 10 يوليو</span>
                          </div>
                          <div className="input-val">
                            <AiOutlineEdit />
                            <span>تعديل</span>
                            <AiOutlineLeft />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>رقم الهاتف</label>
                          <span className="label-t">0123456788</span>
                          <div className="input-val">
                            <AiOutlineEdit />
                            <span>تعديل</span>
                            <AiOutlineLeft />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="profile-delete-acc">
                      <div className="p-titles">
                        <h3 className="content-title">حذف الحساب</h3>
                        <span className="content-subtitle">
                          سيؤدي حذف الحساب إلى حذف معلوماتك نهائيا ً
                        </span>
                      </div>
                      <button className="btn">
                        <BiTrashAlt />
                        <span>حذف</span>
                      </button>
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

export default AdminProfile;
