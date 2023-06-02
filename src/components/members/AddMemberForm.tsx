import React, { useState } from "react";

type Props = {};

type FormValues = {
  bountyName: string;
};

const AddMemberForm = (props: Props) => {
  const [bountyName, setBountyName] = useState("");

  const setBountyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBountyName(e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBountyName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="flex flex-col w-[489px]  mt-20  ">
        <label htmlFor="bountyName" className="text-[#999999] text-sm">
          Paste github profile address here
        </label>

        <input
          type="text"
          name="bountyName"
          id="bountyName"
          value={bountyName}
          onChange={setBountyHandler}
          className=" outline-none p-2  w-[400px] h-[1.5px] bg-[#05050533] text-white  mt-5 "
        />

        <div className="w-[400px] h-[1.5px] bg-[#1f1f1f] "></div>
      </div>
    </form>
  );
};

export default AddMemberForm;
