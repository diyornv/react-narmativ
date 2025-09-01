import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items } = useCart();

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
      <div className="container py-4">
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
    </div>
  );
};

export default Checkout;
