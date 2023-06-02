import { profileImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import { IoSettingsOutline } from "react-icons/io5";

import { FcSettings } from "react-icons/fc";
import SettingCard from "./SettingsCard";
import { BsFillGearFill } from "react-icons/bs";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div className="flex flex-col flex-wrap ml-[300px]  ">
      {/* Image container */}

      <div className="px-10">
        <div className="flex justify-end mt-10  ">
          <Link href="/">
            <Image
              src={profileImage}
              alt="profileImage"
              width={50}
              className="rounded-full"
            />
          </Link>
        </div>

        <div className="flex flex-row  justify-between mt-10 ">
          {/* Settings */}

          <div className="flex flex-row gap-2 items-center justify-center ">
            <BsFillGearFill className="w-6 h-6" />
            <h2 className="text-white  font-nexa font-extrabold text-2xl ">
              Settings
            </h2>
          </div>
        </div>
      </div>

      <SettingCard />
    </div>
  );
};

export default Settings;
