import Image from "next/image";
import NavGroup from "./NavGroup";

const customers_links = [
  {
    name: "Users",
    image_url: "/user-friends-icon.png",
    route: "/dashboard/users?page=1",
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
    route: "/dashboard/decision-models",
  },
  {
    name: "Savings",
    image_url: "/piggy-bank.png",
    route: "/dashboard/savings",
  },
  {
    name: "Loan Requests",
    image_url: "/loan-requests.png",
    route: "/dashboard/loan-requests",
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
const businesses_links = [
  {
    name: "Organization",
    image_url: "/briefcase-icon.png",
    route: "/dashboard/organization",
  },
  {
    name: "Loan Products",
    image_url: "/loan-requests.png",
    route: "/dashboard/loan-products",
  },
  {
    name: "Savings Products",
    image_url: "/savings-products-icon.png",
    route: "/dashboard/savings-products",
  },
  {
    name: "Fees and Charges",
    image_url: "/coins-icon.png",
    route: "/dashboard/fees-and-charges",
  },
  {
    name: "Transactions",
    image_url: "/transactions-icon.png",
    route: "/dashboard/transactions",
  },
  {
    name: "Services",
    image_url: "/galaxy-icon.png",
    route: "/dashboard/services",
  },
  {
    name: "Service Account",
    image_url: "/service-account-icon.png",
    route: "/dashboard/service-account",
  },
  {
    name: "Settlements",
    image_url: "/scroll-icon.png",
    route: "/dashboard/settlements",
  },
  {
    name: "Reports",
    image_url: "/bar-chart-icon.png",
    route: "/dashboard/reports",
  },
];

const settings_links = [
  {
    name: "Preferences",
    image_url: "/sliders-icon.png",
    route: "/dashboard/preferences",
  },
  {
    name: "Fees and Pricing",
    image_url: "/fees-and-pricing-icon.png",
    route: "/dashboard/fees-and-pricing",
  },
  {
    name: "Audit Logs",
    image_url: "/clipboard-icon.png",
    route: "/dashboard/audit-logs",
  },
];

const Navbar: React.FC = ({}) => {
  return (
    <nav className="w-[283px] hidden lg:flex flex-col gap-y-5 py-10">
      <NavGroup title="customers" links={customers_links} />
      <NavGroup title="businesses" links={businesses_links} />
      <NavGroup title="settings" links={settings_links} />
      <div className="mb-[100px] flex flex-col gap-y-8 w-full px-8">
        <div className="flex flex-row gap-x-2 items-center cursor-pointer">
          <Image
            src={"/logout-icon.png"}
            alt="logout icon"
            height={16}
            width={16}
          />
          <span className="text-base capitalize hover:text-red-600 transition-all duration-300">
            logout
          </span>
        </div>
        <span className="text-xs">v1.2.0</span>
      </div>
    </nav>
  );
};

export default Navbar;
