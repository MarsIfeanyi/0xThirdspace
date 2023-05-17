import React, { ReactNode } from "react";
type CreatorBountiesProps = { children: ReactNode };

import CreatorSidebar from "../Sidebar/Creator";
const CreatorBounties = ({ children }: CreatorBountiesProps) => {
  return (
    <div className="flex"> 
      <CreatorSidebar />
      <main className="bg-black w-full h-full min-h-screen text-white">{children}</main>
    </div>
  );
};

export default CreatorBounties;
