import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DashboardSidebar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <aside className="dashboard-sidebar">
      <div>
        <div className="user-info-box">
          <img src="/img/agents/agent-1.jpg" alt="agent image" />
          <div>
            <span>مرحبا بك</span>
            <h5>مصطفي فتحي</h5>
          </div>
        </div>
        <div className="sidebar-list">
          <ul>
            <li>
              <Link href="#">الرئيسية</Link>
            </li>
            <li>
              <Link
                href="/profile/admin/profile"
                className={
                  router.pathname === "/profile/admin/profile" ? "active" : ""
                }
              >
                الملف الشخصي
              </Link>
            </li>
            <li>
              <Link
                href="/profile/admin/latest-projects"
                className={
                  router.pathname === "/profile/admin/latest-projects"
                    ? "active"
                    : ""
                }
              >
                اخر الوحدات المضافة
              </Link>
            </li>
            <li>
              <Link
                href="/profile/admin/search"
                className={
                  router.pathname === "/profile/admin/search" ? "active" : ""
                }
              >
                بحث
              </Link>
            </li>
            <li>
              <Link
                href="/profile/admin/messages"
                className={
                  router.pathname === "/profile/admin/messages" ? "active" : ""
                }
              >
                الرسائل
              </Link>
            </li>
            <li>
              <Link href="/profile">الشكاوي</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-logout-btn">
        <Link href="/profile">تسجيل الخروج</Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
