import { BountyPlatformContext } from "@/context/BountyPlatformContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useContext } from "react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import SuccessPageModal from "./SuccessPageModal";

type Props = {};

const SubmitWorkForm = (props: Props) => {
  const [prLink, setPrLink] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState<boolean>(false);

  // onChange Handler functions
  const prLinkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrLink(e.target.value);
    checkIsValid();
  };

  const walletAddressChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWalletAddress(e.target.value);
    checkIsValid();
  };

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    checkIsValid();
  };

  const checkIsValid = () => {
    if (prLink && walletAddress && description) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setShowSuccessPage(false);

    try {
      const response = await fetch("url", {
        method: "POST",
        body: JSON.stringify({
          prLink,
          walletAddress,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);

      setIsLoading(false);

      setShowSuccessPage(true);

      setPrLink("");
      setWalletAddress("");
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
            <label htmlFor="repoLink">Pull Request Link</label>
            <input
              value={prLink}
              onChange={prLinkChangeHandler}
              type="text"
              name="bounty_Name"
              id="bounty_Name"
              placeholder="Paste PR Link here"
              required
              className="text-white  h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
            />
          </div>

          <div className="flex flex-col space-y-1 ">
            <label htmlFor="repoLink">Wallet Address</label>
            <input
              value={walletAddress}
              onChange={walletAddressChangeHandler}
              type="text"
              name="bounty_Name"
              id="bounty_Name"
              placeholder="Paste wallet address"
              required
              className="text-white  h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
            />
          </div>

          {/*  */}
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={descriptionChangeHandler}
              value={description}
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
            className="font-nexa btnBackgroundGradient rounded-[8px] items-center justify-center flex flex-row gap-2 w-[948px] h-[40px] "
            onClick={() => setShowSuccessPage(true)}
            disabled={!isValid}
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

export default SubmitWorkForm;
