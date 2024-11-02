"use client";
import { useNavContext } from "@/app/_contexts/NavContext";
import { NavbarLarge, NavbarMini } from "./Navbar";

const NavComponent: React.FC = ({}) => {
  const { isNavOpen } = useNavContext();
  return (
    <div className="">
      <div className="">
        <NavbarLarge />
      </div>
      {isNavOpen && <NavbarMini />}
    </div>
  );
};

export default NavComponent;
