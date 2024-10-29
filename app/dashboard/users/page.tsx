import UsersData from "./UsersData";
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
    status: "inactive",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "active",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "active",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "inactive",
  },
  {
    organization: "Lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00: AM",
    status: "inactive",
  },
];

const Page: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-col p-8 gap-y-10 min-h-dvh">
      <span className="font-medium text-2xl text-secondary ml-20">Users</span>
      <UsersData usersData={usersData} tableData={tableData} />
    </div>
  );
};

export default Page;
