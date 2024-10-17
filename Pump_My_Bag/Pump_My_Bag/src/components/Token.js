import { useState } from "react";
import close from "../images/close.png";
import PumpMyBag from "../images/PumpMyBag.png";
import { Link } from "react-router-dom";

const Token = () => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        <div class="border-2 border-gray-500 rounded-3xl p-1">
          <nav class=" p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
              <a href="#">
                  <Link to="/">
                    <img src={PumpMyBag} alt="Logo" class="h-5 w-30 mr-3" />
                  </Link>
                </a>
                {/* <span class="text-white text-2xl font-bold">MyLogo</span>  */}
              </div>

              {/* <!-- Right side (Connect Button) --> */}
              <div class="flex items-center font-sf-pro font-bold text-[14px] leading-[30px] tracking-[-0.01em] text-center w-18 h-1">
                <button class="px-8 bg-custom-button-color text-black font-semibold rounded-3xl  transition duration-300">
                  <Link to="/connectedWallet">Connect</Link>
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div class="flex-col items-center p-8  bg-custom-dark-gray rounded-lg m-2">
          <div class="relative mb-4">
            <h1 class="text-center text-white text-[30px] font-malgun font-bold text-lg  leading-custom-lg">
              List Token for Advertising
            </h1>
           
            <div class="absolute right-0 top-0">
              <a href="#">
              <Link to="/communityLEDToken">
                <img src={close} alt="Close" class="h-6 w-6" />
                </Link>
              </a>
            </div>
          </div>
          <hr class="border-black border-2 ml-[250px] mr-[250px] mt-[-18px]" />
          <div className="center-aligned ml-[250px]">
            <p class="font-inter text-white text-custom-lg  ml-5">Chain</p>
            <div class="relative w-full max-w-xl">
              <select class="border border-gray-300 rounded-3xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 m-1 appearance-none">
                <option value="" disabled selected>
                  Select a Chain
                </option>
                <option value="chain1">Chain 1</option>
                <option value="chain2">Chain 2</option>
                <option value="chain3">Chain 3</option>
              </select>
              {/* <!-- Custom dropdown icon --> */}
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            {/* <input
              type="text"
              placeholder="Select a Chain"              
              class="border border-gray-300 rounded-3xl p-2 w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
              // class="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            /> */}
            <p class="font-inter text-white text-custom-lg ml-5 mt-4">
              Token Address
            </p>
            <input
              type="text"
              placeholder="0x00000000000000000000000000000000000000000000000"
              class="border border-gray-300 rounded-3xl p-2 w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <p class="font-inter text-white text-custom-lg ml-5 mt-4">
              IP Address
            </p>
            <input
              type="text"
              placeholder="0x00000000000000000000000000000000000000000000000"
              class="border border-gray-300 rounded-3xl p-2 w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <p class="font-inter text-white text-custom-lg ml-5 mt-4">
              Direct Ads URL
            </p>
            <input
              type="text"
              placeholder="Https//:exampledao.com"
              class="border border-gray-300 rounded-3xl p-2 w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <h1 class="font-inter font-bold text-white text-custom-lg ml-5 mt-6">
              Image
            </h1>
            <h1 class="font-inter font-bold text-white text-custom-md leading-custom-md ml-5 mt-6">
              Requirements:
            </h1>
            <p class="font-inter font-normal text-white text-[20.2px] leading-[25px] ml-5 mt-6">
              1:1 aspect ratio (square, for example 500 x 500 px) <br />
              Min. 100 x 100 px <br />
              Tip: use a high-resolution image, we take care of compressing it
              as needed
            </p>
            <div class="flex items-center ml-5 mt-6">
              <button class="items-center font-bold px-10 py-2 bg-custom-white text-black rounded-2xl cursor-pointer">
                Choose File
                <input type="file" class="hidden" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button
            class="bg-custom-white text-black text-[22px] font-bold py-1 px-12 rounded-3xl border-black border shadow-xl  "
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
          >
            <Link to={isTrue ? "/success" : "/failure"}>Confirm</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Token;
