import UsersData from "./UsersData";
export const metadata = {
  title: "User",
};
export interface UsersDataProps {
  name: string;
  value: number;
  icon: string;
}
export interface TableDataProps {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  user_id: number;
  status: string;
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

const tableData: TableDataProps[] = [
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 1,
    status: "inactive",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 2,
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 3,
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 4,
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 5,
    status: "active",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 6,
    status: "active",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 7,
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 8,
    status: "inactive",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    user_id: 9,
    status: "inactive",
  },
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-col p-8 min-h-dvh pb-40">
      <div className="flex w-full gap-y-10 flex-col max-w-[1040px] mx-auto">
        <span className=" font-medium text-2xl text-secondary">Users</span>
        <UsersData usersData={usersData} tableData={tableData} />
      </div>
    </div>
  );
};

export default Page;
