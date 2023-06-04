import { hunterUserDetails } from "@/constants";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";

type Props = {};

const MembersCart = (props: Props) => {
  return (
    <div className="bg-[#0A0A0A]  ">
      <div className="flex justify-between flex-row py-3 mx-6 font-nexa font-bold text-xl ">
        <h1 className="">User</h1>
        <h1 className="ml-10">Wallet Address</h1>
      </div>
      {hunterUserDetails.map((userDetail) => (
        <div
          key={userDetail.id}
          className=" flex  flex-row justify-between p-4 items-center   border-b border-[#1F1F1F]  "
        >
          <div className="flex flex-row items-center gap-2">
            <Image
              src={userDetail.image}
              alt="userImage"
              width={60}
              className="rounded-full"
            />

            <div className="flex flex-col font-nexa font-normal ">
              <h2>{userDetail.name}</h2>
              <p>{userDetail.socialHandle}</p>
            </div>
          </div>

          <button className="  items-center rounded-full flex flex-row bg-[#0F0F0F]   w-[400px]  justify-center gap-2 p-2 font-nexa font-normal">
            <p>{userDetail.walletAddress}</p>
            <p>{userDetail.iconCopy}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MembersCart;
