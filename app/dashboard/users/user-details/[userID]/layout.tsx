import HeaderNav from "@/app/_components/dashboard/users/user-details/HeaderNav";
import UserInfoProvider from "@/app/_contexts/UserInfoContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | LendsQR",
    default: "Dashboard | LendsQr",
  },
  description: "LendsQR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-[1040px] mx-auto p-8">
      <UserInfoProvider>
        <HeaderNav />
        <div className="flex flex-col pb-20">{children}</div>
      </UserInfoProvider>
    </div>
  );
}
