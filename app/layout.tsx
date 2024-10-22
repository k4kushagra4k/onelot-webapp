import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import * as React from 'react'
import Navbar from "@/components/ui/navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fast loans for used car dealers in the Philippines",
  description: "",
};
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dealer Inventory Loans",
    href: "/",
    description:
      "Discover how OneLot's comprehensive car financing solutions can propel your dealership to new heights. OneLot’s dealer inventory loans are flexible and individually tailored for each car purchasing opportunity you have, enabling dealerships to grow their business effectively.",
  },
  {
    title: "Dealer Management System",
    href: "/",
    description:
      "Learn more about OneLot's Dealership Management System (DMS) and how it can help you grow your business. The DMS offers a set of tools to manage your car inventory, get insights on car prices and market your cars across multiple sales channels.",
  },
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="border border-gray-300 border-b-1 mt-4"></div>
        {children}
      </body>
    </html>
  );
}