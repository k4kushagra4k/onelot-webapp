"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Image1 from '../public/images/image1.webp'
import Image2 from '../public/images/image2.webp'
import Image3 from '../public/images/image3.webp'
import Image4 from '../public/images/image4.webp'
import Image5 from '../public/images/image5.png'
import DealerLoansIcon from '../public/images/dlicon.png'
import DealershipMSystemIcon from '../public/images/dmsicon.png'
import DemoAvatar from '../public/images/avatar.webp'
import Logo from '../public/images/logo.png'
import { MoveRight, Check, LockKeyhole, TrendingUp, HandCoins, Zap, Handshake, Facebook, Instagram, CircleHelp, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <div className="flex mx-auto text-3xl md:text-5xl text-center font-bold w-5/6 md:mt-20">Grow your dealership with working capital loans and
        digital tools from OneLot</div>
      <div className="flex mx-auto text-lg md:text-xl text-center text-gray-400 w-5/6 md:w-1/2 mt-10"> We enable dealers to buy more cars through our working capital loan solutions and
        sell cars more efficiently through our Dealership Management System with its
        inventory management, marketing solutions and market insights
      </div>
      <div className="flex justify-center my-6">
        <Button className='text-base'>Inquire Now</Button>
      </div>
      <Image src={Image1} alt='Image' className="w-full md:w-5/6 mx-auto my-6" />
      <div className="flex flex-col items-center my-6">
        <div className="text-sm md:text-base font-semibold text-gray-400">Regulated by</div>
        <Image src={Image2} alt='Image' className="w-48" />
      </div>
      <div className="border-t border-gray-200 "></div>
      <div className="md:grid grid-cols-2 bg-white py-10">
        <div className="col-span-1 ">
          <div className="md:flex mx-auto text-2xl md:text-4xl font-bold w-5/6 md:w-4/6  mb-4">Everything you need to grow
            your business</div>
          <div className="flex mx-auto text-base md:text-xl text-gray-400 w-5/6 md:w-4/6 mb-2">OneLot is your trusted lending and financing partner, exclusively tailored for used car dealership. We also offer digital tools for streamlined operations and growth of
            your dealership.
          </div>
          <Button variant="link" className=" text-base font-semibold text-purple-800 ml-4 md:ml-28">Learn more<MoveRight /></Button>
        </div>
        <div className='md:hidden border-t border-gray-200 my-4'></div>
        <div className="col-span-1">
          <div className="md:flex gap-3 mb-8 ml-4 md:ml-0">
            <div >
              <Image src={DealerLoansIcon} alt="Image" width={40}></Image>
            </div>
            <div>
              <div className="text-xl font-semibold mt-2 md:mt-0 mb-2 ">Dealer Loans</div>
              <div className="text-base font-semibold text-cyan-500 mb-2">Accelerate your growth with tailored loan solutions.
              </div>
              <div className="text-base text-gray-400 w-4/5">Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights.</div>
            </div>
          </div>
          <div className="md:flex gap-3 ml-4 md:ml-0">
            <div>
              <Image src={DealershipMSystemIcon} alt="Image" width={40}></Image>
            </div>
            <div>
              <div className="text-xl font-semibold mt-2 md:mt-0 mb-2">Dealership Management System
              </div>
              <div className="text-base font-semibold text-purple-500 mb-2">Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.
              </div>
              <div className="text-base text-gray-400 w-4/5">OneLot offers a suite of powerful digital tools designed to optimize your dealership&apos;s operations.</div>
            </div>
          </div>
        </div>
      </div>
      {/* CAR FINANCING SECTION */}
      <div className="grid grid-cols-2 my-20">
        <div className="col-span-1">
          <Image src={Image3} alt="Image" className="shadow-md rounded-lg"></Image>
        </div>
        <div className="col-span-1 flex flex-col mx-auto w-4/6">
          <div className="text-4xl font-bold  mb-4">Car Financing</div>
          <div className="text-xl font-semibold mb-2">Dealer Loans</div>
          <div className="text-xl text-gray-400 mb-2">OneLot’s working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
          </div>
          <div className="border border-gray-300 border-b-1 my-6"></div>
          <div className="flex gap-2 my-2">
            <div>
              <Check className="bg-purple-200 rounded-full p-1 text-purple-800" />
            </div>
            <div className="text-base font-semibold">Interest as low as 1.8% per month with daily calculation of interest</div>
          </div>
          <div className="flex gap-2 my-2">
            <div>
              <Check className="bg-purple-200 rounded-full p-1 text-purple-800" />
            </div>
            <div className="text-base font-semibold">Financing up to 70% of the vehicle purchase</div>
          </div>
          <div className="flex gap-2 my-2">
            <div>
              <Check className="bg-purple-200 rounded-full p-1 text-purple-800" />
            </div>
            <div className="text-base font-semibold">Financing period up to 90 days with a flexible repayment schedule at any point</div>
          </div>
          <div className="border border-gray-300 border-b-1 my-6"></div>
          <div className="text-xl text-gray-400 mb-2">Use OneLot&apos;s financing solution today, grow the number of cars in your lot, and increase your profits.
          </div>
          <div className="my-6">
            <Button className='text-base'>View Loans<MoveRight /> </Button>
          </div>
        </div>
      </div>
      {/* DEALERSHIP MANAGEMENT SYSTEM SECTION */}
      <div className="grid grid-cols-2 my-20">
        <div className="col-span-1 flex flex-col mx-auto w-4/6">
          <div className="text-4xl font-bold  mb-4">Dealership Management
            System</div>
          {/* <div className="text-xl font-semibold mb-2">Dealer Loans</div> */}
          <div className="text-xl text-gray-400 mb-2">OneLot’s digital platform has been build with the single
            goal to help used car dealers to operate their business
            more efficiently.
          </div>
          <div className="border border-gray-300 border-b-1 my-6"></div>
          <div className="flex gap-2 my-2">
            <div>
              <Check className="bg-purple-200 rounded-full p-1 text-purple-800" />
            </div>
            <div>
              <span className="text-base font-semibold">Inventory Management: </span>
              <span>Track all details about your cars and sales
                in one place - from car details to buyers. All you need to now in one
                place</span>
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <div>
              <Check className="bg-purple-200 rounded-full p-1 text-purple-800" />
            </div>
            <div>
              <span className="text-base font-semibold">Marketing Tools: </span>
              <span> Promote your cars across all the different
                platforms. Write a marketing text and upload on Facebook
                Marketplace, Groups, Pages and Instagram with a single click of a
                button</span>
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <div>
              <Check className="bg-purple-200 rounded-full p-1 text-purple-800" />
            </div>
            <div>
              <span className="text-base font-semibold">Market Insights (Coming Soon): </span>
              <span>Get insights on prices and
                volumes for all cars in the market. We provide you all the date by
                combining data from various sources with a single click of a
                button</span>
            </div>
          </div>
          <div className="border border-gray-300 border-b-1 my-6"></div>
          <div className="text-xl text-gray-400 mb-2">Sign-up OneLot’s dealer platform today, and your cars easier</div>
          <div className="my-6">
            <Button className='text-base'>Explore now<MoveRight /> </Button>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={Image4} alt="Image" className="shadow-md rounded-lg"></Image>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="text-4xl text-center font-bold  my-10 ">Why Onelot?</div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mx-20 my-10">
          <div className="col-span-1 text-center border border-gray-300 border-2 shadow-md rounded-lg p-4 h-60">
            <div className="flex justify-center my-1">
              <LockKeyhole className="bg-purple-200 p-2 w-12 h-12 rounded-lg text-purple-800 " />
            </div>
            <div className="text-lg font-semibold my-2">Trust</div>
            <div className="text-base text-gray-400 my-2 px-2">
              Regulated by Securities and Exchange Commission (SEC) Philippines
            </div>
          </div>
          <div className="col-span-1 text-center border border-gray-300 border-2 shadow-md rounded-lg p-4 h-60">
            <div className="flex justify-center my-1">
              <TrendingUp className="bg-purple-200 p-2 w-12 h-12 rounded-lg text-purple-800 " />
            </div>
            <div className="text-lg font-semibold my-2">High Amount

            </div>
            <div className="text-base text-gray-400 my-2 px-2">
              Get the highest loan amounts compared to other banks and lenders
            </div>
          </div>
          <div className="col-span-1 text-center border border-gray-300 border-2 shadow-md rounded-lg p-4 h-60">
            <div className="flex justify-center my-1">
              <Zap className="bg-purple-200 p-2 w-12 h-12 rounded-lg text-purple-800 " />
            </div>
            <div className="text-lg font-semibold my-2">Fast</div>
            <div className="text-base text-gray-400 my-2 px-2">
              Get the money within a few hours on the same day
            </div>
          </div>
          <div className="col-span-1 text-center border border-gray-300 border-2 shadow-md rounded-lg p-4 h-60">
            <div className="flex justify-center my-1">
              <HandCoins className="bg-purple-200 p-2 w-12 h-12 rounded-lg text-purple-800 " />
            </div>
            <div className="text-lg font-semibold my-2">Flexible</div>
            <div className="text-base text-gray-400 my-2 px-2">
              Loans are tailored to your needs
            </div>
          </div>
          <div className="col-span-1 text-center border border-gray-300 border-2 shadow-md rounded-lg p-4 h-60">
            <div className="flex justify-center my-1">
              <Handshake className="bg-purple-200 p-2 w-12 h-12 rounded-lg text-purple-800 " />
            </div>
            <div className="text-lg font-semibold my-2">Easy</div>
            <div className="text-base text-gray-400 my-2 px-2">
              Run through an easy process and get your first loans within days
            </div>
          </div>
        </div>
      </div>
      <div className="text-4xl text-center font-bold  mt-10 ">Testimonials </div>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-full"
          opts={{
            align: "center",
            loop: true,
          }}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-gray-100">
                    <CardContent className="flex flex-col items-center p-6">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={DemoAvatar.src} alt="Avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="text-2xl text-center font-semibold my-2 w-7/12 p-2">“The service of OneLot is top notch, they act fast and can provide
                        dealers with the funds they need, when they need it.”</div>
                      <div className="flex items-center gap-4">
                        <div className="text-base font-semibold">Mark Vergel de Dios </div>
                        <div className=" text-gray-400">Owner, MVD Auto Works</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center  mb-4">
            <CarouselPrevious className="text-gray-400" />
            <CarouselNext className="text-gray-400" />
          </div>
        </Carousel>
      </div>
      <div className="bg-white py-10">
        <div className="text-4xl text-center font-bold  my-10">Stay connected</div>
        <div className="flex mx-auto text-xl text-center text-gray-400 w-2/5">Follow OneLot on our Facebook and Instagram page and stay up to
          date with our most recent recent offers, updates and new product
          features
        </div>
        <div className="flex justify-center items-center gap-2 my-6 ">
          <Button variant="outline"><Facebook /> Follow us on Facebook</Button>
          <Button variant="outline"><Instagram /> Follow us on Instagram</Button>
        </div>
        <div className="w-full max-w-full my-10">
          <Image src={Image5} alt="Image"></Image>
        </div>
      </div>
      <div className="text-4xl text-center font-bold  mt-10 ">Frequently asked questions
      </div>
      <div className="mx-auto max-w-4xl my-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger >
              <div className="flex items-center gap-1">
                <CircleHelp />
                <div className="text-base font-semibold">How do I apply for a loan? </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-gray-400">
                OneLot onboarding is easy and straightforward onboarding process. We only require a
                few documents and after a few days you can get your first loan.</div>
              <div className="text-gray-400">Check here for the exact requirements <span className="text-purple-800 font-semibold"> See full requirements.</span></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger >
              <div className="flex items-center gap-1">
                <CircleHelp />
                <div className="text-base font-semibold">What are the interest rates offered? </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-gray-400">
                OneLot onboarding is easy and straightforward onboarding process. We only require a
                few documents and after a few days you can get your first loan.</div>
              <div className="text-gray-400">Check here for the exact requirements <span className="text-purple-800 font-semibold"> See full requirements.</span></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger >
              <div className="flex items-center gap-1">
                <CircleHelp />
                <div className="text-base font-semibold">What kind of vehicles can I upload?
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-gray-400">
                OneLot onboarding is easy and straightforward onboarding process. We only require a
                few documents and after a few days you can get your first loan.</div>
              <div className="text-gray-400">Check here for the exact requirements <span className="text-purple-800 font-semibold"> See full requirements.</span></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger >
              <div className="flex items-center gap-1">
                <CircleHelp />
                <div className="text-base font-semibold">How can I keep track of potential buyers?

                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-gray-400">
                OneLot onboarding is easy and straightforward onboarding process. We only require a
                few documents and after a few days you can get your first loan.</div>
              <div className="text-gray-400">Check here for the exact requirements <span className="text-purple-800 font-semibold"> See full requirements.</span></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center my-6">
          <Button className='text-base'>See all<MoveRight /> </Button>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="text-4xl text-center font-bold  my-10">Get started today
        </div>
        <div className="flex mx-auto text-xl text-center text-gray-400 w-2/5">We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
        </div>
        <div className="flex justify-center my-6">
          <Button className='text-base'>Inquire Now </Button>
        </div>
        {/* . */}
        <div className='flex justify-between mt-36 mb-10 px-20'>
          <div className='flex items-center gap-1'>
            <Image src={Logo} alt='Image' width={60} height={60}></Image>
            <div className='text-2xl font-bold'>OneLot</div>
          </div>
          <div>
            <div className='flex items-center gap-6 my-4'>
              <div className='text-lg text-gray-400'>Home</div>
              <div className='text-lg text-gray-400'>Features</div>
              <div className='text-lg text-gray-400'>About</div>
              <div className='text-lg text-gray-400'>Contact</div>
            </div>

            <div className='flex items-center justify-end my-4'>
              <span className='text-sm mr-1'>ENG </span>
              <span className="fi fi-us"></span>
              <ChevronDown />
            </div>

          </div>
        </div>
        <div className="border border-gray-300 border-b-1 my-6"></div>
        <div className='flex justify-between  px-20'>
          <div>
            <div className='text-gray-400'>&copy; 2023 OneLot Technologies Incorporated Pte. Ltd. All rights reserved.
            </div>
            <div className='text-gray-400'>&copy; 2023 OneLot Financing Corporation All rights reserved.
            </div>
          </div>
          <div className='flex items-center gap-6 self-end'>
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}