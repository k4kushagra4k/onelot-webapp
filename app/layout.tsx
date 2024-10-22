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