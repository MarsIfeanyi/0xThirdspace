import { BountyPlatformContext } from "@/context/BountyPlatformContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useContext } from "react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ConnectWallet from "../Home/ConnectWallet";
import ConnectWalletModal from "./ConnectWalletModal";
import SuccessPageModal from "./SuccessPageModal";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { spawn } from "child_process";

// import {Input} from "@chakra-ui/react"

type Props = {};

const CreateBountyForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState<boolean>(false);

  // onChange Handler functions
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const repoLinkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoLink(e.target.value);
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const startDateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
  };

  const endDateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));
  };

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);


    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Bounty/create`,
        {
          method: "POST",
          body: JSON.stringify({
            name: title,
            repo_link: repoLink,
            reward: amount,
            submission_start: startDate,
            submission_end: endDate,
            desc: description,
            bounty_space_id: "1",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      setIsLoading(false);

      setShowSuccessPage(true);
      setTitle("");
      setRepoLink("");
      setAmount("");
      setStartDate("");
      setEndDate("");
      setDescription("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="space-y-6">
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="repoLink">Title</label>
            <input
              defaultValue={title}
              onChange={titleChangeHandler}
              type="text"
              name="bounty_Name"
              id="bounty_Name"
              placeholder="Type bounty  name here"
              required
              className="text-white  h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-14">
            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="bounty_Name">Repo Link</label>
              <input
                onChange={repoLinkChangeHandler}
                defaultValue={repoLink}              
                type="text"
                name="repoLink"
                id="repoLink"
                placeholder="Paste repo link here"
                required
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
            </div>

            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="amount" className="text-white">
                Amount
              </label>
              <input
                onChange={amountChangeHandler}
                defaultValue={amount}
                type="number"
                name="amount"
                id="amount"
                placeholder="Bounty amount in token"
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
            </div>
          </div>

          {/* Start and End Date */}

          <div className="flex flex-col md:flex-row justify-between gap-14">
            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="startDate">Start Date</label>
              <input
                onChange={startDateChangeHandler}
                defaultValue={startDate??""}
                type="date"
                name="startDate"
                id="startDate"
                placeholder="DD/MM/YYYY"
                required
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 placeholder:text-[#999999]  "
              />
            </div>

            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="endDate" className="text-white">
                End Date
              </label>
              <input
                onChange={endDateChangeHandler}
                defaultValue={endDate}
                type="date"
                name="endDate"
                id="endDate"
                placeholder="Bounty amount in token"
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
              {/* <Input></Input> */}
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={descriptionChangeHandler}
              defaultValue={description}
              name="description"
              id="description"
              cols={30}
              rows={10}
              placeholder="Detail About the Bounty "
              className="text-white  h-[100px] bg-transparent border border-[#999999]  outline-none p-4 "
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-nexa btnBackgroundGradient rounded-[8px] items-center justify-center flex flex-row gap-2 w-[948px] h-[48px] "
            onClick={() => setShowSuccessPage(true)}
          >
            <p className="">Confirm</p>
            <BsArrowUpRight className=" w-6 h-6 " />
          </button>
        </div>
      </form>

      {/* Success Page Modal */}

      {isLoading ? (
        <span>Loading....</span>
      ) : (
        <div>
          {showSuccessPage && (
            <SuccessPageModal
              isVisible={showSuccessPage}
              onClose={() => setShowSuccessPage(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CreateBountyForm;
