import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

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
      <body>
        <div className="min-h-[100dvh] flex flex-col">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
