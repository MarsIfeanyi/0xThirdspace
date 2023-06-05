import { createContext, ReactNode, useState } from "react";

const initialValue = { isCollapsed: false };

const SidebarContext = createContext<any>(initialValue);

const SidebarProvider = ({ children }:{children:ReactNode}) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse:any = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };