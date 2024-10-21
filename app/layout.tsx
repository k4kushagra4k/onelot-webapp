import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import * as React from 'react'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuElement,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
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
        <div className="flex justify-between bg-gray-100">
          {/* Left side */}
          <div className="flex items-center gap-5 ">
            <Link href="/" legacyBehavior passHref>
              <div className="flex items-center gap-1 ml-4 mt-4 cursor-pointer">
                <Image src='/images/logo.webp' alt="Company Logo" width={35} height={35} />
                <strong className="font-bold text-lg">OneLot</strong>
              </div>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuElement>
                      Home
                    </NavigationMenuElement>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuElement>About
                    </NavigationMenuElement>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuElement>Contact
                    </NavigationMenuElement>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2 mt-4 mr-4">
            <Button variant="ghost" className="font-semibold text-base text-gray-700 ">Log In</Button>
            <Button className='text-base '>Inquire Now</Button>
          </div>
        </div>
        <div className="border border-gray-300 border-b-1 mt-4"></div>
        {children}
      </body>
    </html>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-purple-700 focus:bg-accent focus:text-purple-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"