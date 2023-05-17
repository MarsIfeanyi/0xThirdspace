import Image from "next/image";
import Link from "next/link";
import React from "react";

import Arrow from "../../assets/arrow.svg";

const index = () => {
  return (
    <>
      <div className="bg-black w-full h-full min-h-screen">
        <Logo />
        <span className="absolute radical-1 overflow-hidden "></span>

        {/*title*/}
        <div className="max-w-8xl my-20 mx-auto flex flex-col justify-center min-h-[30vh] items-center bg-transparent z-10">
          <p className="absolute max-w-6xl   text-3xl sm:text-4xl lg:text-6xl 2xl:text-9xl font-bold  text-center text-white my-auto">
            Earn Rewards for Your Skills
          </p>
          <p className="relative top-40 text-center  max-w-4xl text-white ">
            Connect your GitHub account, join bounties, and earn rewards for
            your coding skills. Our smart contracts ensure fair payouts and easy
            payment processing{" "}
          </p>
        </div>

        {/* buttons */}
        <div className="flex  justify-center items-center mx-auto py-10 max-w-4xl ">
          <div className="flex justify-evenly items-center border border-lg-2 cursor-pointer rounded-full px-6 py-4  mx-4 text-white ">
            <p>Sign In</p>
            <div className="relative flex items-center w-6 h-6 bg-lg-2  rounded-full ml-4  ">
              <Image
                src={Arrow}
                alt="arrow"
                className="w-fit h-fit bg-lg-2 p-1 m-auto rounded-full"
              />
            </div>
          </div>

          <div className="flex justify-evenly items-center bg-lg-2 cursor-pointer rounded-full px-6 py-4  mx-4 text-white ">
            <p>Sign Up</p>
            <div className="relative flex items-center w-6 h-6 bg-black  rounded-full ml-4  ">
              <Image
                src={Arrow}
                alt="arrow"
                className="w-fit h-fit bg-black p-1 m-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <span className="relative overflow-hidden   radical-2 z-10"></span>
    </>
  );
};

export const Logo = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <Link href="/">
        <p className="text-4xl  text-white">
          {/* cool trick for linear gradient on text */}
          Third
          <span className="bg-lg-2 text-transparent bg-clip-text">space</span>
        </p>
      </Link>
    </div>
  );
};

export default index;
