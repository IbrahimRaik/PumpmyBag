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
        <div class="border-2 border-gray-500 rounded-3xl p-4">
          <nav class=" p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
                <a href="#">
                  <img src={PumpMyBag} alt="Logo" class="h-10 w-30 mr-3" />
                </a>
                {/* <span class="text-white text-2xl font-bold">MyLogo</span>  */}
              </div>

              {/* <!-- Right side (Connect Button) --> */}
              <div class="font-sf-pro font-bold text-2xl leading-[30px] tracking-[-0.02em] text-center">
                <button class="px-10 py-1 bg-custom-button-color text-black font-semibold rounded-3xl  transition duration-300">
                  <Link to="/pumpMyBag">Connected</Link>
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div class="flex-col items-center p-8 sm:p-16 bg-custom-dark-gray rounded-lg m-4 sm:m-24">
          <div class="relative mb-4">
            <h1 class="text-center text-white font-malgun font-bold text-lg sm:text-xl leading-custom-lg">
              List Token for Advertising
            </h1>
            <div class="absolute right-0 top-0">
              <a href="#">
                <img src={close} alt="Close" class="h-6 w-6" />
              </a>
            </div>
          </div>
          <hr class="border-black border-2" />
          <div className="center-aligned">
            <p class="font-inter text-white text-custom-lg m-1">Chain</p>
            <input
              type="text"
              placeholder="Select a Chain"
              class="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <p class="font-inter text-white text-custom-lg m-1">
              Token Address
            </p>
            <input
              type="text"
              placeholder="0x00000000000000000000000000000000000000000000000"
              class="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <p class="font-inter text-white text-custom-lg m-1">IP Address</p>
            <input
              type="text"
              placeholder="0x00000000000000000000000000000000000000000000000"
              class="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <p class="font-inter text-white text-custom-lg m-1">
              Direct Ads URL
            </p>
            <input
              type="text"
              placeholder="Https//:exampledao.com"
              class="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 m-1"
            />
            <h1 class="font-inter font-bold text-white text-custom-lg">
              Image
            </h1>
            <h1 class="font-inter font-bold text-white text-custom-md leading-custom-md mt-4">
              Requirements:
            </h1>
            <p class="font-inter font-normal text-white text-custom-md leading-custom-md">
              1:1 aspect ratio (square, for example 500 x 500 px) <br />
              Min. 100 x 100 px <br />
              Tip: use a high-resolution image, we take care of compressing it
              as needed
            </p>
            <div class="flex items-center mt-4">
              <button class="items-center font-bold px-4 py-2 bg-custom-white text-black rounded-2xl cursor-pointer">
                Choose File
                <input type="file" class="hidden" />
              </button>
            </div>
          </div>
          <div class="flex justify-center mt-4">
            <button class="bg-custom-white text-black font-bold py-2 px-4 rounded-xl">
              <Link to={isTrue ? "/success" : "/failure"}>Confirm</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Token;
