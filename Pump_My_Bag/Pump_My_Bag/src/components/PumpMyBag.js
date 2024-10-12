import pumpMyBag from "../images/PumpMyBag.png";
import { Link } from "react-router-dom";

const PumpMyBag = () => {
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
                  <img src={pumpMyBag} alt="Logo" class="h-10 w-30 mr-3" />
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
        <div class="container bg-custom-dark-gray  rounded-3xl h-[380px]">
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
              <div class="absolute w-[220.87px] h-[45px] top-[330px] left-[50px] rounded-2xl bg-white ">
                <button class="font-sf-pro text-center text-[20px] text-black pl-4 pt-2">
                <Link to="/communityLEDToken">Advertise your Token </Link>
                </button>
              </div>
            </div>
            <div class="flex flex-col p-4 bg-custom-white rounded-3xl m-4 h-[300px] w-[550px]">
              <input
                type="text"
                placeholder="                                               SELCT CHAIN"
                className="border border-gray-300 rounded-3xl m-2 p-2 w-74 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="                                               SELECT TOKEN"
                className="border border-gray-300 rounded-3xl m-2 p-2 w-74 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="                                               AMOUNT [$]"
                className="border border-gray-300 rounded-3xl m-2 p-2 w-74 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p class="font-inter  leading-normal text-[14.08px] ml-60">
                BALANCE IN $:1459 USD
              </p>
              {/* <!-- Button --> */}
              <button
                class="absolute bg-custom-button-color  text-white font-bold  top-[365px] left-[860px]
          font-inter text-[22.08px] leading-[26.09px] text-center
           w-[210px] h-[38.65px] rounded-[58.81px] border-[1.32px]  border-black
          "
              >
                <Link to="/connectedWallet">PumpMyBag</Link>
              </button>
            </div>
          </div>
          <div class="absolute top-[450px] right-[140px] flex space-x-4">
            <a href="#" class="font-sf-pro  text-[22px] text-white leading-extra-loose text-center">
              Partner Program
            </a>
            <a href="#" class="font-sf-pro text-[22px] text-white leading-extra-loose text-center">
              LitePape
            </a>
            <a href="#" class="font-sf-pro text-[22px] text-white leading-extra-loose text-center">
              Privacy Policy
            </a>
            <a href="#" class="font-sf-pro  text-[22px] text-white leading-extra-loose text-center">
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
