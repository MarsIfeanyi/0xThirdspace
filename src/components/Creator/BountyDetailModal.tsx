import { BountyDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  selectedBounty: Bounty | null;
};

type Bounty = {
  id: string;
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  reward: string;
};

const BountyDetailModal = ({ isVisible, onClose, selectedBounty }: Props) => {
  if (!isVisible || !selectedBounty) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" w-[1200px] h-[600px] bg-[#0F0F0F] flex flex-col relative">
        <div className="p-2 rounded shadow-2xl ">
          <button
            className="text-white text-2xl absolute top-2 right-6"
            onClick={onClose}
          >
            X
          </button>

          <div className="flex flex-row mt-10 font-nexa gap-4 mx-4  p-4   ">
            <div className="flex flex-col  ">
              <div className="flex flex-row gap-4 ">
                <Image
                  src={selectedBounty.image}
                  alt="bountyImage"
                  width={208}
                  className=""
                />

                <div className="flex flex-col mt-3">
                  <h2 className="font-nexa font-bold text-xl">
                    {selectedBounty.title}
                  </h2>
                  <div className="flex flex-row justify-between font-nexa text-sm my-2 mr-6">
                    <p>
                      <span className="text-[#999999]">Start Date: </span>
                      {selectedBounty.startDate}
                    </p>
                    <p>
                      <span className="text-[#999999]">End Date:</span>
                      {selectedBounty.endDate}
                    </p>
                  </div>
                  <h2 className="font-bold text-lg">Scope</h2>

                  <p className="font-nexa text-sm mb-2 text-[#999999]  ">
                    {selectedBounty.description}
                  </p>
                </div>
              </div>

              {/*  */}
              {BountyDetails.map((bountyDetail) => (
                <div key={bountyDetail.id}>
                  <div className="flex flex-col space-y-2 ">
                    <h2 className="font-bold text-lg">Background</h2>

                    <p className=" font-nexa text-sm  text-[#999999] ">
                      {bountyDetail.background}
                    </p>

                    <h2 className="font-bold text-lg">Requirement</h2>
                    <p className="font-nexa text-sm mb-10 text-[#999999] ">
                      {" "}
                      {bountyDetail.requirement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/*  */}
            <div className="border-[#1F1F1F]   border p-3  flex flex-col  h-[310px] mt-5 ">
              <div className="bg-[#1F1F1F] w-[220px] h-[65px] items-center justify-center flex flex-col rounded-[8px]">
                <p className="">Bounty Reward</p>
                <p className="text-xl">$50,000</p>
              </div>

              <p className="mt-8 mb-4 text-center justify-center text-[#999999]  text-xs ">
                You are a developer and you <br /> are pretty sure you can solve{" "}
                <br />
                this issue?
              </p>

              <div className="space-y-6">
                <button className="btnBorderGradient4 items-center justify-center font-nexa gap-2">
                  <p className="">Edit Bounty</p>
                  <BsArrowUpRight className=" w-6 h-6 " />
                </button>

                <Link
                  href="/creator/view-submission"
                  className="font-nexa btnBackgroundGradient rounded-[8px] w-[220px] h-[50px] items-center justify-center flex flex-row gap-2"
                >
                  <p className="">View Submission</p>
                  <BsArrowUpRight className=" w-6 h-6 " />
                </Link>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyDetailModal;
