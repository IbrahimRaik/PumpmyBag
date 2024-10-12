import PumpMyBag from "../images/PumpMyBag.png";
import apple from "../images/apple_new.png";
import telegram from "../images/telegram.png";
import google from "../images/google.png";
import xlogo from "../images/x logo.png";
import close from "../images/close.png";

const Advertiser = () => {
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

        <div className="container mx-auto w-80">
          <div class="relative flex flex-col items-center p-10 bg-custom-light-green rounded-2xl m-2 h-[460px]">
            <a href="#" class="absolute top-4 right-4">
              <img src={close} alt="Logo" class="h-5 w-5" />
            </a>
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

            <div class="flex items-center justify-center my-2">
              <hr class="flex-grow  border-black border-1" />
              <span class="px-4 text-black font-bold">OR</span>
              <hr class="flex-grow border-black border-1" />
            </div>
            <p class="text-sm">Login With</p>
            <div class="flex justify-center space-x-8 mt-4">
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
            <button class="bg-custom-thin-yellow mt-6 text-black font-bold py-1 px-6 rounded-2xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Advertiser;
