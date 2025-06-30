"use client";
import Image from "next/image";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || "Signup failed");

      setMessage("Signup successful. You can now log in.");
      window.alert("Signup successful! You can now log in."); // Alert added
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white">
      {/* Logo */}
      <Image
        src="/1.png"
        alt="ElevateRank logo"
        width={220}
        height={40}
        className="mb-8"
      />

      {/* Inputs */}
      <div className="w-full max-w-sm">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border border-blue-300 focus:ring-2 focus:ring-blue-300 rounded-md px-4 py-3 text-lg mb-4 outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-blue-300 focus:ring-2 focus:ring-blue-300 rounded-md px-4 py-3 text-lg mb-4 outline-none"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-blue-300 focus:ring-2 focus:ring-blue-300 rounded-md px-4 py-3 text-lg mb-4 outline-none"
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-blue-800 hover:bg-blue-800 text-white text-lg font-medium py-3 rounded-md"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {message && <p className="text-sm mt-4 text-red-600">{message}</p>}

        <p className="text-gray-600 mt-4 text-sm">
          Already have an account!{" "}
          <a href="/login" className="underline font-medium">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
