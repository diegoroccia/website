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
      <body className="flex h-screen flex-col bg-background text-foreground font-sans overflow-hidden">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
