import { useState } from "react";
import pumpMyBag from "../images/PumpMyBag.png";
import { Link } from "react-router-dom";
import PumpMyBagModal from "./PumpMyBagModal";

const PumpMyBag = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        {/* <div class="border-2 border-gray-500 rounded-2xl p-1"> */}
        <div class="border-2 border-gray-500 rounded-2xl p-1 w-full sm:w-[95%] md:w-[735px] lg:w-[100%] xl:w-[97%] 2xl:w-[75%]">
          <nav class="p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
                <a href="#">
                  <Link to="/">
                    <img src={pumpMyBag} alt="Logo" class="h-5 w-30 mr-3" />
                  </Link>
                </a>
                {/* <span class="text-white text-2xl font-bold">MyLogo</span>  */}
              </div>

              {/* <!-- Right side (Connect Button) --> */}
              {/* <div class="font-sf-pro font-bold text-2xl leading-[30px] tracking-[-0.02em] text-center">
                <button class="px-10 py-1 bg-custom-gray text-white font-semibold rounded-3xl  transition duration-300">
                <Link to="/addsToPump">Connect</Link>
                </button>
              </div> */}
            </div>
          </nav>
        </div>
        {/* h-[500px] */}
        <div
          class="container bg-custom-dark-gray  rounded-3xl 
        h-[160vh] sm:h-[400px] md:h-[95vh] lg:h-[95vh] xl:h-[85vh]
        "
        >
          {/* <!-- Flexbox to align two divs side by side --> */}
          <div class="flex flex-col md:flex-row gap-3 mt-4">
            <div class="flex flex-col p-4 rounded-3xl m-4 h-[300px] w-[600px] text-white">
              <h1 class="font-oxygen font-bold text-[26.53px] leading-[54.71px] sm: xs: leading-custom-lg">
                PuMp YoUr OwN BaGs
              </h1>
              {/* text-base bg-gray-100 p-4 md:text-lg lg:text-xl */}
              {/* <h1 class="font-oxygen font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-center">
                PuMp YoUr OwN BaGs
              </h1> */}

              {/* <!-- Paragraph --> */}
              <p
                class="font-sfpro text-[11.5px] leading-[24.89px] mt-2 ml-1
              
              "
              >
                Don’t wait for the big shots—Founders, CEOs, CMOs, <br />
                and Devs—to hype your investment! Take the reins and <br />
                boost your coin the DIY way. Pool resources and rocket <br />
                our success to the moon.
              </p>
              <div class="absolute w-[220.87px] h-[36px] top-[320px] left-[70px] rounded-2xl bg-white ">
                <button class="font-sf-pro text-center text-[15px] text-black pl-7 pt-2  font-bold">
                  <Link to="/communityLEDToken">Advertise your Token </Link>
                </button>
              </div>
            </div>
            {/* <div class="flex flex-col p-6 bg-custom-white border-black rounded-3xl 
            m-4 w-full
            max-w-md 
            md:max-w-lg 
            lg:max-w-xl 
            xl:max-w-2xl"> */}
            <div
              class="flex flex-col p-6 bg-custom-white border-black rounded-3xl 
            m-4 w-85            
            "
            >
              {/* <input
                type="text"
                placeholder="Select Chain"
                class="border border-black rounded-3xl m-2 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-center"
              /> */}

              <div class="relative w-full max-w-xl">
                <select
                  class="border border-black text-gray-400 rounded-3xl 
                m-2 p-3 w-full              
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-blue-500 appearance-none text-center
                transition-all duration-200 ease-in-out"
                >
                  <option value="" disabled selected>
                    Select a Chain
                  </option>
                  <option value="chain1">Chain 1</option>
                  <option value="chain2">Chain 2</option>
                  <option value="chain3">Chain 3</option>
                </select>
                {/* <!-- Custom dropdown icon --> */}
                {/* <div class="absolute inset-y-0 right-[-25px] flex items-center pointer-events-none"> */}
                <div
                  class="absolute inset-y-0 right-0
                sm:right-0
                md:right-[1%] 
                lg:right-[1%] 
                xl:right-[1%] 
                2xl:right-[1%] 
                flex items-center pointer-events-none"
                >
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
                placeholder="Select Token"
                class="border border-black rounded-3xl m-2 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-center"
              /> */}
              <div class="relative w-full max-w-xl">
                <select class="border border-black text-gray-400 rounded-3xl m-2 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500  appearance-none text-center">
                  <option value="" disabled selected>
                    Select Token
                  </option>
                  <option value="chain1">Token 1</option>
                  <option value="chain2">Token 2</option>
                  <option value="chain3">Token 3</option>
                </select>
                {/* <!-- Custom dropdown icon --> */}
                <div
                  class="absolute inset-y-0 right-0
                sm:right-0
                md:right-[1%] 
                lg:right-[1%] 
                xl:right-[1%] 
                2xl:right-[1%] 
                flex items-center pointer-events-none"
                >
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
              <input
                type="text"
                placeholder="Amount [$]"
                class="border border-black rounded-3xl m-2 p-3  w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[99%] 2xl:w-[98%] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-center"
              />
              <p
                class="font-inter text-sm text-center 
               mt-2 ml-[35%]
               sm:ml-[1px] 
               md:ml-[32%] 
               lg:ml-[350px] 
               xl:ml-[45] 
               2xl:ml-[450px] "
              >
                BALANCE IN $: 1459 USD
              </p>

              <button
                onClick={openModal}
                //  class="mt-4 bg-custom-button-color text-black font-bold font-inter text-lg leading-6 text-center  w-40 h-8 rounded-full border border-black ml-[225px]">
                class="mt-4 bg-custom-button-color text-black font-bold font-inter text-lg leading-6 text-center  
                 w-40 h-9            
                 md:w-40 md:h-12
                 lg:w-[35%] lg:h-10
                 xl:w-[40%] xl:h-12
                 2xl:w-40 2xl:h-12
                 rounded-full border border-black 
                 ml-[28%] 
                 sm:ml-[100px] 
                 md:ml-[150px] 
                 lg:ml-[38%]
                 xl:ml-[30%]"
              >
                {/* <Link to="/a" class="w-full h-full  py-2"> */}
                PumpMyBag
                {/* </Link> */}
              </button>
              {/* Render modal conditionally */}
              {isModalOpen && <PumpMyBagModal closeModal={closeModal} />}
            </div>
          </div>
          {/* <div class="absolute top-[410px] right-[140px] flex space-x-4">   */}

          {/* <div class="
            absolute top-[410px] right-[140px] flex space-x-4 
            xs:top-[30px] xs:right-[120px] 
            sm:top-[380px] sm:right-[120px] 
            md:top-[410px] md:right-[50px] 
            lg:top-[407px] lg:right-[50px] 
            xl:top-[410px] xl:right-[160px]"> */}
          <div
            class="absolute top-[750px] right-[20px] flex space-x-4 
            top-[300px] right-[1px] mt-12
            sm:top-[380px] sm:right-[120px] 
            md:top-[360px] md:right-[160px] 
            lg:top-[90%] lg:right-[10%] 
            xl:top-[80%] xl:right-[15%] xl:space-x-8"
          >
            <a
              href="#"
              class="font-sf-pro text-[14.6px] text-white leading-[54.71px] text-center"
            >
              LitePaper |
            </a>
            <a
              href="#"
              class="font-sf-pro text-[14.6px] text-white leading-[54.71px] text-center"
            >
              Privacy Policy |
            </a>
            <a
              href="#"
              class="font-sf-pro  text-[14.6px] text-white leading-[54.71px] text-center"
            >
              Terms & Conditions
            </a>
          </div>

          {/* <div class="text-center">
            <a href="https://adpod.xyz/" class="text-red-500 underline">
              Powered by AdPod.xyz
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default PumpMyBag;
