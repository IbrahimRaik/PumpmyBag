import PumpMyBag from "../images/PumpMyBag.png";
import rectangle from "../images/rectangle.jpg";
import close from "../images/close.png";

const PumpOwnBags = () => {
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
        <div class="relative bg-custom-light-green flex flex-col items-center space-y-4 p-6 rounded-2xl mt-6 justify-center h-screen">
          <div class="absolute inset-0 bg-gray-500 bg-opacity-50 blur">
            {/* <!-- Heading --> */}
            <h1 class="relative font-sfpro text-2xl font-bold text-black leading-[63.08px] tracking-[5%] text-center ">
              COMMUNITY-LED TOKEN ADVERTISING
            </h1>

            {/* <!-- Paragraph --> */}
            <p class=" relative font-inter font-medium text-[18px] leading-[23px] text-center ">
              Put that marketing budget to good use! Get your Token in front of
              30Million+ <br />
              Web3 People through Placing your Ads on 12,000+ Websites and Apps
            </p>

            {/* <!-- Image --> */}
            <img
              src={rectangle}
              alt="Placeholder Image"
              class="relative
              object-cover 
            w-[811px] h-[365px] top-[60.31px] left-[250px] rounded-[37.12px]"
            />

            {/* <!-- Button --> */}
            <button
              class="relative bg-custom-red text-white font-bold py-2 px-4 
          font-inter font-normal text-[22.08px] leading-[26.09px] text-center
           w-[235px] h-[68.65px] top-[70.31px] left-[548px] rounded-[52.81px] border-[1.32px]  border-black
          blur"
            >
              Order Now - <br />
              399$/Lifetime
            </button>
          </div>
          {/* <!-- Overlay Div with Content and Button --> */}
          <div class="relative  inset-0 flex flex-col justify-center items-center bg-custom-yellow  z-10 p-6 rounded-2xl">
          <a href="#" class="absolute top-4 right-4 ">
              <img src={close} alt="Logo" class="h-5 w-5" />
            </a>
            {/* <!-- Overlay Heading --> */}
            <h1 class="font-inter text-3xl text-black font-bold mb-4 text-center mt-5">
              PuMp YoUr OwN BaGs!
            </h1>

            {/* <!-- Overlay Button --> */}
            <button class="bg-custom-dark-green  text-black font-bold py-3 px-6 rounded-full">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PumpOwnBags;
