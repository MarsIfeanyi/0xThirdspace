import React from "react";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  children: React.ReactNode;
};

const Modal = ({ isVisible, onClose, children }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-50 backdrop-blur-lg  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[700px] flex flex-col relative ">
        <button
          className="text-white text-2xl absolute top-6 right-10   "
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-[#0F0F0F] p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
