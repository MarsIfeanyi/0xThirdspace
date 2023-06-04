import { userDetails } from "@/constants";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";

type Props = {};

const MembersCart = (props: Props) => {
  return (
    <div className="bg-[#0A0A0A]  ">
      <div className="flex justify-between flex-row py-3 mx-6 font-nexa font-bold text-xl ">
        <h1 className="">User</h1>
        <h1 className="ml-10">Wallet Address</h1>
        <h1>Status</h1>
      </div>
      {userDetails.map((userDetail) => (
        <div
          key={userDetail.id}
          className=" flex  flex-row justify-between p-4 items-center border-b   border-[#1F1F1F]   "
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

          <button className="  items-center rounded-full flex flex-row bg-[#0F0F0F]   w-[180px]  justify-center gap-2 p-2 font-nexa font-normal">
            <p>{userDetail.walletAddress}</p>
            <p>{userDetail.iconCopy}</p>
          </button>

          <div className="mr-6 ">
            {userDetail.remove && (
              <button className="items-center rounded-full flex flex-row bg-[#B2000029] border border-[#B20000] w-[120%] justify-center gap-1 p-2 font-nexa font-normal  ">
                <p>Remove</p>

                <div className="RemoveIcon-container">
                  <CiCircleRemove />
                </div>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersCart;
