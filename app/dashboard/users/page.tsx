import UsersData from "./UsersData";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import DataCardComponent from "./DataCardComponent";
export const metadata = {
  title: "User",
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
  return (
    <div className="flex flex-col p-8 min-h-dvh pb-40">
      <div className="flex w-full gap-y-10 flex-col max-w-[1040px] mx-auto">
        <span className=" font-medium text-2xl text-secondary">Users</span>
        <DataCardComponent />
        <Suspense fallback={<Spinner message="loading users data" />}>
          <UsersData />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
