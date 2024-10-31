import UsersDataTable from "./UsersDataTable";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import { getUsersData } from "@/app/_lib/data-fetch";

// export const revalidate = 0;
const UsersData: React.FC = async ({}) => {
  const tableData = await getUsersData();

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <Suspense fallback={<Spinner message="Loading Users Data" />}>
        <UsersDataTable tableData={tableData} />
      </Suspense>
    </div>
  );
};
// eshegware
export default UsersData;
