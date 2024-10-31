import Image from "next/image";
import HeaderLink from "./HeaderLink";
export const links = [
  {
    name: "general details",
    route: "general-details",
  },
  {
    name: "Documents",
    route: "documents",
  },
  {
    name: "bank details",
    route: "bank-details",
  },
  {
    name: "loans",
    route: "loans",
  },
  {
    name: "savings",
    route: "savings",
  },
  {
    name: "app and system",
    route: "app-and-system",
  },
];
const UsersDetailsHeader: React.FC = ({}) => {
  return (
    <div className="flex-col flex w-full px-8 pt-5 bg-white rounded-md shadow-sm gap-y-2 h-[210px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 items-center gap-x-2">
        <Image
          src="/empty-avatar.png"
          height={100}
          width={100}
          alt="profile picture"
        />
        <div className="flex flex-col md:px-4 px-2 md:border-r border-text-primary">
          <span className="font-medium text-secondary capitalize md:text-[22px] text-base">
            george effiom
          </span>
          <span className="text-text-primary md:text-sm text-xs">
            LSQFf587g90
          </span>
        </div>
        <div className="flex flex-col items-center max md:px-4 px-2 ">
          <span className="font-medium text-secondary capitalize md:text-sm text-xs">
            User&apos;s Tier
          </span>
          <div className="text-text-primary text-sm flex flex-row items-center justify-center">
            <Image src={"/star-filled.png"} alt="star" height={16} width={16} />
            <Image src={"/star-empty.png"} alt="star" height={16} width={16} />
            <Image src={"/star-empty.png"} alt="star" height={16} width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-x-2 border-l px-4 border-text-primary">
          <span className="font-medium text-secondary capitalize text-base md:text-[22px]">
            ₦200,000.00
          </span>
          <span className="text-text-primary text-xs md:text-sm">
            9912345678/Providus Bank
          </span>
        </div>
      </div>
      <nav className="mt-auto">
        <ul className="hidden sm:flex flex-row mt-auto justify-between">
          {links.map((link, index) => (
            <HeaderLink link={link} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UsersDetailsHeader;
