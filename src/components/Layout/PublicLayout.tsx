import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type PublicLayoutProps = { children: ReactNode };

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <ChakraProvider>
      <div>{children}</div>
    </ChakraProvider>
  );
};

export default PublicLayout;
