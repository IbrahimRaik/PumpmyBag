import { useState } from "react";
import pumpMyBag from "../images/PumpMyBag.png";
import rectangle from "../images/Rectangle 40.png";
import rectangle2 from "../images/Rectangle 41.png";
import rectangle3 from "../images/Rectangle 42.png";
import { Link } from "react-router-dom";

const AddsToPump = () => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        <div class="border-2 border-gray-500 rounded-3xl p-1">
          <nav class="p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
                <a href="#">
                  <Link to="/">
                    <img src={pumpMyBag} alt="Logo" class="h-5 w-30 mr-3" />
                  </Link>
                </a>
              </div>
              {/* <!-- Right side (Connect Button) --> */}
              <div class="flex items-center font-sf-pro font-bold text-[14px] leading-[30px] tracking-[-0.01em] text-center w-18 h-1">
                <button class="px-8 bg-custom-button-color text-black font-semibold rounded-3xl  transition duration-300">
                  <Link to="/pumpMyBag">Connect</Link>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div class="flex flex-col  p-1 bg-custom-dark-gray rounded-lg mt-5">
          <div class="text-start">
            <h1 class="font-oxygen text-[30.08px] text-white font-bold font-custom-semibold  leading-custom-lg ml-10">
              Select Ads to PuMp
            </h1>
            <div class="container mx-auto p-4 ">
              <div class="flex justify-between space-x-4">
                {/* <!-- First Div --> */}
                <div class="flex flex-col items-center p-4  rounded-lg ">
                  <p class="text-lg font-semibold text-white">AD 1</p>
                  <input type="radio" name="options" class="mt-2" />
                  <a href="#">
                    <img src={rectangle} alt="Option 1" class="mt-2" />
                  </a>
                </div>

                {/* <!-- Second Div --> */}
                <div class="flex flex-col items-center p-4 rounded-lg ">
                  <p class="text-lg font-semibold text-white">AD 2</p>
                  <input type="radio" name="options" class="mt-2" />
                  <a href="#">
                    <img src={rectangle2} alt="Option 2" class="mt-2" />
                  </a>
                </div>

                {/* <!-- Third Div --> */}
                <div class="flex flex-col items-center p-4  rounded-lg ">
                  <p class="text-lg font-semibold text-white">AD 3</p>
                  <input type="radio" name="options" class="mt-2" />
                  <a href="#">
                    <img src={rectangle3} alt="Option 3" class="mt-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <button
            class="bg-custom-black  text-white font-bold py-1 px-2 
          font-inter font-normal text-[18.08px] leading-[24.09px] text-center 
           w-[150px] h-[48.65px] rounded-[52.81px] border-[1.32px]  border-black
          "
          >
            <Link to={isTrue ? "/success" : "/failure"}>CONFIRM</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default AddsToPump;
