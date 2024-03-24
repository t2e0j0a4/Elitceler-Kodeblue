import AppState from "@/context/AppContext";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Top Loader
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Kode Blue Technnologies | Admin Dashboard",
  description: "Dashboard of Kode Blue technologies for your hospital admin panel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader showSpinner={false} color="#335EE9" height={4} crawl crawlSpeed={12} easing="ease" />
        <AppState>
          {children}
        </AppState>
      </body>
    </html>
  );
}
