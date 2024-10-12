import PumpMyBag from "../images/PumpMyBag.png";
import rectangle from "../images/rectangle.jpg";
import eWallet from "../images/ewallet.png";
import close from "../images/close.png";
import { Link } from "react-router-dom";

const ConnectedWallet = () => {
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        <div class="border-2 border-gray-500 rounded-3xl p-4">
          <nav class="p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
                <a href="#">
                  <img src={PumpMyBag} alt="Logo" class="h-10 w-30 mr-3" />
                </a>
                {/* <span class="text-white text-2xl font-bold">MyLogo</span>  */}
              </div>
            </div>
          </nav>
        </div>
        <div class="relative bg-custom-dark-gray flex flex-col items-center space-y-4 p-6 rounded-2xl mt-6 justify-center min-h-screen">
          {/* <div class="absolute inset-0 bg-gray-500 bg-opacity-50 blur">
            {/* <!-- Heading --> */}
          {/* <h1 class="relative font-sfpro text-2xl font-bold text-black leading-[63.08px] tracking-[5%] text-center ">
              COMMUNITY-LED TOKEN ADVERTISING
            </h1> */}

          {/* <!-- Paragraph --> */}
          {/* <p class=" relative font-inter font-medium text-[18px] leading-[23px] text-center ">
              Put that marketing budget to good use! Get your Token in front of
              30Million+ <br />
              Web3 People through Placing your Ads on 12,000+ Websites and Apps
            </p> */}

          {/* <!-- Image --> */}
          {/* <img
              src={rectangle}
              alt="Placeholder Image"
              class="relative
              object-cover 
            w-[811px] h-[365px] top-[60.31px] left-[250px] rounded-[37.12px]"
            /> */}

          {/* <!-- Button --> */}
          {/* <button
              class="relative bg-custom-red  text-white font-bold py-2 px-4 
          font-inter font-normal text-[22.08px] leading-[26.09px] text-center
           w-[235px] h-[68.65px] top-[70.31px] left-[548px] rounded-[52.81px] border-[1.32px]  border-black
          blur"
            >
              Order Now - <br />
              399$/Lifetime
            </button>
          </div> */}

          <div class="container bg-custom-dark-gray  rounded-3xl h-auto blur">
            {/* <!-- Flexbox to align two divs side by side --> */}
            <div class="flex flex-col lg:flex-row gap-4 mt-4">
              <div class="flex flex-col p-4 rounded-3xl m-4 h-auto flex-1 text-white">
                <h1 class="font-oxygen font-bold text-2xl leading-custom-lg">
                  PuMp YoUr OwN BaGs
                </h1>
                {/* <!-- Paragraph --> */}
                <p class="font-sfpro text-md leading-normal mt-2">
                  Don’t wait for the big shots—Founders, CEOs, CMOs, and <br />
                  Devs—to hype your investment! Take the reins and boost <br />
                  your coin the DIY way. Pool resources and rocket our <br />
                  success to the moon.
                </p>
                <div class="absolute w-[220.87px] h-[45px] top-[300px] left-[50px] rounded-2xl bg-white ">
                  <button class="font-sf-pro text-center text-[20px] text-black pl-4 pt-2">
                    Advertise your Token
                  </button>
                </div>
              </div>
              <div class="flex flex-col p-4 bg-custom-white rounded-3xl m-4 h-auto flex-1">
                <input
                  type="text"
                  placeholder="                                               SELCT CHAIN"
                  className="border border-gray-300 rounded-3xl m-2 p-2 w-full md:w-3/4  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="                                               SELECT TOKEN"
                  className="border border-gray-300 rounded-3xl m-2 p-2 w-full md:w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="                                               AMOUNT [$]"
                  className="border border-gray-300 rounded-3xl m-2 p-2 w-full md:w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p class="font-inter  leading-normal text-[14.08px] ml-60">
                  BALANCE IN $:1459 USD
                </p>
                {/* <!-- Button --> */}
                <button
                  class="absolute bg-custom-button-color  text-white font-bold  top-[365px] w-full md:w-auto
          font-inter text-[22.08px] leading-[26.09px] text-center
          rounded-[58.81px] border-[1.32px]  border-black
          "
                >
                  <Link to="">PumpMyBag</Link>
                </button>
              </div>
            </div>
            <div class="absolute top-[450px] right-[140px] flex space-x-4 blur">
              <a
                href="#"
                class="font-sf-pro  text-[22px] text-white leading-extra-loose text-center"
              >
                Partner Program
              </a>
              <a
                href="#"
                class="font-sf-pro text-[22px] text-white leading-extra-loose text-center"
              >
                LitePape
              </a>
              <a
                href="#"
                class="font-sf-pro text-[22px] text-white leading-extra-loose text-center"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                class="font-sf-pro  text-[22px] text-white leading-extra-loose text-center"
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
          {/* <!-- Overlay Div with Content and Button --> */}
          <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
            <div class="relative flex flex-col justify-center items-center bg-custom-white rounded-2xl p-6">
              {/* Overlay Heading */}
              <a href="#" class="absolute top-4 right-4">
                
                <Link to="/pumpMyBag">
                <img src={close} alt="Close" class="h-5 w-5" />
                </Link>                
              </a>
              <a href="#">
                <img src={eWallet} alt="Wallet" class="h-20 w-30 mr-3" />
              </a>

              {/* Overlay Button */}
              <p class="mt-4 text-black font-bold py-3 px-6">
                WALLET CONNECTED
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectedWallet;
