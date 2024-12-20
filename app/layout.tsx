import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | LendsQR",
    default: "Welcome | LendsQr",
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
        {children}
      </body>
    </html>
  );
}
