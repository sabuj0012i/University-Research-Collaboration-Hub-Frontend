// src/components/Profile.jsx
import React, { useState } from "react";
import { User, Mail, University } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true); // ✅ Card visibility state

  const user = {
    name: "John Doe",
    email: "john@student.university.edu",
    university: "Dhaka University",
    field: "Computer Science",
  };

  const handleDashboard = () => {
    setVisible(false); // hide card
    navigate("/student/dashboard");
  };

  const handleLogout = () => {
    setVisible(false); // hide card
    console.log("User logged out");
  };

  if (!visible) return null; 

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border w-72">
      {/* Profile Header */}
      <div className="flex items-center mb-5">
        <User className="w-12 h-12 text-blue-600 mr-3" />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-600 text-sm">{user.field}</p>
        </div>
      </div>

      {/* Profile Info */}
      <div className="space-y-2 text-sm">
        <p className="flex items-center text-gray-700">
          <Mail className="mr-2 text-gray-500 w-4 h-4" /> {user.email}
        </p>
        <p className="flex items-center text-gray-700">
          <University className="mr-2 text-gray-500 w-4 h-4" /> {user.university}
        </p>
      </div>

      {/* Slim Buttons */}
      <div className="mt-5 flex flex-col gap-2">
        <button
          onClick={handleDashboard}
          className="w-full px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm 
                     hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
        >
          My Dashboard
        </button>

        <button
          onClick={handleLogout}
          className="w-full px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm 
                     hover:bg-red-500 hover:text-white active:scale-95 transition-all border cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
