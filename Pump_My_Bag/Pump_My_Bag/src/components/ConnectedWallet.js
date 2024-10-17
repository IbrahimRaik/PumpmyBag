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
        <div class="border-2 border-gray-500 rounded-3xl p-1">
          <nav class="p-1">
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
            </div>
          </nav>
        </div>
        <div class="relative bg-custom-dark-gray flex flex-col items-center space-y-4 p-6 rounded-2xl mt-6 justify-center min-h-screen">
          <div class="container bg-custom-dark-gray  rounded-3xl h-[380px] blur">
            {/* <!-- Flexbox to align two divs side by side --> */}
            <div class="flex gap-x-3 mt-4">
              <div class="flex flex-col p-4 rounded-3xl m-4 h-[300px] w-[600px] text-white">
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
                <div class="absolute w-[220.87px] h-[45px] top-[280px] left-[50px] rounded-2xl bg-white ">
                  <button class="font-sf-pro text-center text-[20px] text-black pl-4 pt-2">
                    <Link to="/communityLEDToken">Advertise your Token </Link>
                  </button>
                </div>
              </div>
              <div class="flex flex-col p-10 bg-custom-white border-black  rounded-3xl m-4 h-[300px] w-[550px]">
                <input
                  type="text"
                  placeholder="                                       SELCT CHAIN"
                  className="border border-black rounded-3xl m-2 p-2 w-74 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="                                       SELECT TOKEN"
                  className="border border-black rounded-3xl m-2 p-2 w-74 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="                                        AMOUNT [$]"
                  className="border border-black rounded-3xl m-2 p-2 w-74 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p class="font-inter  leading-normal text-[14.08px] ml-60">
                  BALANCE IN $:1459 USD
                </p>
                {/* <!-- Button --> */}
                <button
                  class="absolute bg-custom-button-color  text-white font-bold  top-[280px] left-[860px]
          font-inter text-[22.08px] leading-[26.09px] text-center
           w-[210px] h-[38.65px] rounded-[58.81px] border-[1.32px]  border-black
          "
                >
                  <Link to="/connectedWallet">PumpMyBag</Link>
                </button>
              </div>
            </div>
            <div class="absolute top-[330px] right-[70px] flex space-x-4">
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
          <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 z-10">
            <div class="relative flex flex-col justify-center items-center bg-custom-white rounded-2xl p-6">
              {/* Overlay Heading */}
              <a href="#" class="absolute top-4 right-4">
                <Link to="/pumpMyBag">
                  <img
                    src={close}
                    alt="Close"
                    class="relative top-[-120px] right-[-500px] w-[25px] h-[25px]"
                  />
                </Link>
              </a>
              <a href="#">
                <img src={eWallet} alt="Wallet" class="h-20 w-30 mr-3" />
              </a>

              {/* Overlay Button
              <p class="mt-4 text-black font-bold ">
                WALLET CONNECTED
              </p> */}
              <button
                class="mt-4 bg-black  text-white font-bold  
          font-inter  text-center
          border-[1.32px] py-3 px-6 rounded-3xl
          "
              >
                <Link to="/addsToPump">CONNECT WALLET</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectedWallet;
