import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Navbar from "../_components/Navbar";
import Header from "../_components/Header";

const workSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard | LendsQR",
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
    <html lang="en">
      <body className={`${workSans.className} min-h-dvh w-dvw overflow-hidden`}>
        <Header />
        <div className="grid lg:grid-cols-[290px_1fr] h-screen">
          <div className="hidden lg:flex overflow-y-auto h-full">
            <Navbar />
          </div>
          <div className="overflow-y-auto overflow-x-auto bg-[#f7f7f7]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
