import React from "react";
import { creatorSubmissionData } from "@/constants";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { RiFileCopyLine } from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

type Props = {};

const SubmissionDetailCard = (props: Props) => {
  return (
    <div>
      {creatorSubmissionData.map((submissionData) => (
        <div key={submissionData.id}>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-4 items-center justify-center">
                <Image
                  src={submissionData.image}
                  alt="user-image"
                  width={60}
                  className="rounded-full"
                />

                <div className="flex flex-col font-nexa ">
                  <h3 className="font-bold text-lg"> {submissionData.name}</h3>
                  <p>{submissionData.socialHandle}</p>
                </div>
              </div>

              <div>
                <button className="flex flex-row gap-2  w-[175px] h-[40px] items-center justify-center bg-[#141414] rounded-full ">
                  <p>{submissionData.walletAddress}</p>
                  <RiFileCopyLine className="w-6 h-6" />
                </button>
              </div>

              <div>
                <button className="flex flex-row w-[134px] h-[40px] items-center justify-center bg-[#141414] rounded-full font-nexa">
                  <BsLink45Deg className="w-6 h-6" />
                  <p
                    className="font-bold text-lg
                  "
                  >
                    {submissionData.repoLink}
                  </p>
                </button>
              </div>
            </div>

            {/* Submission Description */}
            <div className="flex flex-col mt-8 font-nexa">
              <h3 className="font-bold text-lg">{submissionData.title}</h3>
              <p className="text-[#999999] ">{submissionData.description}</p>
            </div>

            {/* Reject Accept */}
            <div className="flex justify-between items-center mt-10 ">
              {submissionData.reject && (
                <button className="flex flex-row items-center justify-center gap-2 rounded-full w-[173px] h-[48px] bg-[#B2000029] border border-[#B20000] ">
                  Reject{" "}
                  <span>
                    <MdOutlineCancel className="w-6 h-6" />
                  </span>
                </button>
              )}

              {submissionData.accept && (
                <button className="flex flex-row items-center justify-center gap-2 rounded-full w-[173px] h-[48px] bg-[#13F12929] border border-[#13F129] ">
                  Accept{" "}
                  <span>
                    <IoCheckmark className="w-6 h-6" />
                  </span>{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmissionDetailCard;
