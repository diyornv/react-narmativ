import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-black relative container">
      <div className="flex items-center justify-center px-4 py-3">
        <div className="flex-1 flex justify-center">
          <span className="text-[#FAFAFA] text-center text-sm leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="font-bold underline cursor-pointer">ShopNow</span>
          </span>
        </div>
        <div className="flex items-center">
          <select className="bg-black text-white border-none text-sm focus:outline-none">
            <option>English</option>
            <option>Русский</option>
            <option>O'zbekcha</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Banner;
