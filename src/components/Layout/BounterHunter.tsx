import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
type BounterHunterProps = { children: ReactNode };

const BounterHunter = ({ children }: BounterHunterProps) => {
  return (
    <ChakraProvider>
      <div className="font-nexa ">{children}</div>
    </ChakraProvider>
  );
};

export default BounterHunter;
