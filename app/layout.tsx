import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Diego Roccia",
  description: "Diego Roccia - Engineering Manager specializing in Platform Engineering, FinOps, and Cloud Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="h-screen overflow-hidden bg-background text-foreground font-sans">
        <div className="grid grid-rows-[auto_1fr_auto] h-full">
          <Navigation />
          <main className="overflow-y-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
