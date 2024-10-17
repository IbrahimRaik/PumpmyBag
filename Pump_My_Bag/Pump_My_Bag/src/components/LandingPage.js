import { Link } from "react-router-dom";
import pumpMyBag from "../images/PumpMyBag.png";
import flower from "../images/Vector (1).png";
import portrait from "../images/image.jpeg";
import circle from "../images/circle.png";

const LandingPage = () => {
  return (
    <>
      <div class="bg-custom-white p-4">
        {/* <!-- Navbar Section --> */}
        <div class="border-2 border-gray-500 rounded-2xl p-1 ">
          <nav class="p-1">
            <div class="container mx-auto flex justify-between items-center">
              {/* <!-- Left side (Logo Image) --> */}
              <div class="flex items-center">
              <a href="#">
                  <Link to="/">
                    <img src={pumpMyBag} alt="Logo" class="h-5 w-30 mr-3" />
                  </Link>
                </a>
              </div>
              {/* <!-- Right side (Connect Button) --> */}
              <div class="flex items-center font-sf-pro font-bold text-[14px] leading-[30px] tracking-[-0.01em] text-center w-18 h-1">
                <button class="px-8 bg-custom-button-color text-black font-semibold rounded-3xl  transition duration-300">
                  <Link to="/pumpMyBag">PuMp YoUr OwN BaGs</Link>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div class="flex flex-col md:flex-row justify-between p-4">
          <div class="text-black p-6 rounded-lg flex-1 mr-2 md:mr-4">
            <div className="">
              <h1 className="font-oxygen font-bold text-[70px] leading-[65px] tracking-[5%]"
               style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}
               >
                Community LedToken Advertising
              </h1>
            </div>
            <div className="two">
              <p className="mt-5 font-oxygen font-normal  font-bold leading-[26px] text-[17.13px] tracking-[5%]"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                We Revolutionize Token Advertising By Giving Your <br />
                Community The Tools They Need to Promote And <br />
                Elevate Your Project.
              </p>
            </div>
            <div className="three mt-20">
              <div class="flex flex-wrap justify-between">
                <div class="w-1/4 ">
                  <div class="flex items-center">
                    <div class="h-32 mt-12">
                      <p className="font-oxygen text-[8.96px] leading-[14.61px] tracking-[5%] text-center">
                        Access
                      </p>
                      <h1
                        className="font-oxygen font-bold text-[15.26px] leading-[25.61px] tracking-[5%] text-center"
                        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                      >
                        30 Million +
                      </h1>
                      <h1 className="font-oxygen font-light text-[8.96px] leading-[14.61px] text-center tracking-[0.05em]">
                        Web3 enthusiasts
                      </h1>
                    </div>
                    <div class="border-l-2 border-black h-28 mx-auto"></div>
                  </div>
                </div>
                <div class="w-1/4 ">
                  <div class="flex items-center">
                    <div class="h-32 mt-12">
                      <p className="font-oxygen text-[8.96px] leading-[14.61px] tracking-[5%] text-center">
                        Get your ads on
                      </p>
                      <h1
                        className="font-oxygen font-bold text-[15.26px] leading-[25.61px] tracking-[5%] text-center"
                        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                      >
                        12,000 +
                      </h1>
                      <h1 className="font-oxygen font-light text-[8.96px] leading-[14.61px] text-center tracking-[0.05em]">
                        websites & dApps.
                      </h1>
                    </div>
                    <div class="border-l-2 border-black h-28 mx-auto"></div>
                  </div>
                </div>
                <div class="w-1/4 ">
                  <div class="flex items-center">
                    <div class="h-32 mt-12">
                      <p className="font-oxygen text-[8.96px] leading-[14.61px] tracking-[5%] text-center">
                        Exposure with
                      </p>
                      <h1
                        className="font-oxygen font-bold text-[15.26px] leading-[25.61px] tracking-[5%] text-center"
                        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                      >
                        1.2 Billion+
                      </h1>
                      <h1 className="font-oxygen font-light text-[8.96px] leading-[14.61px] text-center tracking-[0.05em]">
                        views
                      </h1>
                    </div>
                    <div class="border-l-2 border-black h-28 mx-auto"></div>
                  </div>
                </div>
                <div class="w-1/4">
                  <div class="flex items-center">
                    <div class="h-32 mt-12">
                      <p className="font-oxygen text-[8.96px] leading-[14.61px] tracking-[5%] text-center">
                        Experience
                      </p>
                      <h1
                        className="font-oxygen font-bold text-[15.26px] leading-[25.61px] tracking-[5%] text-center"
                        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                      >
                        4.8 Million +
                      </h1>
                      <h1 className="font-oxygen font-light text-[8.96px] leading-[14.61px] text-center tracking-[0.05em]">
                        clicks per days.
                      </h1>
                    </div>
                    <div class="border-l-2 border-black h-28 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-white p-1 rounded-lg flex-1 ml-2 md:ml-4">
            <div class="flex flex-col">
              <div class="flex space-x-6 h-[365px]">
                <div class="mt-20 bg-custom-light-gray h-[250px] w-50  flex items-center justify-center rounded-2xl shadow-[20px_20px_15px_rgba(0,0,0,0.75)]  p-4">
                  <div class="flex flex-col  items-end ">
                    <img
                      src={flower}
                      alt="Flower"
                      class="w-15 h-12 object-cover"
                    />

                    <div class="flex flex-col">
                      <h1
                        class="mt-2 font-oxygen font-bold text-[21.28px] leading-[45.61px] tracking-[-0.04em] text-black"
                      >
                        Instant Wallet Integration
                      </h1>
                      <p
                        class="text-black
                        font-oxygen font-light text-[13.73px] leading-[22.71px] tracking-[-0.04em]
                        "
                      >
                        Seamlessly connect your <br />
                        wallet and confirm <br />
                        transactions for lifetime <br />
                        advertising.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-2 h-[290px]  w-60 flex rounded-2xl shadow-2xl shadow-[20px_20px_15px_rgba(0,0,0,0.75)] ">
                  <img
                    src={portrait}
                    alt="Sample Image"
                    // class="h-[85%] shadow-[20px_20px_15px_rgba(0,0,0,0.75)]"
                    class="w-auto rounded-2xl"
                  />
                </div>
              </div>
              <div class="">
                <div class="flex space-x-6">
                  <div class="mt-6   w-[37%] h-[280px] flex items-center justify-center rounded-2xl shadow-2xl shadow-[20px_20px_15px_rgba(0,0,0,0.75)] border-[1px] border-black pl-2 pt-2 pr-6 pb-5">
                    <div class="flex flex-col  items-start space-x-2">
                      <img
                        src={circle}
                        alt="Flower"
                        class="w-15 h-15 object-cover mt-4 ml-2"
                      />

                      <div class="flex flex-col p-1">
                        <h1
                          class="text-lg text-black
                        font-oxygen font-bold text-[21.28px] leading-[45.61px] tracking-[-0.04em]
                        "
                        >
                          Payment Flow
                        </h1>
                        <p
                          class="mt-2  text-sm text-black
                        font-oxygen font-light text-[21.28px] leading-[20.71px] tracking-[-0.04em]
                        "
                        >
                          Smart contract automation ensures a transparent and
                          smooth transaction process, with 50% of payments going
                          directly to buybacks from the LP address.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-custom-light-gray h-[240px] w-[49%] flex items-center justify-center rounded-2xl shadow-[20px_20px_15px_rgba(0,0,0,0.75)]  border-[1px] border-black p-1">
                    <div class="flex flex-col  items-start w-30">
                      <img
                        src={circle}
                        alt="Flower"
                        class="w-15 h-15 object-cover mt-4 ml-1"
                      />

                      <div class="flex flex-col">
                        <h1
                          class="ml-4 mt-4 text-lg text-black
                        font-oxygen font-bold text-[17.73px] leading-[22.5px] tracking-[-0.04em]
                        "
                        >
                          Track your campaign's success with a detailed
                          analytics dashboard:
                        </h1>
                        <p
                          class="ml-5 mt-4  text-sm text-black
                        font-oxygen font-light text-[14.49px] leading-[22.77px] tracking-[-0.04em]
                        "
                        >
                          - View total engagement <br />
                          - Track performance across <br />
                          selected platforms
                          and websites
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
