import { viewSub } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { creatorViewSubmissionData } from "@/constants";

import { CiCircleRemove } from "react-icons/ci";

import { BsArrowUpRight } from "react-icons/bs";
import SubmissionDetailModal from "./SubmissionDetailModal";

type Props = {};

const ViewSubmission = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col flex-wrap ml-[300px] w-[1022px] h-[750px] ">
      <div className=" mx-4">
        <div className="flex flex-row bg-[#141414] items-center  h-[70px] gap-4  px-4  ">
          <Image src={viewSub} alt="image" width={50} />
          <p className="font-nexa font-bold text-2xl">
            TCP over Wifi for Raspberry Pi Pico W in TinyGo
          </p>
        </div>

        {/*  */}

        <div className="bg-[#0A0A0A] mt-6 ">
          {creatorViewSubmissionData.map((viewSubmissionData) => (
            <div
              key={viewSubmissionData.id}
              className=" flex  flex-row justify-between  p-4  border-b   border-[#1F1F1F]   "
            >
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={viewSubmissionData.image}
                  alt="userImage"
                  width={60}
                  className="rounded-full"
                />

                <div className="flex flex-col font-nexa font-normal ">
                  <h2>{viewSubmissionData.name}</h2>
                  <p>{viewSubmissionData.socialHandle}</p>
                </div>
              </div>

              <div className="">
                <h2 className="font-bold text-xl">
                  {viewSubmissionData.title}
                </h2>
                <p className="w-[576px] text-[#999999] font-bold ">
                  {viewSubmissionData.description}
                </p>
              </div>

              <div className="mr-6 ">
                {viewSubmissionData.seeMore && (
                  <button
                    className="items-center rounded-full flex flex-row bg-[#141414] border  w-[120%] justify-center gap-1 p-2 font-nexa font-normal"
                    onClick={() => setShowModal(true)}
                  >
                    <p>See More</p>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SubmissionDetail Modal Overlay */}

      <div>
        <SubmissionDetailModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        ></SubmissionDetailModal>
      </div>
    </div>
  );
};

export default ViewSubmission;
