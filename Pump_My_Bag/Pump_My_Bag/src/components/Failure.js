import close from '../images/close.png';
import PumpMyBag from "../images/PumpMyBag.png";
import remove from '../images/remove.png';
import closed from "../images/close.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Failure = () => {
  const [isFailOpen, setIsFailOpen] = useState(true);
    return(<>
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
        {isFailOpen && (        
        <div className="fixed inset-0 flex items-center justify-center  bg-custom-white bg-opacity-10">
          <div className="bg-custom-white 
           w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 
          p-6 rounded-lg shadow-lg  text-center">
           
            <a href="#" class="absolute top-19 right-10">
              <Link to="/token">
                <img
                  src={closed}
                  alt="Logo"
                  class="h-5 w-5 cursor-pointer"
                  onClick={() => setIsFailOpen(false)}
                />
                </Link>
                </a>
            {/* <a href="#" class="absolute top-19 right-10">
              <img src={closed} alt="Logo" class="h-5 w-5" />
            </a> */}
            <div className="w-40 h-20 mx-auto mb-20">
            <img src={remove} alt="Logo" class="h-15 w-30 mr-3" />             
            </div>

            {/* Transaction Completed Title */}
            {/* <h2 className="font-sf font-bold text-black text-custom leading-custom font-bold ">TRANSACTION FAILED!</h2> */}

            {/* Congratulatory Message */}
            <p className="font-malgun text-[#FF0505] font-bold text-[20px] leading-[57.28px] mt-10  mb-4">
              Try Again!
            </p>

            {/* Close Button */}
            <button
              className="bg-custom-button-color text-black py-1 px-2 rounded-lg
              font-sf-pro font-normal text-[18.68px] tracking-tight-custom text-center
              "
              onClick={() => setIsFailOpen(false)}
            >
              <Link to="/addsToPump">Back To Home</Link>
            </button>
            <div class="text-center  mt-20">
            <a href="https://adpod.xyz/" class="text-red-500 underline ">
              Powered by AdPod.xyz
            </a>
          </div>
          </div>
        </div>
      )}
        {/* <div class="relative flex flex-col items-center p-1 bg-custom-thin-yellow rounded-lg m-1">
        <a href="#" class="absolute top-19 right-10">
              <img src={closed} alt="Logo" class="h-5 w-5" />
            </a>
        <img src={remove} alt="Logo" class="h-15 w-15 mr-3" />
        <h1 class="font-sfpro font-bold text-custom-xl leading-custom-xl">Transaction Failed!</h1>
          <p class="font-sfpro font-bold text-custom-lg leading-custom-lg">
           Try Again
          </p>
        </div> */}
        </div>
    </>);

}
export default Failure;