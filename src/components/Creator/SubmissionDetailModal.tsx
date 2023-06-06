import React from "react";
import CreateBountyForm from "./CreateBountyForm";
import SubmissionDetailCard from "./SubmissionDetailCard";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  // children: React.ReactNode;
};

const SubmissionDetailModal = ({ isVisible, onClose }: Props) => {
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
      <div className="w-[666px] h-[432px] bg-[#0F0F0F] flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-4 right-6   "
            onClick={() => onClose()}
          >
            <MdOutlineCancel className="w-6 h-6" />
          </button>

          {/* Content....Children */}

          <div className=" mt-12 mx-8 mb-10">
            <SubmissionDetailCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetailModal;
