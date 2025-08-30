import React from "react";
import signIn from "../assets/img/signin-img.png";
import googleIcon from "../assets/svg/Icon-Google.svg";

const SignUp = () => {
  return (
    <div className="py-20 flex">
      <div className="">
        <img
          src={signIn}
          alt="Phone and Shopping Cart"
          className=" object-cover"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className=" mb-8">
            <h1 className="text-4xl font-semibold text-gray-900 mb-2">
              Log in to Exclusive
            </h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 border-b border-gray-300  focus:outline-none focus:border-gray-900"
              />
            </div>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="Login"
              className="bg-[#DB4444] px-12 text-white py-3 rounded-sm font-medium outline-none cursor-pointer"
            >
              Login
            </button>
            <a href="#" className="text-[#DB4444] font-medium hover:underline">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
