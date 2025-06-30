"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Home, Settings, LogOut, Menu, WebcamIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = ({ isSidebarOpen, toggleSidebar, setIsLoggedIn }) => {
  const router = useRouter();
  const [dashboardLink, setDashboardLink] = useState("/client-dashboard");
  const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is admin

  // Set dashboard link and check for admin status based on localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const status = localStorage.getItem("status");
      if (status === "admin") {
        setDashboardLink("/admin-dashboard");
        setIsAdmin(true); // Set isAdmin to true if the user is admin
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    if (setIsLoggedIn) setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-3 shadow-md md:hidden fixed top-0 left-0 z-50">
        <button onClick={toggleSidebar}>
          <Menu className="text-gray-700 dark:text-white" />
        </button>
        <h1 className="text-lg font-semibold text-blue-800 dark:text-white">Admin Panel</h1>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 md:top-auto inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-md transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:shadow-none pt-16 md:pt-0`}
      >
        <div className="h-full flex flex-col p-4">
          <h2 className="hidden md:block text-2xl font-bold text-blue-800 dark:text-white mb-6">
            DashBoard
          </h2>

          <nav className="flex flex-col space-y-4">
            {/* Dynamic dashboard link */}
            <Link
              href={dashboardLink}
              className="flex items-center hover:text-blue-800 dark:hover:text-blue-300"
            >
              <Home className="mr-2" /> Dashboard
            </Link>

            {/* Keep all other links visible */}
            <Link
              href="/add-website"
              className="flex items-center hover:text-blue-800 dark:hover:text-blue-300"
            >
              <WebcamIcon className="mr-2" /> Add Website Info
            </Link>
            <Link
              href="/all-websites"
              className="flex items-center hover:text-blue-800 dark:hover:text-blue-300"
            >
              <WebcamIcon className="mr-2" /> All Websites
            </Link>

            {/* Show All Payments link only if the user is an admin */}
            {isAdmin && (
              <Link
                href="/all-payments"
                className="flex items-center hover:text-blue-800 dark:hover:text-blue-300"
              >
                <WebcamIcon className="mr-2" /> All Payments
              </Link>
            )}

            <a
              href="#"
              className="flex items-center hover:text-blue-800 dark:hover:text-blue-300"
            >
              <Settings className="mr-2" /> Settings
            </a>
            <button
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
              className="flex items-center text-red-500 hover:text-red-700 mt-auto"
            >
              <LogOut className="mr-2" /> Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
