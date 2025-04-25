import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-white text-black font-sans w-[95%] mx-auto"> {/* Adjusted width to 95% */}
      {/* Top Banner */}
      <div className="w-full text-center">
        <img
          src="../images/landlogo.png"
          alt="Apple Music Banner"
          className="mx-auto object-contain max-w-[900px]" // adjust max-w as needed
        />
      </div>
      
      {/* Logo Section */}
      <div className="flex justify-center py-4">
        <img
          src="../images/indiaretail.png"
          alt="India Retailing Logo"
          className="h-16"
        />
      </div>

      {/* Search, Subscribe & Date */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 text-sm">
        <div className="flex items-center gap-2">
          <span className="material-icons text-gray-200">search</span>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white text-white outline-none border-gray-600 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-red-600 hover:bg-red-700 px-3 py-2 text-xs">
            SUBSCRIBE
          </button>
          <button className="border border-gray-600 px-3 py-2 text-xs text-gray-400">
            SIGN IN
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="relative flex items-center justify-between py-3 border-gray-700 px-4">
        {/* Left: Custom Hamburger Icon (3 lines) */}
        <div className="flex flex-col justify-between h-5 w-6 cursor-pointer">
          <span className="block h-0.5 bg-black"></span>
          <span className="block h-0.5 bg-black"></span>
          <span className="block h-0.5 bg-black"></span>
        </div>

        {/* Center: Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm font-medium">
          {['Home', 'Categories', 'IR Prime', 'Events', 'Bookstore', 'Newsletter', 'Video'].map((item) => (
            <a
              key={item}
              href="#"
              className={`hover:text-red-500 ${item === 'Home' ? 'text-red-600' : 'text-black'}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Calendar and Date */}
        <div className="flex items-center text-gray-400 text-sm">
          <span className="material-icons text-sm">calendar_today</span>
          <span className="ml-1">Friday, 30 June 2023</span>
        </div>
      </nav>

      {/* Sub Navigation Bar */}
      <div className="w-full border-gray-200 py-2 bg-white">
        <div className="flex justify-center space-x-6 text-sm font-medium text-gray-700">
          {[
            'Fashion & Lifestyle',
            'Beauty & Wellness',
            'Food & Beverage',
            'Consumer Durables & IT',
            'Entertainment',
            'Home Decor & Furnishing',
            'Specialty Retail'
          ].map((item) => (
            <a key={item} href="#" className="hover:text-red-500">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
