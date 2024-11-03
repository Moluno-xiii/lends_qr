import { getAllUsersData } from "@/app/_lib/data-fetch";
import DataCardComponent from "../../_components/dashboard/users/DataCardComponent";
import UsersData from "../../_components/dashboard/users/UsersData";
export const metadata = {
  title: "Users",
};

const Page: React.FC = async () => {
  const data = await getAllUsersData();
  const userDataLength = data.length;
  return (
    <div className="flex flex-col p-8 min-h-dvh pb-40">
      <div className="flex w-full gap-y-10 flex-col max-w-[1040px] mx-auto">
        <span className=" font-medium text-2xl text-secondary">Users</span>
        <DataCardComponent />
        <UsersData numUsers={userDataLength} />
      </div>
    </div>
  );
};

export default Page;
