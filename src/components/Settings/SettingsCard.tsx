import { CiCircleRemove } from "react-icons/ci";
import SettingsCardForm from "./SettingsCardForm";

type Props = {};

const SettingCard = (props: Props) => {
  return (
    <div className="bg-[#0A0A0A]  mx-10 mt-10">
      <div className="flex flex-col py-8 mx-14 font-nexa  ">
        <div className="flex justify-between flex-row ">
          <div className="flex flex-col">
            <h2>Bounty space Logo/Image</h2>
            <div className="w-36 h-36 rounded-full border-[#999999] border-2  flex items-center  justify-center mt-[16px] ">
              <button className="text-sm">Click to upload Photo</button>
            </div>
          </div>

          <button className="items-center rounded-full flex flex-row bg-[#B2000029] border border-[#B20000] w-[260px] h-[48px] justify-center gap-1 p-2 font-nexa font-normal  ">
            <p>Delete Bounty Space</p>

            <div className="RemoveIcon-container">
              <CiCircleRemove />
            </div>
          </button>
        </div>
        <div className="mt-10">
          <SettingsCardForm />
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
