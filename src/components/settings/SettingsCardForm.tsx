import React from "react";

type Props = {};

const SettingsCardForm = (props: Props) => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="spaceName">Bounty space name</label>
          <input
            type="text"
            name="spaceName"
            id="spaceName"
            placeholder="Bounty To Bounties"
            className="w-full border-[#999999] bg-[#0A0A0A] text-white border outline-none p-2 mt-2 "
          />
        </div>

        <div className="mt-8">
          <h2>Bounty Space Privacy</h2>

          <div className=" items-start justify-start flex flex-row gap-8 mt-2 ">
            <div className="flex flex-row gap-3">
              <input type="radio" name="bountyPrivacy" id="private" />
              <label htmlFor="private">Private</label>
            </div>

            <div className="flex flex-row gap-3  ">
              <input
                type="radio"
                name="bountyPrivacy"
                id="public"
                className=""
              />
              <label htmlFor="public">Public</label>
            </div>
          </div>
        </div>
      </form>
      {/* buttons */}

      <div className="flex flex-col md:flex-row justify-between mt-14 mb-10">
        <button className="btnBorderGradient3  ">Cancel</button>

        <button className="btnBackgroundGradient w-[350px] h-[48px] items-center rounded-[8px] ">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default SettingsCardForm;
