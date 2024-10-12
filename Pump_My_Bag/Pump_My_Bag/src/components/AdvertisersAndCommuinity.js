import PumpMyBag from "../images/PumpMyBag.png";
import apple from "../images/apple_new.png";
import telegram from '../images/telegram.png';
import google from "../images/google.png";
import xlogo from '../images/x logo.png';
import { Link } from "react-router-dom";

const AdvertisersAndCommuinity = () => {
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
                  <img src={PumpMyBag} alt="Logo" class="h-10 w-30 mr-3" />
                </a>
                {/* <span class="text-white text-2xl font-bold">MyLogo</span>  */}
              </div>
            </div>
          </nav>
        </div>

        <div class="container mx-auto">
          {/* <!-- Flexbox to align two divs side by side --> */}
          <div class="flex  justify-between">
            <div class="flex flex-col items-center p-40 bg-custom-thin-yellow rounded-2xl m-4 h-[560px]">
              <h1 class="mb-4 text-3xl font-extrabold">ADVERTISERS</h1>
              <p class="text-sm">Signup your New Account</p>
              <input
                type="text"
                placeholder="Email / Phone Number /User Name"
                className="border border-gray-300 rounded-lg m-2 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg m-2 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div class="flex items-center justify-center w-full my-4">
                <hr class="flex-grow border-black border-1" />
                <span class="px-4 text-black font-bold">OR</span>
                <hr class="flex-grow border-black border-1" />
              </div>


              <p class="text-sm">Login With</p>
              <div class="flex justify-center space-x-12 mt-4">
                {/* <!-- Google Logo --> */}
                <a href="https://www.google.com">
                  <img
                    src={google}
                    alt="Google Logo"
                    class="h-8 w-8 p-1 border border-black rounded-lg bg-custom-white"
                  />
                </a>
                <a href="https://www.apple.com">
                  {/* <!-- Apple Logo --> */}
                  <img
                    src={apple}
                    alt="Apple Logo"
                    class="h-8 w-auto p-1  border border-black rounded-lg bg-custom-white"
                  />
                </a>
                {/* <!-- Twitter Logo --> */}
                <a href="https://twitter.com">
                  <img
                    src={xlogo}
                    alt="Twitter Logo"
                    class="h-8 w-auto p-1  border border-black rounded-lg bg-custom-white"
                  />
                </a>
                {/* <!-- Telegram Logo --> */}
                <a href="https://telegram.org">
                  <img
                    src={telegram}
                    alt="Telegram Logo"
                    class="h-8 w-auto p-1 border border-black rounded-lg bg-custom-white"
                  />
                </a>
              </div>
              <button class="bg-custom-dark-green mt-6  text-black font-bold py-1 px-6 rounded-2xl">
                
                <Link to="/advertiser">Login</Link>
              </button>
            </div>
            <div class="flex flex-col items-center p-40 bg-custom-thin-yellow rounded-2xl m-4 h-[560px]">
              <h1 class="mb-4 text-3xl font-extrabold">COMMUNITY</h1>
              <p class="text-sm">Signup your New Account</p>

              <input
                type="text"
                placeholder="Email / Phone Number /User Name"
                className="border border-gray-300 rounded-lg m-2 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg m-2 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div class="flex items-center justify-center w-full my-4">
                <hr class="flex-grow  border-black border-1" />
                <span class="px-4 text-black font-bold">OR</span>
                <hr class="flex-grow border-black border-1" />
              </div>
              <p class="text-sm">Login With</p>
              <div class="flex justify-center space-x-12 mt-4">
                {/* <!-- Google Logo --> */}
                <a href="https://www.google.com">
                  <img
                    src={google}
                    alt="Google Logo"
                    class="h-8 w-8 p-1 border border-black rounded-lg bg-custom-white"
                  />
                </a>
                <a href="https://www.apple.com">
                  {/* <!-- Apple Logo --> */}
                  <img
                    src={apple}
                    alt="Apple Logo"
                    class="h-8 w-auto p-1  border border-black rounded-lg bg-custom-white"
                  />
                </a>
                {/* <!-- Twitter Logo --> */}
                <a href="https://twitter.com">
                  <img
                    src={xlogo}
                    alt="Twitter Logo"
                    class="h-8 w-auto p-1  border border-black rounded-lg bg-custom-white"
                  />
                </a>
                {/* <!-- Telegram Logo --> */}
                <a href="https://telegram.org">
                  <img
                    src={telegram}
                    alt="Telegram Logo"
                    class="h-8 w-auto p-1 border border-black rounded-lg bg-custom-white"
                  />
                </a>
              </div>
              <button class="bg-custom-dark-green mt-6 text-black font-bold py-1 px-6 rounded-2xl">
              <Link to="/communitySignUp">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdvertisersAndCommuinity;
