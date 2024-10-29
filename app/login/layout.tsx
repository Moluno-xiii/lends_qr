import type { Metadata } from "next";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
