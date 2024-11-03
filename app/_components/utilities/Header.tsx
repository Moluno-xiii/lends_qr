"use client";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useRouter } from "next/navigation";

const Header: React.FC = ({}) => {
  const router = useRouter();
  return (
    <div className="bg-white sticky top-0 h-[100px] shadow-md flex flex-row justify-between flex-shrink items-center gap-x-10 px-8 z-10 mb-0">
      <Image
        src="/logo-group.svg"
        height={30}
        width={175}
        alt="lendsqr logo"
        className=""
        onClick={() => router.push("/")}
      />
      <SearchBar />
      <div className="flex gap-x-5 lg:gap-x-10 flex-row justify-center items-center">
        <Link href={"#"} className="text-secondary hidden sm:flex  underline">
          Docs
        </Link>
        <Image
          src={"/notification-bell.png"}
          height={26}
          width={26}
          alt="Notification bell"
          className="hidden sm:flex "
        />
        <div className="hidden sm:flex flex-row justify-center items-center gap-x-2">
          <Image
            src={"/user-avatar.png"}
            height={60}
            width={48}
            alt="user avatar"
            className="rounded-full"
          />
          <span>Adedeji</span>
          <Image
            src={"/dropdown-icon.png"}
            height={4.15}
            width={7.34}
            alt="dropdown icon"
            className=""
          />
        </div>
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
