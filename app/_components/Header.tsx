import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Header: React.FC = ({}) => {
  return (
    <div className="bg-white sticky top-0 h-[100px] shadow-md flex flex-row justify-between items-center gap-x-10 px-8 z-10">
      <Image
        src="/logo-group.svg"
        height={30}
        width={175}
        alt="lendsqr logo"
        className=""
      />

      <SearchBar />

      <div className="flex gap-x-10 flex-row justify-center items-center">
        <Link href={"#"} className="text-secondary underline">
          Docs
        </Link>
        <Image
          src={"/notification-bell.png"}
          height={26}
          width={26}
          alt="Notification bell"
        />
        <div className="flex flex-row justify-center items-center gap-x-2">
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
      </div>
    </div>
  );
};

export default Header;
