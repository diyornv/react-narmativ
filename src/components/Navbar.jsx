import React from "react";
import heartIcon from "../assets/svg/heart.svg";
import cartIcon from "../assets/svg/cart.svg";
import searchIcon from "../assets/svg/search.svg";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-[72px] flex items-center border-b border-gray-200">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide">Exclusive</div>
        {/* Menu */}
        <ul className="flex gap-8 text-base font-medium">
          <li>
            <a href="#" className="border-b-2 border-black pb-1">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Sign Up
            </a>
          </li>
        </ul>
        {/* Search and Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] rounded px-4 py-2 w-56 text-sm focus:outline-none"
            />
            <img
              src={searchIcon}
              alt="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
            />
          </div>
          {/* Heart Icon */}
          <img
            src={heartIcon}
            alt="wishlist"
            className="w-6 h-6 cursor-pointer"
          />
          {/* Cart Icon */}
          <img src={cartIcon} alt="cart" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
