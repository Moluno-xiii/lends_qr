"use client";
import { useNavContext } from "@/app/_contexts/NavContext";
import Image from "next/image";
const Hamburger: React.FC = ({}) => {
  const { isNavOpen, toggleNav } = useNavContext();
  return (
    <div className="block lg:hidden">
      {isNavOpen ? (
        <Image
          height={20}
          width={20}
          src="/close-icon.png"
          alt="close menu icon"
          onClick={toggleNav}
        />
      ) : (
        <Image
          height={20}
          width={20}
          src="/hamburger-icon.png"
          alt="menu icon"
          onClick={toggleNav}
        />
      )}
    </div>
  );
};

export default Hamburger;
