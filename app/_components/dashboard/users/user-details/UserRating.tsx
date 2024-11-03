import Image from "next/image";

const UserRating: React.FC = ({}) => {
  return (
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
  );
};

export default UserRating;
