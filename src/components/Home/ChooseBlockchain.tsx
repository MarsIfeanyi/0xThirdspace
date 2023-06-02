import { arrowUp, evm, evm2, flow, flow2 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ChooseBlockchain = (props: Props) => {
  return (
    <>
      <div className=" ">
        <div className="bg-black border-2 border-[#1F1F1F] shadow-2xl w-[50%] mx-auto flex flex-col mt-20 items-center  p-14 ">
          <h2 className="text-white font-bold text-4xl text-center font-nexa">
            Choose the blockchain to power <br /> your Bounty space
          </h2>

          <p
            className="text-[#999999] text-center mt-4 font-nexa
        "
          >
            All interactions on your Bounty space will be only on the specific{" "}
            <br />
            blockchain you choose among the options below
          </p>

          <div className="border-2 border-[#1F1F1F]  rounded-[8px]  w-[500px] h-[65px]  flex  mt-20">
            <Link href="/github-auth" className=" ">
              <button className=" text-white flex p-2 items-center ml-2 gap-4 ">
                <Image src={flow} alt="flowLogo" width={45} />
                <p className="font-normal text-xl font-nexa">
                  Flow Blockchain
                </p>
              </button>
            </Link>
          </div>

          <div className="border-2 border-[#1F1F1F]  rounded-[8px]  w-[500px] h-[65px]  flex mt-5 mb-20">
            <Link href="/github-auth" className=" ">
              <button className=" text-white flex p-2 items-center ml-2 gap-4 ">
                <Image src={evm} alt="flowLogo" width={45} />
                <p className="font-normal text-xl font-nexa">
                  EVM (Ethereum Virtual Machine)
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseBlockchain;
