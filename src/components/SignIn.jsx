import React from "react";
import signIn from "../assets/img/signin-img.png";
import googleIcon from "../assets/svg/Icon-Google.svg";

const SignIn = () => {
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
              Create an account
            </h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <input
                type="email"
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

            <button
              type="submit"
              className="w-full bg-[#DB4444] text-white py-3 rounded-sm font-medium cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-sm cursor-pointer">
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
              <span className="text-gray-700">Sign up with Google</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have account?
              <a
                href="#"
                className="text-[#DB4444] font-medium hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
