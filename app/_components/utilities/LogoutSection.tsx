import Image from "next/image";

const LogoutSection: React.FC = ({}) => {
  return (
    <div className="mb-[100px] flex flex-col gap-y-8 w-full px-8">
      <div className="flex flex-row gap-x-2 items-center cursor-pointer">
        <Image
          src={"/logout-icon.png"}
          alt="logout icon"
          height={16}
          width={16}
        />
        <span className="text-base capitalize hover:text-red-600 transition-all duration-300">
          logout
        </span>
      </div>
      <span className="text-xs">v1.2.0</span>
    </div>
  );
};

export default LogoutSection;
