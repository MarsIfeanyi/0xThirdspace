import React, { ReactNode } from "react";
type CreatorBountiesProps = { children: ReactNode };

import CreatorSidebar from "../Sidebar/Creator";
const CreatorBounties = ({ children }: CreatorBountiesProps) => {
  return (
    <div className="layout"> 
      <CreatorSidebar />
      <main className="layout__main-content">{children}</main>
    </div>
  );
};

export default CreatorBounties;
