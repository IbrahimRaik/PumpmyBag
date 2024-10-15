import PumpMyBag from "../images/PumpMyBag.png";
import rectangle from "../images/rectangle.jpg";
import { Link } from "react-router-dom";

const CommunityLEDToken = () => {
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        <div class="border-2 border-gray-500 rounded-2xl p-1">
          <nav class="p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
                <a href="#">
                  <img src={PumpMyBag} alt="Logo" class="h-5 w-30 mr-3" />
                </a>
                {/* <span class="text-white text-2xl font-bold">MyLogo</span>  */}
              </div>
              {/* <!-- Right side (Connect Button) --> */}
              {/* <div class="font-sf-pro font-bold text-2xl leading-[30px] tracking-[-0.02em] text-center">
                <button class="px-10 py-1 bg-custom-gray text-white font-semibold rounded-3xl  transition duration-300">
                  <Link to="/pumpMyBag">Connect</Link>
                </button>
              </div> */}
            </div>
          </nav>
        </div>
        <div class="bg-custom-dark-gray flex flex-col items-center space-y-4 p-6 rounded-2xl mt-6">
          {/* <!-- Heading --> */}
          {/* <h1 class="font-sfpro text-2xl font-bold text-white leading-[63.08px] tracking-[5%] text-center">COMMUNITY-LED TOKEN ADVERTISING</h1> */}

          {/* <!-- Paragraph --> */}
          <p class="font-inter font-medium text-white text-[18px] leading-[27px] text-center">
            Put that marketing budget to good use! Get your Token in front of{" "}
            <span class="font-inter font-bold text-[24px] leading-[27px] text-center">
              30Million+
            </span>{" "}
            Web3 People <br />
            through Placing your Ads on{" "}
            <span class="font-inter font-bold text-[24px] leading-[27px] text-center">
              12,000+{" "}
            </span>
            Websites and Apps
          </p>
          {/* https://www.youtube.com/watch?v=J8wq5wsaV_A */}
          <div class="w-full max-w-2xl mx-auto mt-10 ml-[147.57px]">
            <div class="aspect-w-16 aspect-h-9 ">
              <iframe
                class=" 
            w-[1002.17px] h-[343.08px]  rounded-[37.12px] object-cover"
                src="https://www.youtube.com/embed/J8wq5wsaV_A?autoplay=1&rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* <!-- Image --> */}
          {/* <img
            src={rectangle}
            alt="Placeholder Image"
            class="object-cover 
            w-[1002.17px] h-[343.08px] top-[318.04px] left-[147.57px] rounded-[37.12px] "
          /> */}

          {/* <!-- Button --> */}
          <button
            class="bg-custom-red text-white font-bold py-2 px-4 
          font-inter font-normal text-[24.08px] leading-[30.09px] text-center
           w-[255px] h-[68.65px]  rounded-[52.81px] border-[1.28px]  border-black
          "
          >
            <Link to="/token">
              {" "}
              Order Now - 399$/
              <br />
              Lifetime
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default CommunityLEDToken;
