import NavGroup from "./NavGroup";

const customers_links = [
  {
    name: "Users",
    image_url: "/user-friends-icon.png",
    route: "/dashboard/users",
  },
  {
    name: "Guarantors",
    image_url: "/users-1.png",
    route: "/dashboard/guarantors",
  },
  {
    name: "Loans",
    image_url: "/loans.png",
    route: "/dashboard/loans",
  },
  {
    name: "Decision Models",
    image_url: "/handshake.png",
    route: "/dashboard/decision_models",
  },
  {
    name: "Savings",
    image_url: "/piggy-bank.png",
    route: "/dashboard/savings",
  },
  {
    name: "Loan Requests",
    image_url: "/loan-requests.png",
    route: "/dashboard/loan_requests",
  },
  {
    name: "Whitelist",
    image_url: "/whitelist.png",
    route: "/dashboard/whitelist",
  },
  {
    name: "Karma",
    image_url: "/karma.png",
    route: "/dashboard/karma",
  },
];

const Navbar: React.FC = ({}) => {
  return (
    <nav className="w-[283px] flex flex-col gap-y-5 py-10">
      <NavGroup title="customers" links={customers_links} />
      <NavGroup title="businesses" links={customers_links} />
      <NavGroup title="settings" links={customers_links} />
    </nav>
  );
};

export default Navbar;
