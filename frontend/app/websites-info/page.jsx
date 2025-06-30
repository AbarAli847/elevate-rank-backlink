"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "../components/Hero";

const AllWebsites = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [websites, setWebsites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (showPaymentModal && selectedWebsite && !document.getElementById("paypal-sdk")) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AeeVLdp9j6Z7jaM04fg4mYInN1y-BoHtW14Iwaqw4OE1x4vw7Rygs1Yu3Hem4EMMICZ1s36M6KvpWK6m&currency=USD`;
      script.id = "paypal-sdk";
      script.onload = renderPayPalButtons;
      document.body.appendChild(script);
    } else if (showPaymentModal && selectedWebsite && window.paypal) {
      renderPayPalButtons();
    }
  }, [showPaymentModal, selectedWebsite]);

  const renderPayPalButtons = () => {
    if (!selectedWebsite) return;
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: selectedWebsite.price || "9.98",
            },
            description: `Guest Post on ${selectedWebsite.name}`,
          }],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        alert("Payment successful!");

      const name = localStorage.getItem("name");
const email = localStorage.getItem("email");

if (!name || !email) {
  alert("User information is missing. Please log in.");
  return;
}

const websiteDetails = {
  username: name,
  email: email,
  websiteName: selectedWebsite.name,
  websiteUrl: selectedWebsite.url,
  paidAmount: selectedWebsite.price || "9.98",
};



        try {
          // Make an API call to your backend to save the payment details
          const res = await fetch("http://localhost:5000/api/payments/insert-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(websiteDetails),
          });

          if (res.ok) {
            console.log("Payment details inserted successfully");
          } else {
            console.error("Failed to insert payment details");
          }
        } catch (error) {
          console.error("Error during payment details insertion:", error);
        }

        setShowPaymentModal(false);
      },
      onError: (err) => {
        console.error("PayPal error:", err);
        alert("An error occurred with PayPal.");
      },
    }).render("#paypal-button-container");
  };

  const isUserLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/websites/get-all");
      const data = await res.json();
      const uniqueCategories = [
        ...new Set(data.websites.flatMap(site => site.category.split(',').map(cat => cat.trim()))),
      ];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    fetchWebsites();
    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "") {
      fetchWebsites();
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/websites/filter/category?category=${category}`);
      const data = await res.json();

      const boosted = (data.websites || []).map((site) => {
        const traffic = parseInt(site.traffic) || 0;
        const multiplier = Math.random() * (1.3 - 1.05) + 1.05;
        return {
          ...site,
          traffic: Math.floor(traffic * multiplier),
        };
      });

      setWebsites(boosted);
    } catch (err) {
      console.error("Category filter failed:", err);
    }
  };

  const fetchWebsites = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/websites/get-all");
      const data = await res.json();

      const boostedWebsites = (data.websites || []).map((site) => {
        const traffic = parseInt(site.traffic) || 0;
        const multiplier = Math.random() * (1.3 - 1.05) + 1.05;
        return {
          ...site,
          traffic: Math.floor(traffic * multiplier),
        };
      });

      setWebsites(boostedWebsites);
    } catch (err) {
      console.error("Failed to fetch websites:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      fetchWebsites();
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/websites/search?name=${query}`);
      const data = await res.json();

      const boostedWebsites = (data.websites || []).map((site) => {
        const traffic = parseInt(site.traffic) || 0;
        const multiplier = Math.random() * (1.3 - 1.05) + 1.05;
        return {
          ...site,
          traffic: Math.floor(traffic * multiplier),
        };
      });

      setWebsites(boostedWebsites);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  const handleBuyPost = (site) => {
    if (isUserLoggedIn()) {
      setSelectedWebsite(site);
      setShowPaymentModal(true);
    } else {
      router.push("/login");
    }
  };

  const handleViewDetails = (id) => {
    router.push(`/website-details?id=${id}`);
  };

  return (
    <>
      <div className="bg-white py-12 px-6 mt-32">
        <h1 className="text-3xl font-bold text-center">
          Websites For{" "}
          <span className="text-white px-5 py-2 rounded-md" style={{ backgroundColor: "#1e40af" }}>
            Guest Posting
          </span>
        </h1>
        <p className="text-center text-gray-600 text-lg mx-auto mt-6">
          Our detailed case studies show exactly how we generated increased rankings and traffic to<br /> websites through link building.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-16 p-4 mb-8 bg-white rounded-xl shadow-xl">
        {/* 🔍 Search Bar */}
        <div className="flex justify-between mb-4 flex-wrap gap-4">
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search website by name..."
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>



        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="bg-blue-100 text-blue-900 text-center py-4 text-2xl font-semibold rounded-t-lg">
              <strong>{websites.length}</strong> Websites & Blogs That Accept Guest Posts
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-7 bg-gray-100 text-sm font-semibold text-gray-700 px-4 py-3 border-b border-gray-300">
              <div>Websites</div>
              <div>Categories</div>
              <div>Monthly Traffic</div>
              <div>Ahrefs DR</div>
              <div>Moz DA</div>
              <div>Language</div>
              <div className="text-center">Action</div>
            </div>

            {loading ? (
              <div className="text-center py-10">Loading...</div>
            ) : (
              websites.map((site, idx) => (
                <div
                  key={site._id}
                  className={`grid grid-cols-7 items-center px-4 py-4 border-b ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <div className="text-sm">
                    <div className="font-semibold text-blue-900 truncate"><a href={site.url} target="_blank">{site.name}</a></div>
                    <div className="text-xs text-gray-500">
                      🔗 Max <span className="font-bold">03</span>{" "}
                      <a href="#" className="text-blue-600 underline">DoFollow links</a>
                    </div>
                    <div className="text-xs text-gray-500">⏱ Turnaround Time: <span className="text-blue-600 font-medium">{site.turnAroundTime || "1 day"}</span></div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {site.category.split(",").map((cat, i) => (
                      <span key={i} className="bg-blue-100 text-blue-900 px-2 py-1 text-xs rounded-md">{cat.trim()}</span>
                    ))}
                  </div>

                  <div className="text-sm text-orange-700 font-semibold">
                    📈 {parseInt(site.traffic).toLocaleString()}
                  </div>

                  <div className="text-sm text-blue-700 font-bold">🅰️ DR {site.dr}</div>
                  <div className="text-sm text-indigo-700 font-bold">🅼 DA {site.da}</div>

                  <div className="text-sm flex items-center gap-2">
                    <img src="https://flagcdn.com/us.svg" alt="flag" className="w-5 h-4" />
                    {site.language}
                  </div>

                  <div className="flex flex-col items-center gap-2 text-sm">
                    <button
                      onClick={() => handleBuyPost(site)}
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                      Buy Post ${site.price || "9.98"}
                    </button>

                    <button
                      onClick={() => handleViewDetails(site._id)}
                      className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Hero />

      {showPaymentModal && selectedWebsite && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Buy Post for {selectedWebsite.name}</h2>
            <p className="mb-4 text-gray-700">Choose your payment method:</p>
            <div className="flex justify-between gap-4">
              <div id="paypal-button-container" className="w-full"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllWebsites;
