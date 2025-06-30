"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";
import Sidebar from "@/app/components/Sidebar";
import { Menu, X } from "lucide-react";

const EditWebsite = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const [formData, setFormData] = useState({
        name: "",
        url: "",
        turnAroundTime: "",
        category: "",
        traffic: "",
        dr: "",
        da: "",
        language: "",
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        const fetchWebsite = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/websites/${id}`);
                const data = await res.json();
                if (res.ok) {
                    setFormData(data);
                } else {
                    toast.error(data.msg || "Failed to load website");
                }
            } catch (error) {
                console.error(error);
                toast.error("Error fetching website info");
            }
        };

        if (id) fetchWebsite();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/api/websites/edit/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Website updated successfully!");
             
            } else {
                toast.error(data.msg || "Update failed");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error");
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
                    <button className="md:hidden text-gray-700 dark:text-white" onClick={toggleSidebar}>
                        {isSidebarOpen ? <X /> : <Menu />}
                    </button>
                </header>

                <main className="flex-1 p-4 overflow-y-auto">
                    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Edit Website Info</h2>
                        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.keys(formData)
                                .filter((key) => !["_id", "createdAt", "updatedAt", "__v"].includes(key))
                                .map((key) => (
                                    <div key={key}>
                                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                                            {key}
                                        </label>
                                        <input
                                            type={["traffic", "dr", "da"].includes(key) ? "number" : "text"}
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
                                    Update Website
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditWebsite;
