import DataCard from "@/app/_components/DataCard";

export interface UsersDataProps {
  name: string;
  value: number;
  icon: string;
}

const usersData: UsersDataProps[] = [
  {
    name: "users",
    value: 2453,
    icon: "/users-icon-1.png",
  },
  {
    name: "active users",
    value: 2453,
    icon: "/users-icons-2.png",
  },
  {
    name: "users with loans",
    value: 12453,
    icon: "/users-icons-3.png",
  },
  {
    name: "users with savings",
    value: 102453,
    icon: "/users-icons-4.png",
  },
];
const DataCardComponent: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
        {usersData.map((data, index) => (
          <DataCard data={data} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default DataCardComponent;
