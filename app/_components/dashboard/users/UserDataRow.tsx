"use client";
import Image from "next/image";
import { useState } from "react";
import UsersTableModal from "./UsersTableModal";
import { TableDataProps } from "@/app/types";

interface UserDataRowProps {
  data: TableDataProps;
  index: number;
  activeModalIndex: number;
  setActiveModalIndex: React.Dispatch<React.SetStateAction<number>>;
}

const UserDataRow: React.FC<UserDataRowProps> = ({
  data,
  index,
  activeModalIndex,
  setActiveModalIndex,
}) => {
  const {
    F: date_joined,
    G: status,
    H: organization,
    fullName: username,
    id: user_id,
    col1: phone_number,
    col2: email,
  } = data;
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal((modal_state) => !modal_state);
    setActiveModalIndex(index);
  };
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
      <li
        onClick={handleToggleModal}
        className="relative cursor-pointer hover:px-2 py-2 hover:bg-slate-200 rounded-full transition-all duration-300"
      >
        <Image
          src={"/vertical-dots.png"}
          alt="vertical dots"
          height={20}
          width={20}
        />
        {openModal && activeModalIndex === index && (
          <UsersTableModal user_id={String(user_id)} />
        )}
      </li>
    </ul>
  );
};

export default UserDataRow;
