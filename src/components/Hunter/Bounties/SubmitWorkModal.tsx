import React from "react";
import SubmitWorkForm from "./SubmitWorkForm";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  // children: React.ReactNode;
};

const SubmitWorkModal = ({ isVisible, onClose }: Props) => {
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
      <div className="w-[1040px] h-[550px] bg-[#0F0F0F] flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-6 right-10   "
            onClick={() => onClose()}
          >
            X
          </button>

          {/* Content....Children */}
          <div className="flex flex-col items-center justify-center mt-5 ">
            <h2 className="font-nexa text-2xl font-extrabold">Submit Work</h2>
            <p className="text-[#999999] mt-4  text-sm font-nexa">
              Name your bounty and start collaborating with developers to get
              coding tasks completed.
            </p>

            <div className="mt-4">
              <SubmitWorkForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitWorkModal;
