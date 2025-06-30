"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
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
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-2xl font-bold text-blue-800 dark:text-blue-300">1,245</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Monthly Visits</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">34,876</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Revenue</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">$9,203</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
