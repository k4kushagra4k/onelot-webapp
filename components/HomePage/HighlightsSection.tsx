"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Image5 from '../../public/images/image5.png'
import DemoAvatar from '../../public/images/avatar.webp'
import {  LockKeyhole, TrendingUp, HandCoins, Zap, Handshake, Facebook, Instagram, } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function HighlightsSection() {
    return (
        <div>
            <div className="bg-white py-2 md:py-10">
                <div className="text-2xl md:text-4xl text-center font-bold my-5 md:my-10 ">Why Onelot?</div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mx-6 my-5 md:mx-20 md:my-10">
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
            <div className="text-2xl md:text-4xl text-center font-bold  mt-10 ">Testimonials </div>
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
                                            <div className="text-lg md:text-2xl text-center font-semibold my-2 w-5/6 md:w-7/12 md:p-2">“The service of OneLot is top notch, they act fast and can provide
                                                dealers with the funds they need, when they need it.”</div>
                                            <div className="md:flex items-center gap-4">
                                                <div className="text-base font-semibold text-center">Mark Vergel de Dios </div>
                                                <div className=" text-gray-400 text-center">Owner, MVD Auto Works</div>
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
            <div className="bg-white py-2 md:py-10">
                <div className="text-2xl md:text-4xl text-center font-bold  my-5 md:my-10">Stay connected</div>
                <div className="flex mx-auto text-xl text-center text-gray-400 w-5/6 md:w-2/5">Follow OneLot on our Facebook and Instagram page and stay up to
                    date with our most recent recent offers, updates and new product
                    features
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-6">
                    <Button variant="outline" ><Facebook /> Follow us on Facebook</Button>
                    <Button variant="outline"><Instagram /> Follow us on Instagram</Button>
                </div>
                <div className="w-full mx-auto  my-10">
                    <Image src={Image5} alt="Image"></Image>
                </div>
            </div>
        </div>
    )
}
