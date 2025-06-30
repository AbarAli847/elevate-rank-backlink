"use client";
import { Mail, Phone, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/2.png" style={{height: '100px'}} alt="Logo" className="h-8" />
          </div>
          <p className="text-sm leading-relaxed">
            We’re a bespoke link building agency that delivers outstanding results globally. Our focus is on building white hat links for ambitious brands & agencies. We serve clients internationally, including the USA.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="font-semibold">How we work</h4>
          <ul className="space-y-1">
            <li>Case Studies</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">About Us</h4>
          <ul className="space-y-1">
            <li>Pricing</li>
            <li>Link Building Blog</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Reviews</h4>
          <ul className="space-y-1">
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-white/30" />

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="space-y-2">
  <div className="flex items-start space-x-2">
    <span className="text-green-300 mt-1">🏢</span>
    <span><strong>UK Office Address:</strong> 40 March Road, Edinburgh, EH4 3SZ</span>
  </div>
  <div className="flex items-start space-x-2">
    <span className="text-green-300 mt-1">🏢</span>
    <span><strong>US Office Address:</strong> 600 California St, San Francisco, CA 94108</span>
  </div>
</div>

<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <span className="text-white">✉️</span>
    <a href="mailto:stewart@linkbuilder.io" className="underline">stewart@ElevateRank</a>
  </div>
  <div className="flex items-center space-x-2">
    <span className="text-white">📞</span>
    <a href="tel:+447814402277" className="underline">+44 7814402277</a>
  </div>
</div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white text-black font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100"
        >
          Back to top
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white/80 space-y-2 md:space-y-0">
        <p>Copyright © 2025 ElevateRank. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
