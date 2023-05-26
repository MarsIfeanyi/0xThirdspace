import { user01, user02, user03, user04, user05 } from "@/assets";
import Image from "next/image";
import { RiFileCopyLine } from "react-icons/ri";
import { CiCircleRemove } from "react-icons/ci";

type Props = {};

// render copy file icon
// const copyWalletAddress = () => {
//   return <RiFileCopyLine className="w-6 h-6" />;
// };

const MembersCart = (props: Props) => {
  const userDetails = [
    {
      id: "1",
      image: user01,
      name: "Frank Williams",
      socialHandle: "@Qubigs",
      walletAddress: "Wj3b4....Hu73f7",
      iconCopy: <RiFileCopyLine />,
      remove: true,
    },

    {
      id: "2",
      image: user02,
      name: "Frank Williams",
      socialHandle: "@Qubigs",
      walletAddress: "Wj3b4....Hu73f7",
      iconCopy: <RiFileCopyLine />,
      remove: true,
    },

    {
      id: "3",
      image: user03,
      name: "Frank Williams",
      socialHandle: "@Qubigs",
      walletAddress: "Wj3b4....Hu73f7",
      iconCopy: <RiFileCopyLine />,
      remove: true,
    },

    {
      id: "4",
      image: user04,
      name: "Frank Williams",
      socialHandle: "@Qubigs",
      walletAddress: "Wj3b4....Hu73f7",
      iconCopy: <RiFileCopyLine />,
      remove: true,
    },

    {
      id: "5",
      image: user05,
      name: "Frank Williams",
      socialHandle: "@Qubigs",
      walletAddress: "Wj3b4....Hu73f7",
      iconCopy: <RiFileCopyLine />,
      remove: true,
    },
  ];

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
          className=" flex  flex-row justify-between p-4 items-center "
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

                <div className="icon-container">
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
