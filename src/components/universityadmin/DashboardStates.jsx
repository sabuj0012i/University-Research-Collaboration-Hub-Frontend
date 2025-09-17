// src/components/universityAdmin/DashboardStats.jsx
import React from "react";
import { Users, FileText, Flag, CheckCircle } from "lucide-react";

const DashboardStates = () => {
  const stats = [
    {
      title: "Total Researcher",
      value: 128,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      title: "Total research paper",
      value: 542,
      icon: <FileText className="w-6 h-6 text-green-500" />,
      color: "bg-green-100",
    },
    {
      title: "Flagged Paper",
      value: 7,
      icon: <Flag className="w-6 h-6 text-red-500" />,
      color: "bg-red-100",
    },
    {
      title: "Pending Approval",
      value: 15,
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />,
      color: "bg-yellow-100",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md flex items-center gap-4 ${item.color}`}
          >
            <div className="p-3 rounded-full bg-white shadow">{item.icon}</div>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStates;
