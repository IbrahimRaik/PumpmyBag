import React from "react";
import PumpMyBag from "../images/PumpMyBag.png";
import portrait from "../images/money-fly.png";
import flower from "../images/flower svg (1).png";
import circle from "../images/CIRCLE ICON.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        <div class="border-2 border-gray-500 rounded-3xl p-4">
          <nav class="p-4">
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
              <div class="font-sf-pro font-bold text-2xl leading-[30px] tracking-[-0.02em] text-center">
                <button class="px-10 py-1 bg-custom-gray text-white font-semibold rounded-3xl  transition duration-300">
                  <Link to="/advertisersAndCommuinity">Connect</Link>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div>
          {/* <!-- Container --> */}
          <div class="container pt-8">
            {/* <!-- Flexbox to align two divs side by side --> */}
            <div class="flex flex-wrap ">
              {/* <!-- First div with content --> */}
              <div class="bg-custom-thick-yellow w-full md:w-3/4 p-4 rounded-3xl  h-[446px]">
                <div className="flower">
                  <img
                    src={flower}
                    alt="Sample Image"
                    class="w-30 h-30 rounded-3xl ml-auto"
                  />
                </div>
                <h1 class="text-4xl  font-manrope text-[40.76px] font-normal leading-[65.42px]  text-center">
                  Experience exposure like never <br />
                  before with{" "}
                  <span class="text-black font-extrabold">1.2 Billion+ </span>
                  <br />
                  views &{" "}
                  <span class="text-black font-extrabold">
                    {" "}
                    4.8 Million+ clicks{" "}
                  </span>{" "}
                  <br />
                  per day
                </h1>
              </div>

              {/* <!-- Second div with an image --> */}
              <div class="bg-custom-green w-full md:w-1/4 pl-4 h-[500px]">
                <img src={portrait} alt="Sample Image" class="rounded-2xl " />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Container --> */}
          <div class="container m-1">
            {/* <!-- Flexbox to align two divs side by side --> */}
            <div class="flex space-x-4">
              {/* <!-- First div with content --> */}
              <div class="bg-custom-light-green w-full md:w-1/2 p-4 rounded-2xl">
                <div className="circle">
                  <img
                    src={circle}
                    alt="Sample Image"
                    class="w-10 h-10 rounded-xl"
                  />
                </div>
                <h1 class="text-4xl  font-manrope text-[40.76px] font-normal leading-[70.42px]  text-start">
                  -Get your ads <br />
                  diplayed on <br />
                  <span class="text-black font-extrabold"> 12000+ </span>
                  <br />
                  websites and Apps.
                </h1>
              </div>

              <div class="bg-custom-thin-yellow w-full md:w-1/2 p-4 rounded-2xl">
                <div className="circle">
                  <img
                    src={circle}
                    alt="Sample Image"
                    class="w-10 h-10 rounded-xl"
                  />
                </div>
                <h1 class="text-4xl  font-manrope text-[40.76px] font-normal leading-[70.42px]  text-start">
                  -Access <br />
                  <span class="text-black font-extrabold">
                    30 Million+{" "}
                  </span>{" "}
                  <br />
                  Web3 enthusiasts ready to <br />
                  engage with your token.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
