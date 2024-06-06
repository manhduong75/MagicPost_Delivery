import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import styles from "../../styles/styles.js";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../server.js";
// import { toast } from "react-toastify";

const Signup = () => {
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div class="h-screen flex justify-center ">
      <div
        class="hidden lg:flex w-full lg:w-1/2 bg-cover bg-[url('https://images.pexels.com/photos/1556991/pexels-photo-1556991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
         justify-around items-center "
      >
        <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 class="text-[#f7941e] font-bold text-4xl font-sans">MagicPost</h1>
          <p class="text-white mt-1">Welcome to my app!!!</p>
          <div class="flex justify-center lg:justify-start mt-6">
            <Link
              to="/"
              class="hover:bg-[#0072bc] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-[#0072bc] mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
            >
              Go to app
            </Link>
          </div>
        </div>
      </div>
      <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div class="w-full px-8 md:px-32 lg:px-24">
          <form
            class="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit}
          >
            <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center">
              Register
            </h1>
            <p class="text-sm font-normal text-gray-600 mb-8 text-center">
              Please register your account!
            </p>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl outline-none ring-blue-500 border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                id="name"
                class=" pl-2 w-full outline-none border-none "
                type="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </div>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl outline-none ring-blue-500 border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                class=" pl-2 w-full outline-none border-none "
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Email Address"
              />
            </div>
            <div class="flex items-center border-2 mb-4 py-2 px-3 relative rounded-2xl outline-none ring-blue-500 border-blue-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                class="pl-2 w-full outline-none border-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                placeholder="Your password"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <div>
              <button
                type="submit"
                class="block w-full hover:bg-[#f7941e] mt-5 py-2 rounded-2xl bg-[#0072bc] hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Register
              </button>
            </div>
            <div class="flex items-center w-full">
              <h4>You have had an account?</h4>
              <Link to="/Login" class="text-blue-600 pl-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
