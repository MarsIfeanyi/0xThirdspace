import { success } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  //   children: React.ReactNode;
};

const GetStartedModal = ({ isVisible, onClose }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[800px] h-[600px] bg-black flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-6 right-10   "
            onClick={() => onClose()}
          >
            X
          </button>

          <div className="bg-black  mx-auto flex flex-col mt-10 items-center  p-14 ">
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
                <Link href="/" className=" "></Link>

                <Link href="/available">
                  <button
                    className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2"
                    onClick={() => setShowModal(true)}
                  >
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
                <Link href="/bounty-space" className=" ">
                  <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2  ">
                    Create Bounty Space
                    <BsArrowUpRight className=" w-6 h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
