import close from "../images/close.png";
import PumpMyBag from "../images/PumpMyBag.png";
import done from "../images/done icon.png";
import closed from "../images/close.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        {isOpen && (        
        <div className="fixed inset-0 flex items-center justify-center  bg-custom-white bg-opacity-10">
          <div className="bg-custom-white 
           w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 
          p-6 rounded-lg shadow-lg  text-center">
            {/* Done Logo */}
            <div className="w-16 h-16 mx-auto mb-4">
            <img src={done} alt="Logo" class="h-15 w-15 mr-3" />             
            </div>

            {/* Transaction Completed Title */}
            <h2 className="font-sf font-bold text-black text-custom leading-custom font-bold ">TRANSACTION COMPLETED!</h2>

            {/* Congratulatory Message */}
            <p className="font-sf font-bold  text-black text-custom mb-4">
              Congratulations
            </p>

            {/* Close Button */}
            <button
              className="bg-custom-dark-green text-white py-2 px-4 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/">Done</Link>
            </button>
            <div class="text-center">
            <a href="https://adpod.xyz/" class="text-red-500 underline">
              Powered by AdPod.xyz
            </a>
          </div>
          </div>
        </div>
      )}
        {/* <div class="relative flex flex-col items-center p-1 bg-custom-dark-gray rounded-lg mx-auto mt-3">
          <a href="/" class="absolute top-19 right-10">
            <img src={closed} alt="Logo" class="h-5 w-5" />
          </a>
          <img src={done} alt="Logo" class="h-15 w-15 mr-3" />
          <h1 class="font-sfpro font-bold text-custom-xl leading-custom-xl">
            Transaction Completed!
          </h1>
          <p class="font-sfpro font-bold text-custom-lg leading-custom-lg">
            Congratulations
          </p>
        </div> */}
      </div>
    </>
  );
};
export default Success;
