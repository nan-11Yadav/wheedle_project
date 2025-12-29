import React from "react";
// import { Search } from "lucide-react"; // optional icon lib

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-black via-[#050b1a] to-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <div className="text-xl font-bold tracking-wide">
          <img src="Logo.png" alt="Logo"></img>
          </div>
          
          
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li className="border-b-2 border-blue-400 pb-1 cursor-pointer">
            Home
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Our Services
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Pricing
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Blog
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 hover:border-white transition">
            <img src="src/assets/Search.png" />
          </button>

          {/* Login */}
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            Login
          </button>
        </div>
        

      </div>
    </nav>
  );
};

export default Navbar;
