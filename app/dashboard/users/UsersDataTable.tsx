"use client";
import Image from "next/image";
import { TableDataProps } from "./page";
import UserDataRow from "./UserDataRow";
import { useState } from "react";
import Pagination from "@/app/_components/Pagination";

const dataTableTitles = [
  { title: "organization" },
  { title: "username" },
  { title: "email" },
  { title: "phone number" },
  { title: "date joined" },
  { title: "status" },
];

interface Props {
  tableData: TableDataProps[] | null;
  numUsers: number;
}

const UsersDataTable: React.FC<Props> = ({ tableData, numUsers }) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number>(-1);

  return (
    <>
      <div className="overflow-x-auto w-full">
        <div className="rounded-md shadow-sm bg-white px-4 overflow-x-auto min-w-[768px]">
          <ul className="grid grid-cols-[1.5fr_1fr_3fr_2fr_3fr_1.5fr_30px] gap-x-2 h-20">
            {dataTableTitles.map((title, index) => (
              <li
                key={index}
                className="flex flex-row justify-center items-center gap-x-1"
              >
                <span className="text-text-primary font-semibold text-xs uppercase">
                  {title.title}
                </span>
                <Image
                  src={"/filter-icon.png"}
                  alt={"filter icon"}
                  height={16}
                  width={16}
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            {tableData?.map((data, index) => (
              <UserDataRow
                key={index}
                activeModalIndex={activeModalIndex}
                setActiveModalIndex={setActiveModalIndex}
                index={index}
                data={data}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-4 text-xs md:text-sm capitalize">
        <span className="">Showing 100 out of 100</span>
        <Pagination numUsers={numUsers} />
      </div>
    </>
  );
};

export default UsersDataTable;
