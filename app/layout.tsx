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
      <body className="bg-background text-foreground font-sans md:h-screen md:overflow-hidden">
        <div className="md:grid md:grid-rows-[auto_1fr_auto] md:h-full flex flex-col min-h-dvh">
          <Navigation />
          <main className="flex-1 md:overflow-y-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
