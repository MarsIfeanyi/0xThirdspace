import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JoinedBountyData } from "@/constants";
import BountyDetailModal from "./BountyDetailModal";

type Props = {};

const JoinedBountyCard = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveLink = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-[#0A0A0A]">
      <div className="flex flex-row py-5 mx-6 font-nexa font-bold text-lg gap-8">
        <Link href="/hunter">
          <h2 className={isActive ? "text-[#999999]" : ""}>
            Available Bounties
          </h2>
        </Link>

        <Link href="/hunter/bountyorg">
          <h2
            className={isActive ? "" : "text-[#999999]"}
            onClick={toggleActiveLink}
          >
            Bounty Organization
          </h2>
        </Link>

        <Link href="/hunter/joined">
          <h2 className="text-[#999999]">Joined Bounties</h2>
        </Link>
      </div>

      <div className="grid grid-cols-3">
        {JoinedBountyData.map((joinedBountyData) => (
          <div key={joinedBountyData.id} className="font-nexa p-2">
            <div className="bg-[#141414] p-4 rounded-lg shadow-lg mx-4">
              <div className="my-4 object-cover ">
                <Image
                  src={joinedBountyData.image}
                  alt="bountyOrgImage"
                  width={300}
                />
              </div>

              <h2 className="text-xl">{joinedBountyData.title}</h2>
              <div className="flex flex-row  mt-3 mb-5 text-sm justify-between ">
                <p>{joinedBountyData.submissionStatus}</p>

                {joinedBountyData.inReview && (
                  <p className="text-[#FFBE08]  ">In review</p>
                )}
                {joinedBountyData.approved && (
                  <p className="text-[#13F129] ">Approved</p>
                )}
                {joinedBountyData.declined && (
                  <p className="text-[#B20000] ">Declined</p>
                )}
              </div>

              {joinedBountyData.inReview ? (
                <button className="btnBorderGradient5">
                  Cancel Submission
                </button>
              ) : (
                <button className="btnBorderGradient5">Closed</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinedBountyCard;
