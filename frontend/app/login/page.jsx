"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async () => {
  setLoading(true);
  setMessage("");

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.msg || "Login failed");

    const { user, token } = data;

    // Store token and status in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("status", user.status);
     localStorage.setItem("name", user.name);     // ✅ Store user's name
    localStorage.setItem("email", user.email);   // ✅ Store user's email

    // Redirect based on status
    if (user.status === "admin") {
      router.push("/admin-dashboard");
    } else if (user.status === "active") {
      router.push("/client-dashboard");
    } else {
      setMessage("Unknown user status.");
    }
  } catch (error) {
    setMessage(error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white">
      <Image
        src="/1.png"
        alt="ElevateRank logo"
        width={220}
        height={40}
        className="mb-8"
      />

      <div className="w-full max-w-sm">
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
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-800 hover:bg-blue-800 text-white text-lg font-medium py-3 rounded-md"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {message && <p className="text-sm mt-4 text-red-600">{message}</p>}

        <p className="text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
