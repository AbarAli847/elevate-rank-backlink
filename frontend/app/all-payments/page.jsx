"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";

const AllPaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userStatus, setUserStatus] = useState(""); // 🔹 Track user status

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const fetchPayments = async () => {
  try {
    // Correct API URL
    const res = await fetch("http://localhost:5000/api/payments/all-payments");  // This should match your route
    const data = await res.json();
    setPayments(data.payments); // Assuming your response is { payments: [...] }
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch payments");
  }
};


  useEffect(() => {
    fetchPayments();

    // 🔹 Get user status from localStorage
    const status = localStorage.getItem("status");
    setUserStatus(status);
  }, []);

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
          <h1 className="text-xl font-bold mb-4">All Payments</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="p-2 border">Username</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Website Name</th>
                  <th className="p-2 border">Website URL</th>
                  <th className="p-2 border">Paid Amount</th>
                  <th className="p-2 border">Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment._id} className="text-center">
                    <td className="p-2 border">{payment.username}</td>
                    <td className="p-2 border">{payment.email}</td>
                    <td className="p-2 border">{payment.websiteName}</td>
                    <td className="p-2 border">
                      <a
                        href={payment.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {payment.websiteUrl}
                      </a>
                    </td>
                    <td className="p-2 border">${payment.paidAmount}</td>
                    <td className="p-2 border">
                      {new Date(payment.paymentDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {payments.length === 0 && (
              <p className="text-center mt-6 text-gray-500">No payments found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllPaymentsPage;
