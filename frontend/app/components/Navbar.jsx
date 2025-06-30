"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="1.png" style={{width: '140px', height: '80px'}}  alt="Logo" className="h-8 cursor-pointer" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/how-we-work" className="hover:text-black">How we work</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/websites-info" className="hover:text-black">Websites Info</Link>
          <Link href="/pricing" className="hover:text-black">Pricing</Link>
          <Link href="/case-study" className="hover:text-black">Case studies</Link>
          <Link href="/blog" className="hover:text-black">Blog</Link>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="hover:text-black">Logout</button>
          ) : (
            <Link href="/login" className="hover:text-black">Login</Link>
          )}
        </div>

        <div>
          <Link href="/contact" className="text-black font-semibold hover:text-blue-800">
            Get in touch
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
