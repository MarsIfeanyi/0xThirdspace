import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {};

const GetStarted = (props: Props) => {
  return (
    <>
      <div className="bg-black border border-[#5618FF] w-[50%] mx-auto flex flex-col mt-20 items-center  p-14 ">
        <h2 className="text-white font-bold text-4xl text-center font-nexa">
          Get Started
        </h2>

        <p
          className="text-[#999999] text-center mt-4 font-nexa
        "
        >
          Find your next coding challenge or create your own. Our platform
          allows <br /> developers to connect, collaborate, and earn rewards
          through <br />
          completing bounties
        </p>

        <div className="flex flex-col items-center  mt-10">
          {/* View Bounty Container */}
          <div className="btnBackgroundGradient  rounded-[8px] ">
            <Link href="/" className=" ">
              <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2 ">
                View Available Bounties
                <BsArrowUpRight className=" w-6 h-6" />
              </button>
            </Link>
          </div>

          {/* Or Container */}
          <div className="flex w-[489px] justify-between items-center mt-6 ">
            <div className="w-[210px] h-[2px] bg-[#1f1f1f]  "></div>

            <p className="text-[#999999]">Or</p>

            <div className="w-[210px] h-[2px] bg-[#1f1f1f]  "></div>
          </div>

          {/* Create Bounty Space Container */}
          <div className=" btnBorderGradient flex mt-6">
            <Link href="/" className=" ">
              <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2  ">
                Create Bounty Space
                <BsArrowUpRight className=" w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
