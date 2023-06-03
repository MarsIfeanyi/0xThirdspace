import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import CreateBountySpaceForm from "./CreateBountySpaceForm";

type Props = {};

const CreateBountySpace = (props: Props) => {
  return (
    <>
      <div className="bg-black w-[1000px] mx-auto flex flex-col mt-10 items-center  p-14 ">
        <h2 className="text-white font-bold text-4xl text-center font-nexa">
          Create Bounty Space Name
        </h2>

        <p
          className="text-[#999999] text-center mt-4 font-nexa
        "
        >
          Name your bounty and start collaborating with developers to get coding
          tasks <br /> completed. Our platform ensures transparent payment
          processing through <br /> smart contracts
        </p>

        <CreateBountySpaceForm />

        <div className="btnBackgroundGradient  rounded-[8px] mt-20 mb-10 ">
          <Link href="/creator" className=" ">
            <button className=" text-white w-[489px] h-[56px] flex justify-center items-center gap-2 ">
              Proceed to dashboard
              <BsArrowUpRight className=" w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateBountySpace;
