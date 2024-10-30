import DataCard from "@/app/_components/DataCard";
import { TableDataProps, UsersDataProps } from "./page";
import UsersDataTable from "./UsersDataTable";

interface Props {
  usersData: UsersDataProps[];
  tableData: TableDataProps[];
}

const UsersData: React.FC<Props> = ({ usersData, tableData }) => {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
        {usersData.map((data, index) => (
          <DataCard data={data} key={index} />
        ))}
      </ul>
      <UsersDataTable tableData={tableData} />
    </div>
  );
};

export default UsersData;
