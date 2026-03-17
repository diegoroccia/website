import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { ThemeProvider } from "./components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans md:h-screen md:overflow-hidden">
        <ThemeProvider defaultTheme="dark">
          <div className="flex flex-col h-dvh md:grid md:grid-rows-[auto_1fr_auto] md:h-full">
            <Navigation />
            <main className="flex-1 min-h-0 md:overflow-y-auto pb-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
