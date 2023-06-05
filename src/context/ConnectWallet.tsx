import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

// Creating a context
export const TransactionContext = React.createContext<any>(()=>['']);

// destructuring ethereum object from window.ethereum... The ethereum object will be available on the console if you have metamask installed
const { ethereum } = window;

// function that fetches/gets the ethereum contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum); // Hint: here we passed in the ethereum object
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  ); //Hint: The "Contract" takes in 3 arguments, the contractAddress, ContractABI and the Signer. This 3 arguments are needed to fetch the contract.

  return transactionContract;

  // console.log({
  //   provider,
  //   signer,
  //   transactionContract,
  // });
};

/**
 * 
 * Hint: Each  TransactionProvider will take in children as prop.
 * export const TransactionProvider = ({ children })=>{
  return (
    <>
      <TransactionContext.Provider  value={}   >
      {children}
      </TransactionContext.Provider>
    </>
  )
}
 * 
 */

// Providing the context ie creating a provider for the defined context... Hint: TransactionProvider will be used as a wrapper in the  App component, and thus whatever data (value) we put inside the TransactionProvider will be accessible everywhere on the App ie App wide state
export const TransactionProvider = ({ children }:any) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  // e = keyboard event... name is a property defined in the Input tag inside the Welcome component
  const handleChange = (e:any, name:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // function that Checks if wallet is connected at the start
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({
        method: "eth_accounts",
      });

      // Checks if there is an account
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }

      console.log(accounts);
      //
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  // This is called only at the start of the application
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  // function for connecting the account
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      }); //Hint:eth_requestAccounts will get all the accounts and then the user will choose the one to connect with.

      setCurrentAccount(accounts[0]); // connects to the first account in the accounts array
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  // function that sends the transaction... This function contains the entire logic for sending and storing transactions
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      // get the data from the form
      const { addressTo, amount, keyword, message } = formData; //getting access to the formData variables
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      // ethereum transaction, sending ethereum from one address to another
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: "currentAccount",
            to: "addressTo",
            gas: "0x5208", // 21000 GWEI
            value: parsedAmount._hex, // 0.00001
          },
        ],
      });

      //  To store the transaction on-chain
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      ); // Hint: addToBlockchain is a function defined in the smart contract

      setIsLoading(true);
      console.log(`Loading: ${transactionHash.hash} `);
      await transactionHash.wait(); // This is going to wait for the transaction to be finished.

      setIsLoading(false);
      console.log(`Success: ${transactionHash.hash} `);

      // getting the transactionCount
      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());

      //
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  return (
    // Hint: The value property(prop) contains/carries the context objects
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
