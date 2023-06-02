import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type PublicLayoutProps = { children: ReactNode };

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="landingPage">
      <ChakraProvider>
        <div>{children}</div>
      </ChakraProvider>
    </div>
  );
};

export default PublicLayout;
