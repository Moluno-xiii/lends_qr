"use client";

import NavGroup from "./NavGroup";
import LogoutSection from "./LogoutSection";
import { useNavContext } from "@/app/_contexts/NavContext";
import Image from "next/image";
import NavigationLink from "./NavigationLink";

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
    route: "/dashboard",
  },
  {
    name: "Savings",
    image_url: "/piggy-bank.png",
    route: "/dashboard",
  },
  {
    name: "Loan Requests",
    image_url: "/loan-requests.png",
    route: "/dashboard",
  },
  {
    name: "Whitelist",
    image_url: "/whitelist.png",
    route: "/dashboard",
  },
  {
    name: "Karma",
    image_url: "/karma.png",
    route: "/dashboard",
  },
];
const businesses_links = [
  {
    name: "Organization",
    image_url: "/briefcase-icon.png",
    route: "/dashboard",
  },
  {
    name: "Loan Products",
    image_url: "/loan-requests.png",
    route: "/dashboard",
  },
  {
    name: "Savings Products",
    image_url: "/savings-products-icon.png",
    route: "/dashboard",
  },
  {
    name: "Fees and Charges",
    image_url: "/coins-icon.png",
    route: "/dashboard",
  },
  {
    name: "Transactions",
    image_url: "/transactions-icon.png",
    route: "/dashboard",
  },
  {
    name: "Services",
    image_url: "/galaxy-icon.png",
    route: "/dashboard",
  },
  {
    name: "Service Account",
    image_url: "/service-account-icon.png",
    route: "/dashboard",
  },
  {
    name: "Settlements",
    image_url: "/scroll-icon.png",
    route: "/dashboard",
  },
  {
    name: "Reports",
    image_url: "/bar-chart-icon.png",
    route: "/dashboard",
  },
];

const settings_links = [
  {
    name: "Preferences",
    image_url: "/sliders-icon.png",
    route: "/dashboard",
  },
  {
    name: "Fees and Pricing",
    image_url: "/fees-and-pricing-icon.png",
    route: "/dashboard",
  },
  {
    name: "Audit Logs",
    image_url: "/clipboard-icon.png",
    route: "/dashboard",
  },
];

const dashboardLink = {
  name: "Dashboard",
  image_url: "/home-icon.png",
  route: "/dashboard",
};

const NavbarLarge: React.FC = ({}) => {
  return (
    <nav className="w-[283px] hidden lg:flex flex-col gap-y-5 py-10">
      <div className="flex flex-row mb-7 cursor-pointer  px-8 gap-x-3">
        <Image
          height={14}
          width={14}
          src="/briefcase-icon.png"
          alt="hommepage icon"
        />
        <span>Switch Orgainzation</span>
        <Image
          height={14}
          width={14}
          src="/arrow-bottom.png"
          alt="arrow icon"
        />
      </div>
      <NavigationLink link={dashboardLink} className={"p-4"} />
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
      <div className="flex flex-row mb-7 cursor-pointer  px-8 gap-x-3">
        <Image
          height={14}
          width={14}
          src="/briefcase-icon.png"
          alt="hommepage icon"
        />
        <span>Switch Orgainzation</span>
        <Image
          height={14}
          width={14}
          src="/arrow-bottom.png"
          alt="arrow icon"
        />
      </div>
      <NavigationLink link={dashboardLink} className={"p-4"} />
      <NavGroup title="customers" links={customers_links} />
      <NavGroup title="businesses" links={businesses_links} />
      <NavGroup title="settings" links={settings_links} />
      <LogoutSection />
    </nav>
  );
};

export { NavbarLarge, NavbarMini };
