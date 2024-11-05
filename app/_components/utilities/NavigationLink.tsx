"use client";
import { useNavContext } from "@/app/_contexts/NavContext";
import { Link as LinkProps } from "./NavGroup";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  link: LinkProps;
  className?: string;
}

const NavigationLink: React.FC<Props> = ({ link, className }) => {
  const { onCloseNav } = useNavContext();
  const pathName = usePathname();
  const router = useRouter();
  const isActive = pathName.includes(link.route);

  const handleRoute = () => {
    router.replace(link.route);
    onCloseNav();
  };
  return (
    <li
      className={`flex items-center text-base w-full px-8 flex-row h-10 hover:bg-primary cursor-pointer transition-all duration-300 hover:bg-opacity-[6%] border-primary ${
        className && className
      } ${
        isActive
          ? "border-l-[4px] text-secondary  bg-primary bg-opacity-[6%]"
          : "text-text-primary"
      } gap-x-4`}
      onClick={handleRoute}
    >
      <Image
        src={link.image_url}
        alt={link.image_url}
        height={16}
        width={16}
        className=""
      />
      <span>{link.name}</span>
    </li>
  );
};

export default NavigationLink;
