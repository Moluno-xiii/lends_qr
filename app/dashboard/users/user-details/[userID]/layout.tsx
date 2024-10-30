import type { Metadata } from "next";
import HeaderNav from "./HeaderNav";

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
      <HeaderNav />
      <div className="flex flex-col pb-20">{children}</div>
    </div>
  );
}
