import React from "react";
import { Link } from "react-router-dom";
import sideImage from "../assets/img/SideImage.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="container py-4">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">About</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="flex flex-row items-center py-8">
          {/* Left Content */}
          <div className="flex-1 lg:pr-16 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold text-black mb-8">Our Story</h1>

            <div className="space-y-6 text-base">
              <p>
                Launched in 2015, Exclusive is South Asia's premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sellers and 300 brands and
                serves 3 millions customers across the region.
              </p>

              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assortment in categories
                ranging from consumer electronics to household goods, making us
                a one-stop destination for all your shopping needs.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:w-auto min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            <img
              src={sideImage}
              alt="Happy customers with shopping bags"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
