import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ConnectWalletModal from "./ConnectWalletModal";

type Props = {};

const CreateBountyForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [repoLink, setRepoLink] = useState("");
  const [description, setDescription] = useState("");

  const [showModal, setShowModal] = useState<boolean>(false);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const repoLinkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoLink(e.target.value);
  };

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("url", {
        method: "POST",
        body: JSON.stringify({ title, amount, repoLink, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      setTitle("");
      setAmount("");
      setRepoLink("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-14">
            <div className="font-nexa flex flex-col space-y-1">
              <label htmlFor="bounty_Name">Title</label>
              <input
                value={title}
                onChange={titleChangeHandler}
                type="text"
                name="bounty_Name"
                id="bounty_Name"
                placeholder="Type bounty  name here"
                required
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
            </div>

            <div className="font-nexa flex flex-col space-y-1">
              <label
                htmlFor="amount"
                className="text-white
        "
              >
                Amount
              </label>
              <input
                onChange={amountChangeHandler}
                value={amount}
                type="number"
                name="amount"
                id="amount"
                placeholder="Bounty amount in token"
                className="text-white w-[435px] h-[33px] bg-transparent border border-[#999999]  outline-none p-4 "
              />
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col space-y-1 ">
            <label htmlFor="repoLink">Repo Link</label>
            <input
              onChange={repoLinkChangeHandler}
              value={repoLink}
              type="text"
              name="repoLink"
              id="repoLink"
              placeholder="Paste repo link here"
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
              placeholder="Token amount"
              className="text-white  h-[150px] bg-transparent border border-[#999999]  outline-none p-4 "
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-nexa btnBackgroundGradient rounded-[8px] items-center justify-center flex flex-row gap-2 w-[948px] h-[48px] "
            onClick={() => setShowModal(true)}
          >
            <p className="">Confirm</p>
            <BsArrowUpRight className=" w-6 h-6 " />
          </button>
        </div>
      </form>

      {/* Connect Wallet Modal */}

      <ConnectWalletModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        Mars
      </ConnectWalletModal>
    </div>
  );
};

export default CreateBountyForm;
