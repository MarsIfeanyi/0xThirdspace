import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import Web3Modal from "web3modal";

export const BountyPlatformContext = createContext();

const BountyPlatformContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();

  const [createBountyFormData, setCreateBountyFormData] = useState({
    title: "",
    repoLink: "",
    amount: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const createBountyFormDataChangeHandler = (fieldName, e) => {
    setCreateBountyFormData((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  };

 
  const getBountyContract = () => {
    if (typeof window !== "undefined" && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const bountyPlatformContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      return bountyPlatformContract;
    }
    return null;
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length) {
          setCurrentAccount(accounts[0]);
        } else {
          console.log("No accounts found");
        }

        console.log(accounts);
      } else {
        console.log("Please Install Metamask");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
      } else {
        console.log("Please Install Metamask");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  // Create Bounty
  const createBounty = async () => {
    const { title, repoLink, amount, startDate, endDate, description } =
      createBountyFormData;

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    // creating a signer
    const signer = provider.getSigner();

    const bountyPlatformContractTx = getBountyContract();

    const createBountyTransaction = await bountyPlatformContractTx.createBounty(
      title,
      repoLink,
      amount,
      startDate,
      endDate,
      description
    );

    await createBountyTransaction.wait();
  };

  return (
    <BountyPlatformContext.Provider
      value={{
        connectWallet,
        currentAccount,
        createBounty,
        createBountyFormData,
        createBountyFormDataChangeHandler,
      }}
    >
      {children}
    </BountyPlatformContext.Provider>
  );
};

export default BountyPlatformContextProvider;

export const useBountyPlatformContext = () => useContext(BountyPlatformContext);
