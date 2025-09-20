
import React, { useState, useEffect } from "react";
import { Users, FileText, Flag, CheckCircle } from "lucide-react";

const DashboardStates = () => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const stats = [
    {
      title: "Total Researcher",
      value: data ? data.researchers.length : 0,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-100",
      key: "researchers",
    },
    {
      title: "Total research paper",
      value: data ? data.researchPapers.length : 0,
      icon: <FileText className="w-6 h-6 text-green-500" />,
      color: "bg-green-100",
      key: "researchPapers",
    },
    {
      title: "Flagged Paper",
      value: data ? data.flaggedPapers.length : 0,
      icon: <Flag className="w-6 h-6 text-red-500" />,
      color: "bg-red-100",
      key: "flaggedPapers",
    },
    {
      title: "Pending Approval",
      value: data ? data.pendingApprovals.length : 0,
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />,
      color: "bg-yellow-100",
      key: "pendingApprovals",
    },
  ];

  // styled table
  const renderTable = (items) => {
    if (!items || items.length === 0) {
      return <p className="text-gray-500 italic">No data available.</p>;
    }

    const headers = Object.keys(items[0]);

    return (
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-xl bg-white shadow-lg text-sm">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-semibold uppercase tracking-wide first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((row, i) => (
              <tr
                key={i}
                className={`transition-colors duration-150 ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50`}
              >
                {headers.map((h, j) => (
                  <td key={j} className="px-4 py-3 border-b border-gray-200">
                    {row[h]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item.key)}
            className={`p-6 rounded-2xl shadow-md flex items-center gap-4 cursor-pointer transition 
              ${item.color} ${
              selected === item.key
                ? "ring-2 ring-indigo-400 bg-opacity-80"
                : "hover:bg-opacity-80"
            }`}
          >
            <div className="p-3 rounded-full bg-white shadow">{item.icon}</div>
            <div>
              <h3
                className={`text-lg font-medium ${
                  selected === item.key ? "underline" : "hover:underline"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      {selected && data && (
        <div className="mt-8 p-6 border rounded-xl bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            {stats.find((s) => s.key === selected)?.title} Details
          </h3>
          {renderTable(data[selected])}
        </div>
      )}
    </div>
  );
};

export default DashboardStates;
