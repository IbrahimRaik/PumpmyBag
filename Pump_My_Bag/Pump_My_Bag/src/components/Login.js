import React from "react";
import PumpMyBag from "../images/PumpMyBag.png";
import apple from '../images/apple_new.png';
import google from '../images/google.png';

const Login = () => {
  return (
    <>
      <div class="bg-custom-orange p-4">
        {/* <!-- Navbar Section --> */}
        <nav class=" p-4">
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
        <hr class="border-black border-1" />
        <div class="flex flex-col items-center p-16 bg-custom-thin-yellow rounded-lg m-24">
          <h1 class="mb-4 text-lg">Hey There!</h1>
          <p class="">Login to your Account</p>

          <input
            type="text"
            placeholder="Email / Phone Number"
            className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg mt-7 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div class="flex items-center justify-center my-4">
            <hr class="flex-grow  border-black border-1" />
            <span class="px-4 text-black font-bold">OR</span>
            <hr class="flex-grow border-black border-1" />
          </div>
           <a href="#">
                <img src={apple} alt="Logo" class="h-10 w-30 mr-3 mt-2" />
              </a>
              <a href="#">
                <img src={google} alt="Logo" class="h-10 w-30 mr-3 mt-2" />
              </a>
 
              <div class="flex flex-wrap">
              <button class="bg-custom-light-green -600 text-black font-bold py-2 px-4 rounded">
           SignUp
          </button>
          <button class="bg-custom-light-green  text-black font-bold py-2 px-4 rounded">
           Login
          </button>
          </div>

        </div>
      </div>
    </>
  );
};
export default Login;
