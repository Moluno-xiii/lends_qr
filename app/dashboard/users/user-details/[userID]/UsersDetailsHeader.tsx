import Image from "next/image";
import HeaderLink from "./HeaderLink";

const links = [
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
      <div className="flex flex-row flex-1 items-center gap-x-2">
        <Image
          src="/empty-avatar.png"
          height={100}
          width={100}
          alt="profile picture"
        />
        <div className="flex flex-col gap-x-2 px-4 border-r border-text-primary">
          <span className="font-medium text-secondary capitalize text-[22px]">
            george effiom
          </span>
          <span className="text-text-primary text-sm">LSQFf587g90</span>
        </div>
        <div className="flex flex-col gap-x-2 px-4 ">
          <span className="font-medium text-secondary capitalize text-sm">
            User&apos;s Tier
          </span>
          <div className="text-text-primary text-sm flex flex-row items-center justify-center">
            <Image src={"/star-filled.png"} alt="star" height={16} width={16} />
            <Image src={"/star-empty.png"} alt="star" height={16} width={16} />
            <Image src={"/star-empty.png"} alt="star" height={16} width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-x-2 border-l px-4 border-text-primary">
          <span className="font-medium text-secondary capitalize text-[22px]">
            ₦200,000.00
          </span>
          <span className="text-text-primary text-sm">
            9912345678/Providus Bank
          </span>
        </div>
      </div>
      <nav className="mt-auto">
        <ul className="flex flex-row mt-auto justify-between">
          {links.map((link, index) => (
            <HeaderLink link={link} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UsersDetailsHeader;
