import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
type BounterHunterProps = { children: ReactNode };
import HunterSidebar from "../Sidebar/Hunter";

const BounterHunter = ({ children }: BounterHunterProps) => {
  return (
    <ChakraProvider>
      <HunterSidebar>{children}</HunterSidebar>
    </ChakraProvider>
  );
};

export default BounterHunter;
