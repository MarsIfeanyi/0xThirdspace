import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

type CreatorBountiesProps = { children: ReactNode };

import CreatorSidebar from "../Sidebar/Creator";
const CreatorBounties = ({ children }: CreatorBountiesProps) => {
  return (
    <ChakraProvider>
      
      <CreatorSidebar>{children}</CreatorSidebar>
    </ChakraProvider>
  );
};

export default CreatorBounties;
