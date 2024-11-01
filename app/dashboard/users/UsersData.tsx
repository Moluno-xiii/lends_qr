"use client";
import { getUsersData } from "@/app/_lib/data-fetch";
import UsersDataTable from "./UsersDataTable";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "@/app/_components/Spinner";

const UsersData = ({ numUsers }: { numUsers: number }) => {
  const searchParams = useSearchParams();
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const page = searchParams.get("page") || "1";
      const data = await getUsersData(Number(page));
      setTableData(data);
      setLoading(false);
    };

    fetchData();
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
// eshegware
export default UsersData;
