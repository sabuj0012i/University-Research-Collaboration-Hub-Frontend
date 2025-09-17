import React from "react";
import { Outlet } from "react-router-dom"; 
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import SuNavbar from "../common/SuNavbar";

const SuperAdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <SuNavbar />

      <div className="flex flex-1">
        <Sidebar panel="superAdmin" />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SuperAdminLayout;
