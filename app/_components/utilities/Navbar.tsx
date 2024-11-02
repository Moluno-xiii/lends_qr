"use client";

import NavGroup from "./NavGroup";
import LogoutSection from "./LogoutSection";
import { useNavContext } from "@/app/_contexts/NavContext";

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

const NavbarLarge: React.FC = ({}) => {
  return (
    <nav className="w-[283px] hidden lg:flex flex-col gap-y-5 py-10">
      <NavGroup title="customers" links={customers_links} />
      <NavGroup title="businesses" links={businesses_links} />
      <NavGroup title="settings" links={settings_links} />
      <LogoutSection />
    </nav>
  );
};

const NavbarMini: React.FC = ({}) => {
  const { onCloseNav } = useNavContext();
  return (
    <nav className="flex w-dvw fixed top-0 bottom-0 shadow-md bg-[#f2f2f2] z-30 overflow-y-auto sm:w-60 lg:hidden flex-col gap-y-5 py-10 ">
      <button
        className="bg-primary w-1/2 self-end p-3 uppercase text-[#f2f2f2]"
        onClick={onCloseNav}
      >
        close nav
      </button>
      <NavGroup title="customers" links={customers_links} />
      <NavGroup title="businesses" links={businesses_links} />
      <NavGroup title="settings" links={settings_links} />
      <LogoutSection />
    </nav>
  );
};

export { NavbarLarge, NavbarMini };
