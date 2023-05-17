import Link from "next/link";

import { useRouter } from "next/router";

import { FaMedal } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io";
import { Logo } from "../LandingPage";

import React, { ReactNode } from "react";

const iconItems = [
  {
    text: "Bounties",
    link: "/creator/bounties",
    icon:"fas fa-medal"
  },
  {
    text: "Members",
    link: "/creator/members",
    icon:"fa-solid fa-people-group"

  },
  {
    text: "Settings",
    link: "/creator/settings",
    icon:"fas fa-gear"
  },
];

const CreatorSidebar = () => {
  const router = useRouter();

  return (
    <div className="flex">
      {/* fixed side */}
      <div className="fixed w-fit h-screen p-4 bg-bl-1 border-black/60 border-r-[1px] flex flex-col justify-between">
        {/* we will have the sidebar here  */}
        <Link href="/creator">
          <div className=" text-center text-xl  text-white p-3 rounded-lg inline-block">
            <p>Bounties to Bounty</p>
          </div>
        </Link>

        <div className="h-full flex flex-col justify-center items-start mx-4">
          {iconItems.map((list) => (
            <Link href={list.link} className="flex items-center text-gray-500 hover:text-white">
              <i className={`${list.icon} text-xl w-5`}></i>
              <p className="text-center text-xl  cursor-pointer my-4 p-3 rounded-lg inline-block">
                {list.text}
              </p>
            </Link>
          ))}
        </div>

        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default CreatorSidebar;
