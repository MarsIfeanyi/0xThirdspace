import { ViewAvailableBounties } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import AvailableBountiesCard from "./AvailableBountiesCard";

type Props = {};

const AvailableBounties = (props: Props) => {
  //
  return (
    <div className="overflow-hidden bg-[#0A0A0A] p-2  ">
      <div className="flex flex-row  justify-between p-4  mx-6 ">
        {/* Members */}
        <div className="flex flex-row gap-1 ">
          <h2 className="text-white  font-nexa font-extrabold text-3xl ">
            Available Bounties
          </h2>
        </div>

        {/* Search */}
        <div className="flex  w-1/3  bg-[#0F0F0F] rounded-full items-center  ">
          <button>
            <BiSearch className="w-6 h-6 ml-6" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-full  outline-none  text-white py-2 px-4 bg-[#0F0F0F] rounded-full "
          />
        </div>
      </div>

      <div>
        <AvailableBountiesCard />
      </div>

      {/* <BountyDetailModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        selectedBounty={selectedBounty}
      ></BountyDetailModal> */}
    </div>
  );
};

export default AvailableBounties;
