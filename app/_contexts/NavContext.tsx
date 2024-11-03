"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface NavContextProps {
  isNavOpen: boolean;
  onOpenNav: () => void;
  onCloseNav: () => void;
  toggleNav: () => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

const NavProvider = ({ children }: { children: ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function onOpenNav() {
    setIsNavOpen(true);
  }

  function onCloseNav() {
    setIsNavOpen(false);
  }
  function toggleNav() {
    setIsNavOpen((nav) => !nav);
  }

  const value = { isNavOpen, onOpenNav, onCloseNav, toggleNav };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("NavContext was used outside it's provider");
  }
  return context;
};

export default NavProvider;
export { useNavContext };
