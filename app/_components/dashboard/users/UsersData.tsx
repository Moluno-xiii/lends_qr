"use client";
import Spinner from "@/app/_components/utilities/Spinner";
import { getUsersData } from "@/app/_lib/data-fetch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import UsersDataTable from "./UsersDataTable";

const UsersData = ({ numUsers }: { numUsers: number }) => {
  const searchParams = useSearchParams();
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const page = searchParams.get("page");
    if (!page) {
      router.replace(`${pathName}?page=1`);
    } else {
      const fetchData = async () => {
        setLoading(true);
        const data = await getUsersData(Number(page));
        setTableData(data);
        setLoading(false);
      };
      fetchData();
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      {loading ? (
        <Spinner message="loading users data" />
      ) : (
        <UsersDataTable numUsers={numUsers} tableData={tableData} />
      )}
    </div>
  );
};
export default UsersData;
