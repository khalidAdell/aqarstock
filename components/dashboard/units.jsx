import React from "react";
import Table from "rc-table";
import { AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

const Units = () => {
  const columns = [
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "مميز",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
    {
      title: "الحالة",
      dataIndex: "unitType",
      key: "unitType",
      width: 200,
    },
    {
      title: "متوفر",
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
      type: "نعم",
      unitType: "جديد",
      date: "متوفر",
      key: "1",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "قديم",
      date: "متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "جديد",
      date: " غير متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "جديد",
      date: "متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "نعم",
      unitType: "قديم",
      date: "متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "نعم",
      unitType: "جديد",
      date: "غير متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "جديد",
      date: "متوفر",
      key: "2",
    },
  ];
  return (
    <div className="units">
        <div className="units-search">
            <form>
                <input type="text" placeholder="كلمة البحث" />
                <button type="submit">
                    <AiOutlineSearch />
                </button>
            </form>
        </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Units;
