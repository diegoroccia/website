import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Roccia",
  description: "My personal homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
