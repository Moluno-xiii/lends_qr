import Image from "next/image";
import { TableDataProps } from "./page";

interface Props {
  data: TableDataProps;
}

const UserDataRow: React.FC<Props> = ({ data }) => {
  const { organization, username, email, phone_number, date_joined, status } =
    data;
  return (
    <ul className="border-y border-y-[#213F7D1A] border-opacity-10 grid grid-cols-[1.5fr_1fr_3fr_2fr_3fr_1.5fr_30px] gap-x-2 items-center text-center text-sm text-text-primary h-20">
      <li className="capitalize">{organization}</li>
      <li className="capitalize">{username}</li>
      <li>{email}</li>
      <li>{phone_number}</li>
      <li>{date_joined}</li>
      <li
        className={`capitalize rounded-2xl px-4 py-2
      ${
        status === "blacklisted" && "bg-[#E4033B] bg-opacity-10 text-[#E4033B] "
      }
      ${status === "pending" && "bg-[#E9B200] bg-opacity-10 text-[#E9B200] "}
       ${status === "active" && "bg-[#39CD62] bg-opacity-10 text-[#39CD62] "}
       ${
         status === "inactive" &&
         "bg-text-primary bg-opacity-[6%] text-text-pbg-text-primary "
       }
      `}
      >
        {status}
      </li>
      <li>
        <Image
          src={"/vertical-dots.png"}
          alt="vertical dots"
          height={20}
          width={20}
        />
      </li>
    </ul>
  );
};

export default UserDataRow;
