"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  link: { name: string; route: string };
}
const HeaderLink: React.FC<Props> = ({ link }) => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive = pathName.includes(link.route);
  return (
    <li
      className={`capitalize pb-2  text-black text-opacity-80 hover:border-b-2 transition-all duration-300 hover:border-primary hover:text-primary ${
        isActive && "border-b-[3px] border-primary text-primary"
      }`}
    >
      <span
        className="cursor-pointer"
        onClick={() => router.replace(link.route)}
      >
        {link.name}
      </span>
    </li>
  );
};

export default HeaderLink;
