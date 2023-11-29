import React from "react";
import Head from "next/head";
import DashboardSidebar from "../../../components/dashboard/sidebar";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import Default from "../../../layouts/default";
import Table from "rc-table";

const AdminLatestProjects = () => {
  const columns = [
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "نوع الاجراء",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
    {
      title: "النوع",
      dataIndex: "unitType",
      key: "unitType",
      width: 200,
    },
    {
      title: "التاريخ",
      dataIndex: "date",
      key: "date",
      width: 200,
    },
    {
      title: "العمليات",
      dataIndex: "",
      key: "operations",
      render: () => (
        <div className="operations-btns">
          <a href="#" className="btn delete-btn">
            <BiTrashAlt />
            <span>Delete</span>
          </a>
          <a href="#" className="btn edit-btn">
            <AiOutlineEdit />
            <span>Edit</span>
          </a>
        </div>
      ),
    },
  ];

  const data = [
    {
      name: "امتلك الان شالية في موسي كوست (راس سدر)",
      type: "جديد",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "1",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "قديم",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "قديم",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "قديم",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "قديم",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "قديم",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "قديم",
      unitType: "عقارات",
      date: "20/03/2023",
      key: "2",
    },
  ];

  return (
    <>
      <Head>
        <title>Aqarstock - Admin Latest Projects Added</title>
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
                  <div className="latest-projects-area">
                    <div className="p-titles">
                      <h3 className="content-title">اخر الوحدات المضافة</h3>
                      <span className="content-subtitle">
                        هذا هو نص بسيط يمكن استبدالة فيما بعد
                      </span>
                    </div>
                    <Table columns={columns} data={data} />
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

export default AdminLatestProjects;
