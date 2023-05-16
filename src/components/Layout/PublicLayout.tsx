import React, { ReactNode } from "react";

type PublicLayoutProps = { children: ReactNode };

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return <>{children}</>;
};

export default PublicLayout;
