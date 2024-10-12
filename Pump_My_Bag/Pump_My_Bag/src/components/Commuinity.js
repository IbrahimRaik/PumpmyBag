import React from "react";
import PumpMyBag from "../images/PumpMyBag.png";

const Community = () => {
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
            </div>
          </div>
        </nav>
        <hr class="border-black border-1" />
        <div class="flex flex-col items-center p-16 bg-custom-thin-yellow rounded-lg m-24">
          <h1 class="mb-4 text-lg">
            Empower Your Community <br />
            to Boost your Project!
           </h1>
          <button class="bg-custom-light-green  text-black font-bold py-2 px-4 rounded">
           Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Community;
