import React from "react";
import heartIcon from "../assets/svg/heart.svg";
import cartIcon from "../assets/svg/cart.svg";
import searchIcon from "../assets/svg/search.svg";
import userIcon from "../assets/svg/user.svg";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-[72px] flex items-center border-b border-gray-200">
      <div className="container flex items-center justify-between">
        <div className="font-bold text-2xl tracking-wide">Exclusive</div>
        <ul className="flex gap-8">
          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-black"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-transparent hover:border-black transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-transparent hover:border-black transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-transparent hover:border-black transition"
            >
              Sign Up
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] rounded-tr-sm text-sm focus:outline-none py-[10px] px-[16px] pr-14"
            />
            <img
              src={searchIcon}
              alt="search"
              className="-ml-8 w-6 h-6 cursor-pointer"
            />
          </div>
          <img
            src={heartIcon}
            alt="wishlist"
            className="w-6 h-6 cursor-pointer"
          />
          <img src={cartIcon} alt="cart" className="w-7 h-7 cursor-pointer" />
          <img src={userIcon} alt="user" className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
