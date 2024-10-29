"use client";
import Link from "next/link";
import { Link as LinkProps } from "./NavGroup";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  link: LinkProps;
}

const NavigationLink: React.FC<Props> = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);
  const isActive = pathName.includes(link.route);
  return (
    <li
      className={`flex items-center text-base w-full px-8 flex-row h-10 hover:bg-primary hover:bg-opacity-[6%] border-primary ${
        isActive
          ? "border-l-[4px] text-secondary  bg-primary bg-opacity-[6%]"
          : "text-text-primary"
      } gap-x-4`}
    >
      <Image
        src={link.image_url}
        alt={link.image_url}
        height={16}
        width={16}
        className=""
      />
      <Link href={`${link.route}`}>
        <span>{link.name}</span>
      </Link>
    </li>
  );
};

export default NavigationLink;
