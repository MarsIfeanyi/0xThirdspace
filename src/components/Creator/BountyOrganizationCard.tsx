import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BountyOrganizationData } from "@/constants";
import BountyDetailModal from "./BountyDetailModal";

type Props = {};

const BountyOrganizationCard = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveLink = () => {
    setIsActive(!isActive);
  };

  console.log({BountyOrganizationData},"BountyOrganizationData")

  return (
    <div className="bg-[#0A0A0A]">
      <div className="flex flex-row py-5 mx-6 font-nexa font-bold text-lg gap-8">
        <Link href="/creator">
          <h2 className={isActive ? "text-[#999999]" : ""}>
            Available Bounties
          </h2>
        </Link>

        <Link href="/creator/bountyorg">
          <h2
            className={isActive ? "" : "text-[#999999]"}
            onClick={toggleActiveLink}
          >
            Bounty Organization
          </h2>
        </Link>
      </div>

      <div className="grid grid-cols-3">
        {BountyOrganizationData.map((bountyOrgData) => (
          <div key={bountyOrgData.id} className="font-nexa p-2">
            <div className="bg-[#141414] p-4 rounded-lg shadow-lg mx-4">
              <div className="my-4 object-cover ">
                <Image
                  src={bountyOrgData.image}
                  alt="bountyOrgImage"
                  width={300}
                />
              </div>

              <h2 className="text-xl">{bountyOrgData.title}</h2>
              <div className="flex flex-row gap-8 mt-3 mb-5 text-sm">
                <p>
                  {bountyOrgData.numMembers}{" "}
                  <span className="text-[#999999]">Members</span>{" "}
                </p>
                <p>
                  {bountyOrgData.numBounties}{" "}
                  <span className="text-[#999999]">Bounties</span>
                </p>
              </div>

              <button className="btnBackgroundGradient w-[248px] h-[32px] items-center justify-center rounded-[8px]">
                Join Space
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BountyOrganizationCard;
