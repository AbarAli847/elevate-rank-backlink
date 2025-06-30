"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

const ClientDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header style={{height: "50px"}} className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <button className="md:hidden text-gray-700 dark:text-white" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 overflow-y-auto" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src="/1.png" />
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
