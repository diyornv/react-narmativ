import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb and Welcome Message in same row */}
      <div className="flex justify-between items-center mb-8">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">My Account</span>
        </nav>

        <h2 className="text-xl font-medium text-gray-900">
          Welcome! <span className="text-[#DB4444]">Md Rimel</span>
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-8">
        {/* Left Sidebar Navigation */}
        <div className="w-64">
          <div className="bg-gray-50 rounded-lg">
            {/* Manage My Account Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Manage My Account
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/account/profile"
                    className="text-[#DB4444] font-medium hover:text-red-600 transition-colors ml-[35px] block"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/address"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    Address Book
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/payment"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    My Payment Options
                  </Link>
                </li>
              </ul>
            </div>

            {/* My Orders Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                My Orders
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/account/returns"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    My Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/cancellations"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    My Cancellations
                  </Link>
                </li>
              </ul>
            </div>

            {/* My WishList Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                My WishList
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/wishlist"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content Area - Empty for now as requested */}
        <div className="flex-1">
          {/* This area is intentionally left empty as per user request */}
        </div>
      </div>
    </div>
  );
};

export default Account;
