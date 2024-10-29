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
    <html lang="en">
      <body className={`${workSans.className} min-h-dvh w-dvw`}>
        <Header />
        <div className="grid grid-cols-[290px_1fr]">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
