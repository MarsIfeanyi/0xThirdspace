import { phanthom, metaMask, ethereum } from "@/assets";
import { BountyPlatformContext } from "@/context/BountyPlatformContext";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  // children: React.ReactNode;
  // onConnect: boolean;
};

const ConnectWalletModal = ({ isVisible, onClose }: Props) => {
  const { connectWallet, currentAccount } = useContext(BountyPlatformContext);

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[700px] h-[550px] bg-[#0F0F0F] flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-6 right-10   "
            onClick={() => onClose()}
          >
            X
          </button>

          <div className="bg-[#0F0F0F] w-[633px] h-[483px] mx-auto flex flex-col  items-center  p-14 ">
            <h2 className="text-white font-bold text-4xl text-center font-nexa">
              Connect wallet
            </h2>

            <p
              className="text-[#999999] text-center mt-4 font-nexa
        "
            >
              Connect your wallet to our platform and easily receive rewards for{" "}
              <br />
              completing coding tasks. Our platform ensures transparent payment{" "}
              <br />
              processing through smart contracts
            </p>

            <div className="border-2 border-[#1F1F1F]  rounded-[8px]  w-[500px] h-[65px]  flex  mt-10">
              <button className=" text-white flex p-2 items-center ml-2 gap-4 ">
                <Image src={phanthom} alt="flowLogo" width={45} />
                <p className="font-normal text-xl font-nexa">Phantom</p>
              </button>
            </div>

            {currentAccount && (
              <div className="border-2 border-[#1F1F1F]  rounded-[8px]  w-[500px] h-[65px]  flex  mt-5">
                <button
                  className=" text-white flex p-2 items-center ml-2 gap-4 "
                  onClick={connectWallet}
                >
                  <Image src={metaMask} alt="flowLogo" width={45} />
                  <p className="font-normal text-xl font-nexa">MetaMask</p>
                </button>
              </div>
            )}

            <div className="border-2 border-[#1F1F1F]  rounded-[8px]  w-[500px] h-[65px]  flex  mt-5 mb-20">
              <button className=" text-white flex p-2 items-center ml-2 gap-4 ">
                <Image src={ethereum} alt="flowLogo" width={45} />
                <p className="font-normal text-xl font-nexa">Ethereum wallet</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
