import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import gamingpage1 from "../assets/img/gamingpage1.png";
import gamingpage2 from "../assets/img/gamingpage2.png";
import gamingpage3 from "../assets/img/gamingpage3.png";
import gamingpage4 from "../assets/img/gamingpage4.png";
import gamingpage5 from "../assets/img/gamingpage5.png";
import starIcon from "../assets/svg/gamingpagestar.svg";
import deliveryIcon from "../assets/svg/icon-gamingpagedelivry.svg";
import returnIcon from "../assets/svg/Icon-gamingpagereturn.svg";
import heartIcon from "../assets/svg/heart.svg";
import QuickView from "../assets/svg/QuickView.svg";
import g27 from "../assets/img/g-27.png";
import g92 from "../assets/img/g-92.png";
import ak900 from "../assets/img/ak-900.png";
import jbl from "../assets/img/jbl.png";

const Gaming = () => {
  const [selectedImage, setSelectedImage] = useState(gamingpage5);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(2);
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Product data for Related Items
  const relatedProducts = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 200,
      discount: 40,
      image: g92,
      reviews: 88,
      isNew: false,
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      image: ak900,
      reviews: 75,
      isNew: false,
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      image: g27,
      reviews: 99,
      isNew: false,
    },
    {
      id: 4,
      title: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      discount: 6,
      image: jbl,
      reviews: 65,
      isNew: false,
    },
  ];

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen ">
      <div className="container py-10">
        <nav className="text-sm text-gray-600">
          <Link to="/account" className="hover:text-black">
            Account
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Gaming</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Havic HV G-92 Gamepad</span>
        </nav>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Left Images */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div
                className="w-40 h-40 bg-[#F5F5F5] rounded-lg border border-gray-200 flex justify-center items-center cursor-pointer hover:border-gray-300"
                onClick={() => setSelectedImage(gamingpage1)}
              >
                <img src={gamingpage1} alt="gaming1" className="rounded-lg" />
              </div>
              <div
                className="w-40 h-40 bg-[#F5F5F5] rounded-lg border border-gray-200 flex justify-center items-center cursor-pointer hover:border-gray-300"
                onClick={() => setSelectedImage(gamingpage2)}
              >
                <img src={gamingpage2} alt="gaming1" className="rounded-lg" />
              </div>
              <div
                className="w-40 h-40 bg-[#F5F5F5] rounded-lg border border-gray-200 flex justify-center items-center cursor-pointer hover:border-gray-300"
                onClick={() => setSelectedImage(gamingpage3)}
              >
                <img src={gamingpage3} alt="gaming1" className="rounded-lg" />
              </div>
              <div
                className="w-40 h-40 bg-[#F5F5F5] rounded-lg border border-gray-200 flex justify-center items-center cursor-pointer hover:border-gray-300"
                onClick={() => setSelectedImage(gamingpage4)}
              >
                <img src={gamingpage4} alt="gaming1" className="rounded-lg" />
              </div>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg border border-gray-200 p-8">
              <div className="w-[500px] h-[600px] flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="gaming product main view"
                  className="w-[300px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 max-w-lg">
            <h1 className="text-3xl font-bold text-black mb-4">
              Havic HV G-92 Gamepad
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center ">
                <img src={starIcon} alt="staricon" className="w-20" />
              </div>
              <span className="text-gray-600 text-sm">(150 Reviews)</span>
              <span className="text-green-600 text-sm">In Stock</span>
            </div>
            <div className="text-3xl font-medium text-black mb-6">$192.00</div>

            <p className="text-gray-600 mb-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <div className="mb-6 ">
              <h3 className="text-black font-medium mb-3 ">Colours:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor("white")}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === "white"
                      ? "border-black"
                      : "border-gray-300"
                  } bg-white`}
                />
                <button
                  onClick={() => setSelectedColor("red")}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === "red" ? "border-black" : "border-gray-300"
                  } bg-red-500`}
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-black font-medium mb-3">Size:</h3>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "bg-red-500 text-white border-red-50"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border-r border-gray-300 hover:bg-gray-50 cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border-l border-gray-300 bg-red-500 hover:bg-red-600 cursor-pointer"
                >
                  +
                </button>
              </div>
              <button className="bg-red-500 cursor-pointer text-white px-8 py-3 rounded hover:bg-red-600 font-medium">
                Buy Now
              </button>
              <button className="p-3 border cursor-pointer border-gray-300 rounded hover:bg-gray-50">
                <img src={heartIcon} alt="" className="w-5 h-5" />
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-4">
                <img src={deliveryIcon} alt="icon" className="w-10 mt-1" />
                <div>
                  <h4>Free Delivery</h4>
                  <p className="text-sm text-gray-600 underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 flex items-start gap-3 mb-4">
                <img src={returnIcon} alt="icon" className="w-10 mt-4" />
                <div>
                  <h4 className="mt-4">Return Delivery</h4>
                  <p className="text-sm text-gray-600 ">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline"> Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <h2 className="text-2xl font-medium text-black">Related Item</h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="w-full group">
            <div className="relative bg-[f5f5f5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
              <img
                src={g92}
                alt="g92"
                className="max-h-[180px] object-contain"
              />
              <div className="w-12 absolute top-3 right-3 left-3 bg-[#db4444] text-white text-[12px] px-2 py-1 rounded">
                -40%
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                  <img src={QuickView} alt="" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleAddToWishlist(relatedProducts[0])}
                  className={`w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer ${
                    isInWishlist(relatedProducts[0].id)
                      ? "bg-red-500"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={heartIcon}
                    alt="wishlist"
                    className={`w-4 h-4 ${
                      isInWishlist(relatedProducts[0].id)
                        ? "filter brightness-0 invert"
                        : ""
                    }`}
                  />
                </button>
              </div>
              <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleAddToCart(relatedProducts[0])}
                  className="w-full bg-black text-white py-2 rounded-b cursor-pointer"
                >
                  Add To Card
                </button>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-[16px] leading-[24px] font-semibold mb-2">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="flex items-center gap-3 ">
                <span className="text-[#db4444] font-medium">$120</span>
                <span className="text-gray-400 line-through text-sm">$160</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <img src={starIcon} alt="" className="w-20" />
                </div>
                <span className="text-[#808080] text-sm">(88)</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full group">
            <div className="relative bg-[f5f5f5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
              <img
                src={ak900}
                alt="g92"
                className="max-h-[180px] object-contain"
              />
              <div className="w-12 absolute top-3 right-3 left-3 bg-[#db4444] text-white text-[12px] px-2 py-1 rounded">
                -40%
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                  <img src={QuickView} alt="" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleAddToWishlist(relatedProducts[0])}
                  className={`w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer ${
                    isInWishlist(relatedProducts[0].id)
                      ? "bg-red-500"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={heartIcon}
                    alt="wishlist"
                    className={`w-4 h-4 ${
                      isInWishlist(relatedProducts[0].id)
                        ? "filter brightness-0 invert"
                        : ""
                    }`}
                  />
                </button>
              </div>
              <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleAddToCart(relatedProducts[0])}
                  className="w-full bg-black text-white py-2 rounded-b cursor-pointer"
                >
                  Add To Card
                </button>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-[16px] leading-[24px] font-semibold mb-2">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="flex items-center gap-3 ">
                <span className="text-[#db4444] font-medium">$120</span>
                <span className="text-gray-400 line-through text-sm">$160</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <img src={starIcon} alt="" className="w-20" />
                </div>
                <span className="text-[#808080] text-sm">(88)</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full group">
            <div className="relative bg-[f5f5f5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
              <img
                src={g27}
                alt="g92"
                className="max-h-[180px] object-contain"
              />
              <div className="w-12 absolute top-3 right-3 left-3 bg-[#db4444] text-white text-[12px] px-2 py-1 rounded">
                -40%
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                  <img src={QuickView} alt="" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleAddToWishlist(relatedProducts[0])}
                  className={`w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer ${
                    isInWishlist(relatedProducts[0].id)
                      ? "bg-red-500"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={heartIcon}
                    alt="wishlist"
                    className={`w-4 h-4 ${
                      isInWishlist(relatedProducts[0].id)
                        ? "filter brightness-0 invert"
                        : ""
                    }`}
                  />
                </button>
              </div>
              <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleAddToCart(relatedProducts[0])}
                  className="w-full bg-black text-white py-2 rounded-b cursor-pointer"
                >
                  Add To Card
                </button>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-[16px] leading-[24px] font-semibold mb-2">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="flex items-center gap-3 ">
                <span className="text-[#db4444] font-medium">$120</span>
                <span className="text-gray-400 line-through text-sm">$160</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <img src={starIcon} alt="" className="w-20" />
                </div>
                <span className="text-[#808080] text-sm">(88)</span>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full group">
            <div className="relative bg-[f5f5f5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
              <img
                src={jbl}
                alt="g92"
                className="max-h-[180px] object-contain"
              />
              <div className="w-12 absolute top-3 right-3 left-3 bg-[#db4444] text-white text-[12px] px-2 py-1 rounded">
                -40%
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                  <img src={QuickView} alt="" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleAddToWishlist(relatedProducts[0])}
                  className={`w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer ${
                    isInWishlist(relatedProducts[0].id)
                      ? "bg-red-500"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={heartIcon}
                    alt="wishlist"
                    className={`w-4 h-4 ${
                      isInWishlist(relatedProducts[0].id)
                        ? "filter brightness-0 invert"
                        : ""
                    }`}
                  />
                </button>
              </div>
              <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleAddToCart(relatedProducts[0])}
                  className="w-full bg-black text-white py-2 rounded-b cursor-pointer"
                >
                  Add To Card
                </button>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-[16px] leading-[24px] font-semibold mb-2">
                HAVIT HV-G92 Gamepad
              </h3>
              <div className="flex items-center gap-3 ">
                <span className="text-[#db4444] font-medium">$120</span>
                <span className="text-gray-400 line-through text-sm">$160</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <img src={starIcon} alt="" className="w-20" />
                </div>
                <span className="text-[#808080] text-sm">(88)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
