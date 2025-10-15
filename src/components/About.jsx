import React, { useState } from "react";
import { Link } from "react-router-dom";
import sideImage from "../assets/img/SideImage.png";
import services1 from "../assets/img/Services-1.png";
import services2 from "../assets/img/Services-2.png";
import services3 from "../assets/img/Services-3.png";
import services4 from "../assets/img/Services.png";
import customerServiceIcon from "../assets/svg/Icon-Customer-service.svg";
import deliveryIcon from "../assets/svg/icon-delivery.svg";
import secureIcon from "../assets/svg/Icon-secure.svg";

const About = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: deliveryIcon,
      image: services1,
    },
    {
      id: 1,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: customerServiceIcon,
      image: services2,
    },
    {
      id: 2,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      icon: secureIcon,
      image: services3,
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="container py-10">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">About</span>
        </nav>
      </div>

      <div className="container">
        <div className="flex flex-row justify-between items-center py-8">
          <div className="flex-1 mb-8 ">
            <h1 className="text-5xl font-bold text-black mb-8">Our Story</h1>

            <div className="space-y-6 text-base max-w-[600px]">
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full lg-w-auto min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
            <img
              src={sideImage}
              alt="sideimg"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Services Section removed per design */}

      {/* Statistics Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group bg-white p-6 rounded-lg shadow-sm border border-black transition-colors duration-200 hover:bg-red-500 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border border-black group-hover:bg-white">
                <img
                  src={services1}
                  alt="Service 1"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white">
                10.5k
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Sallers active our site
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 rounded-lg shadow-sm border border-black transition-colors duration-200 hover:bg-red-500 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border border-black group-hover:bg-white">
                <img
                  src={services2}
                  alt="Service 2"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white">
                33k
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Mopnthly Produduct Sale
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-6 rounded-lg shadow-sm border border-black transition-colors duration-200 hover:bg-red-500 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border border-black group-hover:bg-white">
                <img
                  src={services3}
                  alt="Service 3"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white">
                45.5k
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Customer active in our site
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white p-6 rounded-lg shadow-sm border border-black transition-colors duration-200 hover:bg-red-500 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border border-black group-hover:bg-white">
                <img
                  src={services4}
                  alt="Service 4"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white">
                25k
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
