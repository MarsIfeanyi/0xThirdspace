import { profileImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import AvailableBountiesCard from "./AvailableBountiesCard";
import CreateBountyModal from "./SubmitWorkModal";

type Props = {};

const AvailableBounties = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col flex-wrap ml-[300px]   ">
      {/* Image container */}
      <div className="px-10">
        <div className="flex justify-end   ">
          <Link href="/">
            <Image
              src={profileImage}
              alt="profileImage"
              width={50}
              className="rounded-full"
            />
          </Link>
        </div>
        {/* Search and Add Members container */}
        <div className="flex flex-row  justify-between mt-6  items-center ">
          {/* Members */}
          <div className="flex flex-row gap-1 items-center justify-center ">
            <FaMedal className="w-6 h-6" />
            <h2 className="text-white  font-nexa font-extrabold text-3xl ">
              Bounties
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

        {/* AvailableBounties */}
        <div className=" mt-8">
          <Link href="/hunter">
            <AvailableBountiesCard selectedBounty={null} />
          </Link>
        </div>
      </div>

      {/* Create Bounty Modal Overlay*/}
      <div>
        <CreateBountyModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        ></CreateBountyModal>
      </div>
    </div>
  );
};

export default AvailableBounties;
