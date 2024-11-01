import { getAllUsersData } from "@/app/_lib/data-fetch";
import DataCardComponent from "./DataCardComponent";
import UsersData from "./UsersData";
export const metadata = {
  title: "Users",
};

export interface TableDataPropss {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  user_id: number;
  status: string;
}
export interface TableDataProps {
  id: string;
  F: string;
  G: string;
  H: string;
  col1: string;
  col2: number;
  fullName: string;
}

const Page: React.FC = async () => {
  const data = await getAllUsersData();
  const numberOfUsers = data.length / 10;
  return (
    <div className="flex flex-col p-8 min-h-dvh pb-40">
      <div className="flex w-full gap-y-10 flex-col max-w-[1040px] mx-auto">
        <span className=" font-medium text-2xl text-secondary">Users</span>
        <DataCardComponent />
        <UsersData numUsers={numberOfUsers} />
      </div>
    </div>
  );
};

export default Page;
