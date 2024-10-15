import React from "react";
import eWallet from "../images/ewallet.png";
import close from "../images/close.png";
import { Link } from "react-router-dom";

const PumpMyBagModal = ({ closeModal }) => {
  return (
    <>
      {/* <!-- Overlay Div with Content and Button --> */}
      <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 z-10">
            <div class="relative flex flex-col justify-center items-center bg-custom-white rounded-2xl p-6">
              {/* Overlay Heading */}
              <a href="#" class="absolute top-4 right-4">
                <Link to="/pumpMyBag">
                  <img
                    src={close}
                    alt="Close"
                    class="relative top-[-120px] right-[-475px] w-[25px] h-[25px]"
                    onClick={closeModal}
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
    </>
  );
};

export default PumpMyBagModal;
