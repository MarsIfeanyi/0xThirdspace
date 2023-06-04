import Link from "next/link";

import { useRouter } from "next/router";

import { FaMedal } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io";

import React, { ReactNode } from "react";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import Logo from "../Ui/Logo";

const hunterIconItems = [
  {
    text: "Bounties",
    link: "/hunter",
    icon: "fas fa-medal",
  },
  {
    text: "Members",
    link: "/hunter/members",
    icon: "fa-solid fa-people-group",
  },
];

const HunterSidebar = ({ children }) => {
  const router = useRouter();

  return (
    <div className=" flex font-nexa">
      {/* fixed side */}
      <div className="fixed w-fit h-screen p-4 bg-bl-1 border-black/60 border-r-[1px] flex flex-col justify-between">
        {/* we will have the sidebar here  */}
        <Link href="/creator">
          <div className="flex item-center justify-evenly text-center text-xl  text-white p-3 rounded-lg">
            <Avatar src="" alt="chainliknk avatar" size="sm"></Avatar>
            <p className="mx-2">Chainlink Boounty </p>
            {/* <DisplayAction /> */}
          </div>
        </Link>

        <div className="h-full flex flex-col justify-center items-start mx-4">
          {hunterIconItems.map((list, key) => (
            <ul key={key}>
              <Link
                href={list.link}
                className="flex items-center text-gray-500 hover:text-white font-nexa"
              >
                <i className={`${list.icon} text-xl w-5`}></i>
                <p className="text-center text-xl  cursor-pointer my-4 p-3 rounded-lg inline-block">
                  {list.text}
                </p>
              </Link>
            </ul>
          ))}
        </div>

        <div className="ml-4 mb-10">
          <Logo />
        </div>
      </div>

      <main className="bg-black  w-full h-full !font-nexa min-h-screen text-white">
        {children}
      </main>
    </div>
  );
};

// const DisplayAction = () => {
//   return (
//     <>
//       <Menu placement="bottom-end">
//         <MenuButton
//           transition="all 0.3s"
//           // _focus={{ boxShadow: 'none' }}
//           className="text-center  mx-auto "
//         >
//           <i className="text-lg fas fa-ellipsis-v w-4 text-gray-400 hover:text-gray-950" />
//         </MenuButton>
//         <Portal>
//           <MenuList
//             rounded={"none"}
//             className="absolute right-3 top-1 font-nexa !bg-[#1f1f1f] border-transparent   "
//             p={2}
//           >
//             <MenuItem className="font-nexa !bg-[#1f1f1f]  !text-white">
//               Create Bounty Space
//             </MenuItem>
//             <MenuItem className="font-nexa !bg-[#1f1f1f]   !text-white">
//               Join Bounty
//             </MenuItem>
//           </MenuList>
//         </Portal>
//       </Menu>
//     </>
//   );
// };

export default HunterSidebar;
