"use client";
import { useEffect, useState } from "react";
import { Menu, X, Pencil, Trash2 } from "lucide-react";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";

const AllWebsitesPage = () => {
  const [websites, setWebsites] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userStatus, setUserStatus] = useState(""); // 🔹 Track user status

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const fetchWebsites = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/websites/all");
      const data = await res.json();
      setWebsites(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch websites");
    }
  };

  useEffect(() => {
    fetchWebsites();

    // 🔹 Get user status from localStorage
    const status = localStorage.getItem("status");
    setUserStatus(status);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this website?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/websites/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Website deleted");
        fetchWebsites(); // refresh list
      } else {
        toast.error(data.msg || "Delete failed");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  const handleEdit = (id) => {
    window.location.href = `/edit-website/${id}`;
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <button className="md:hidden" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        <main className="flex-1 p-4 overflow-y-auto">
          <h1 className="text-xl font-bold mb-4">All Websites</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="p-2 border">Website Name</th>
                  <th className="p-2 border">URL</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Traffic</th>
                  <th className="p-2 border">DA</th>
                  <th className="p-2 border">DR</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Language</th>
                  <th className="p-2 border">Turnaround</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {websites.map((site) => (
                  <tr key={site._id} className="text-center">
                    <td className="p-2 border">{site.name}</td>
                    <td className="p-2 border">{site.url}</td>
                    <td className="p-2 border">{site.category}</td>
                    <td className="p-2 border">{site.traffic}</td>
                    <td className="p-2 border">{site.da}</td>
                    <td className="p-2 border">{site.dr}</td>
                    <td className="p-2 border">{site.price}</td>
                    <td className="p-2 border">{site.language}</td>
                    <td className="p-2 border">{site.turnAroundTime}</td>
                    <td className="p-2 border flex justify-center space-x-2">
                      <button onClick={() => handleEdit(site._id)} className="text-blue-600 hover:text-blue-800">
                        <Pencil size={16} />
                      </button>
                      {userStatus === "admin" && ( // 🔹 Conditionally show delete button
                        <button
                          onClick={() => handleDelete(site._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {websites.length === 0 && (
              <p className="text-center mt-6 text-gray-500">No websites found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllWebsitesPage;
