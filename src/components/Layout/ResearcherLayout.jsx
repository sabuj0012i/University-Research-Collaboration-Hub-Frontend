import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import RNavbar from "../common/RNavbar";

const ResearcherLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <RNavbar  />
      <div className="flex flex-1">
        <Sidebar panel="researcher" />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ResearcherLayout;
