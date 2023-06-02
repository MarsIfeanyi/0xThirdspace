import { success } from "@/assets";
import Image from "next/image";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  //   children: React.ReactNode;
};

const SuccessPageModal = ({ isVisible, onClose }: Props) => {
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
      <div className="w-[500px] h-[400px] bg-[#0F0F0F] flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-6 right-10   "
            onClick={() => onClose()}
          >
            X
          </button>

          <div className="flex flex-col items-center justify-center mt-14 text-white font-nexa ">
            <Image src={success} alt="success" width={150} />
            <h2 className="font-extrabold text-3xl mt-4  ">Hurray!</h2>
            <p className="font-medium text-lg mt-2 ">
              Bounty space has been created successfully
            </p>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default SuccessPageModal;
