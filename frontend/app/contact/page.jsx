// components/page.jsx
"use client"
import { CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';

const features = [
  'Authentic Outreach',
  'Insanely High Quality',
  'Deep Analysis',
  'Trusted by the Best',
];

const page = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="ml-6">
          <h2 className="text-5xl font-bold leading-tight mb-8">
            Let&apos;s{' '}
            <span className="bg-blue-800 px-3 py-1 rounded-xl text-white inline-block">
              Skyrocket
            </span>{' '}
            your SEO performance
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            We’d love to learn more about your project. Please fill out the
            form, and we’ll send over some ideas and schedule a call.
          </p>
          <ul className="space-y-4 text-lg font-medium">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800">
                <CheckCircle className="text-blue-800" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium mb-1">First name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Last name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            <p className="text-sm mt-2">
              Already have an account?{' '}
              <a href="/login" className="underline font-medium text-blue-800">
                Sign in here.
              </a>
            </p>
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Your Website</label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Message</label>
            <textarea
              rows={3}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
          </div>

          <p className="text-sm">
            By submitting this form I accept the{' '}
            <a href="#" className="underline font-medium">
              privacy policy
            </a>{' '}
            of this site
          </p>

          {/* Placeholder for reCAPTCHA */}
          <div className="border p-4 w-full rounded-md shadow-sm">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-6 h-6" />
              <span>I&apos;m not a robot</span>
              <div className="ml-auto text-sm text-gray-500">reCAPTCHA</div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black text-white text-lg font-semibold px-8 py-3 rounded-2xl"
          >
            Send message
          </button>
        </form>
      </div>
      <Hero/>
    </section>
  );
};

export default page;
