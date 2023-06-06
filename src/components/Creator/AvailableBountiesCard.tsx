import { AvailableBountiesData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BountyDetailModal from "./BountyDetailModal";

import DummyImage from "../../assets/avb05.svg";

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
  const [availableBounties, setAvailableBounties] = useState<any>();

  const handleBountyClick = (selectedBounty: Bounty) => {
    setShowModal(true);
    setSelectedBounty(selectedBounty);
  };

  useEffect(() => {
    const Fetch = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/Bounty/getBounty`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );

        if (!res.ok) {
          throw new Error();
        }

        const result = await res.json();
        console.log({ result }, "result");
        setAvailableBounties(result);
        console.log({ availableBounties }, "availableBounties");
      } catch (error) {
        console.log(error, "error fetch");
      }
    };

    Fetch();
  }, []);

  return (
    <div className="bg-[#0A0A0A]">
      <div className="flex flex-row py-5 mx-6 font-nexa font-bold text-lg gap-8">
        <Link href="/creator">
          <h2 className="">Available Bounties</h2>
        </Link>

        <Link href="/creator/bountyorg">
          <h2 className="text-[#999999]">Bounty Organization</h2>
        </Link>
      </div>

      {availableBounties &&
        availableBounties?.map((bountiesData: any) => (
          <div
            key={bountiesData.id}
            className=""
            onClick={() => handleBountyClick(bountiesData)}
          >
            <div className="border-[#1F1F1F] border flex mt-4 mx-6 relative">
              <div className="flex flex-row gap-4 p-6 w-full">
                <Image
                  src={bountiesData.image ? "" : DummyImage}
                  alt="bountyImage"
                  width={200}
                  className=""
                />

                <div className="flex flex-col mt-3 w-full">
                  <h2 className="font-nexa font-bold text-xl">
                    {bountiesData.name}
                  </h2>
                  <div className="flex flex-row justify-between font-nexa text-sm my-2 mr-6">
                    <p>
                      <span className="text-[#999999]">Start Date: </span>
                      {new Date(bountiesData.submission_start).toDateString()}
                    </p>
                    <p>
                      <span className="text-[#999999]">End Date: </span>
                      {new Date(bountiesData.submission_end).toDateString()}
                    </p>
                  </div>

                  <p className="font-nexa text-sm mb-2 text-[#999999]">
                    {bountiesData.desc}
                  </p>
                </div>

                <div className="flex justify-center w-[150px] h-[40px] bg-[#1F1F1F] items-center absolute bottom-1 right-6">
                  <p>{bountiesData.reward}</p>
                  <span className="text-sm  text-center px-3">matic</span>
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
