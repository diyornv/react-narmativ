import React, { useState } from "react";
import { Link } from "react-router-dom";
import phoneIcon from "../assets/svg/icons-phone.svg";
import mailIcon from "../assets/svg/icons-mail.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container py-30">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">Contact</span>
        </nav>
      </div>

      {/* Two cards layout like Figma */}
      <div className="container">
        <div className="grid grid-cols-3 gap-6">
          {/* Left info card */}
          <div className="w-[400px] rounded-md shadow-xl p-6">
            <div className=" flex items-start gap-3">
              <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                <img src={phoneIcon} alt="phone" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-black">
                  Call To Us
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-gray-600 mt-1 text-sm">
                  Phone: +8801611112222
                </p>
              </div>
            </div>

            <div className="my-6 border-t border-gray-200" />

            <div className="flex items-start gap-3">
              <div className="w-12  bg-[#DB4444] rounded-full flex items-center justify-center">
                <img src={mailIcon} alt="mail" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-black">
                  Write To US
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-600 mt-2  text-sm">
                  Emails: customer@exclusive.com
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="col-span-2 rounded-md  shadow-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm bg-gray-100 border border-gray-200 rounded-md"
                  placeholder="Your Name *"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm bg-gray-100 border border-gray-200 rounded-md "
                  placeholder="Your Email *"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm bg-gray-100 border border-gray-200 rounded-md"
                  placeholder="Your Phone *"
                />
              </div>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2.5 text-sm bg-gray-100 border border-gray-200 rounded-md "
                placeholder="Your Massage"
              />

              <div className="flex justify-end">
                <button
                  className="bg-[#DB4444] hover:brightness-95 text-white font-medium py-2.5 px-6 rounded-md text-sm"
                  type="submit"
                >Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
