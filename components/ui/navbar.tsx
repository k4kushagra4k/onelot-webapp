'use client';
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
import Logo from '../../public/images/logo.png'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
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
export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="flex justify-between items-center ">
                {/* Left side */}
                <div className="flex items-center gap-5 ">
                    <Link href="/" legacyBehavior passHref>
                        <div className="flex items-center gap-1 ml-4 mt-4 cursor-pointer">
                            <Image src={Logo} alt="Company Logo" width={45} height={45} />
                            <strong className="font-bold text-xl">OneLot</strong>
                        </div>
                    </Link>
                    <div className="hidden md:block">
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
                </div>
                {/* Right side */}
                <div className="hidden md:flex items-center gap-2 mt-4 mr-4">
                    <Button variant="ghost" className="font-semibold text-base text-gray-700 ">Log In</Button>
                    <Button className='text-base '>Inquire Now</Button>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden mr-4 mt-4">
                    <button onClick={toggleMenu}>
                        <Menu className='w-8 h-8'/>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 text-white`}>
                <NavigationMenu >
                    <NavigationMenuList className='flex flex-col'>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuElement >
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
                {/* <div className="border-t border-gray-300  my-4 "></div> */}

                <div className='flex flex-col items-center px-2'>
                <Button className='text-base w-full'>Inquire Now</Button>
                    <Button variant="ghost" className="font-semibold text-base text-gray-700 ">Log In</Button>
                    
                </div>
            </div>
            <div className="border-t border-gray-200  my-4 "></div>
        </>
    )
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