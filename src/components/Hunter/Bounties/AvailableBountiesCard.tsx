import { AvailableBountiesData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BountyDetailModal from "./BountyDetailModal";

type Props = {
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

const AvailableBountiesCard = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState<Bounty | null>(null);

  const handleBountyClick = (selectedBounty: Bounty) => {
    setShowModal(true);
    setSelectedBounty(selectedBounty);
  };

  return (
    <div className="bg-[#0A0A0A]">
      <div className="flex flex-row py-5 mx-6 font-nexa font-bold text-lg gap-8">
        <Link href="/hunter">
          <h2 className="">Available Bounties</h2>
        </Link>

        <Link href="/hunter/bountyorg">
          <h2 className="text-[#999999]">Bounty Organization</h2>
        </Link>

        <Link href="/hunter/joined">
          <h2 className="text-[#999999]">Joined Bounties</h2>
        </Link>
      </div>

      {AvailableBountiesData.map((bountiesData) => (
        <div
          key={bountiesData.id}
          className=""
          onClick={() => handleBountyClick(bountiesData)}
        >
          <div className="border-[#1F1F1F] border flex mt-4 mx-6 relative">
            <div className="flex flex-row gap-4 p-6">
              <Image
                src={bountiesData.image}
                alt="bountyImage"
                width={200}
                className=""
              />

              <div className="flex flex-col mt-3">
                <h2 className="font-nexa font-bold text-xl">
                  {bountiesData.title}
                </h2>
                <div className="flex flex-row justify-between font-nexa text-sm my-2 mr-6">
                  <p>
                    <span className="text-[#999999]">Start Date: </span>
                    {bountiesData.startDate}
                  </p>
                  <p>
                    <span className="text-[#999999]">End Date:</span>
                    {bountiesData.endDate}
                  </p>
                </div>

                <p className="font-nexa text-sm mb-2 text-[#999999]">
                  {bountiesData.description}
                </p>
              </div>

              <div className="flex justify-center w-[150px] h-[40px] bg-[#1F1F1F] items-center absolute bottom-1 right-6">
                <p>{bountiesData.reward}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <BountyDetailModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        selectedBounty={selectedBounty}
      ></BountyDetailModal>
    </div>
  );
};

export default AvailableBountiesCard;
