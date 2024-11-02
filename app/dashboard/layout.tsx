import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Header from "../_components/utilities/Header";
import NavProvider from "../_contexts/NavContext";
import NavComponent from "../_components/utilities/NavComponent";

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
        <NavProvider>
          <Header />
          <div className="flex lg:grid-cols-[290px_1fr] h-screen">
            <div className="overflow-y-auto">
              <NavComponent />
            </div>
            <div className="overflow-y-auto overflow-x-auto bg-[#f7f7f7]">
              {children}
            </div>
          </div>
        </NavProvider>
      </body>
    </html>
  );
}
