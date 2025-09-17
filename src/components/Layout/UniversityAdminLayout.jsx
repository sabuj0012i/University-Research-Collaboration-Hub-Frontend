import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import ANavbar from "../common/ANavbar";

const UniversityAdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <ANavbar  />
      <div className="flex flex-1">
        <Sidebar panel="varsityAdmin" />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityAdminLayout;
