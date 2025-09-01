import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (items.length === 0) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Add some products to your cart before checkout!
          </p>
          <Link
            to="/"
            className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-[#B91C1C] transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="container py-20">
        <nav className="text-sm text-gray-600">
          <span className="hover:text-[#DB4444] cursor-pointer">Account</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#DB4444] cursor-pointer">
            My Account
          </span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#DB4444] cursor-pointer">Product</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#DB4444] cursor-pointer">View Cart</span>
          <span className="mx-2">/</span>
          <span className="text-[#DB4444]">CheckOut</span>
        </nav>
      </div>

      {/* Main Checkout Content */}
      <div className="container py-8">
        <div className="max-w-2xl">
          {/* Billing Details Title */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Billing Details
          </h2>

          {/* Billing Details Form */}
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter your first name"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter company name (optional)"
              />
            </div>

            {/* Street Address */}
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter street address"
              />
            </div>

            {/* Apartment */}
            <div>
              <label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter apartment, floor, etc."
              />
            </div>

            {/* Town/City */}
            <div>
              <label
                htmlFor="townCity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Town/City*
              </label>
              <input
                type="text"
                id="townCity"
                name="townCity"
                value={formData.townCity}
                onChange={handleInputChange}
                required
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter town or city"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter phone number"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
                className="w-[500px] px-4 py-3 bg-[#F5F5F5] rounded-md"
                placeholder="Enter email address"
              />
            </div>

            {/* Save Information Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#DB4444] border-gray-300 rounded accent-[#DB4444]"
              />
              <label
                htmlFor="saveInfo"
                className="ml-2 block text-sm text-gray-700"
              >
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
