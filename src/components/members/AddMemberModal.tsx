import React from "react";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  children: React.ReactNode;
};

const AddMemberModal = ({ isVisible, onClose, children }: Props) => {
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
