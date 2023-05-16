import React, { ReactNode } from "react";
type BounterHunterProps = { children: ReactNode };


const BounterHunter = ({ children }: BounterHunterProps) => {
  return <div>{children}</div>;
};

export default BounterHunter;
