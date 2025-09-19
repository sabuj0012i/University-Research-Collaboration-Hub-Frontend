import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy Data (Backend থেকে আনতে পারবেন)
const data = [
  { day: "Mon", users: 10 },
  { day: "Tue", users: 15 },
  { day: "Wed", users: 20 },
  { day: "Thu", users: 25 },
  { day: "Fri", users: 30 },
  { day: "Sat", users: 18 },
  { day: "Sun", users: 22 },
];

const SuperAdminUsers = () => {
  // Total users হিসাব
  const totalUsers = data.reduce((acc, cur) => acc + cur.users, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Manage All Users</h1>
      <p className="mb-6 text-gray-600">
        As a Super Admin, you can manage all users across the system.
      </p>

      {/* Total Users Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">Total Users</h2>
        <p className="text-3xl font-bold text-blue-600">{totalUsers}</p>
        <p className="text-sm text-gray-500">Total registered users</p>
      </div>

      {/* User Visits Chart */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Daily User Visits</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 6, fill: "#2563eb" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminUsers;
