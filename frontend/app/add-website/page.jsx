"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
const AddWebsiteInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    turnAroundTime: "",
    category: "",
    traffic: "",
    dr: "",
    price: "",
    DoFollowLinks: "",
    da: "",
    language: "",
  });

  const [message, setMessage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/websites/add-website", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Website info added successfully!");
      setFormData({
        name: "",
        url: "",
        turnAroundTime: "",
        category: "",
        traffic: "",
        dr: "",
        price: "",
        DoFollowLinks: "",
        da: "",
        language: "",
      });
    } else {
      toast.error(data.msg || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server error");
  }
};

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <button className="md:hidden text-gray-700 dark:text-white" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Add Website Info</h2>
            {message && <p className="mb-4 text-blue-600 dark:text-blue-400">{message}</p>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {key}
                  </label>
                  <input
                    type={["traffic", "dr", "price", "DoFollowLinks", "da"].includes(key) ? "number" : "text"}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
              ))}
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Website
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddWebsiteInfo;
