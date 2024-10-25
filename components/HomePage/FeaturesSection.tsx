import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Image3 from '../../public/images/image3.webp'
import Image4 from '../../public/images/image4.webp'
import DealerLoansIcon from '../../public/images/dlicon.png'
import DealershipMSystemIcon from '../../public/images/dmsicon.png'
import { MoveRight, Check } from "lucide-react"
export default function FeaturesSection() {
    return (
        <div>
            <div className="md:grid grid-cols-2 gap-8 bg-white pt-4 py-2 md:pt-14 md:py-12 ">
                <div className="col-span-1  ">
                    <div className="md:flex mx-auto text-2xl md:text-4xl font-bold w-5/6 md:w-4/6  mb-4">Everything you need to grow
                        your business</div>
                    <div className="flex mx-auto text-base md:text-xl text-gray-400 w-5/6 md:w-4/6 mb-2">OneLot is your trusted lending and financing partner, exclusively tailored for used car dealership. We also offer digital tools for streamlined operations and growth of
                        your dealership.
                    </div>
                    <Button variant="link" className=" text-base font-semibold text-purple-800 ml-4 md:ml-28">Learn more<MoveRight /></Button>
                </div>
                <div className='md:hidden border-t border-gray-200 my-4'></div>
                <div className="col-span-1">
                    <div className="md:flex gap-3 mb-8 w-5/6 md:w-full mx-auto">
                        <div >
                            <Image src={DealerLoansIcon} alt="Image" width={40}></Image>
                        </div>
                        <div>
                            <div className="text-xl font-semibold mt-2 md:mt-0 mb-2 ">Dealer Loans</div>
                            <div className="text-base font-semibold text-cyan-500 mb-2 w-5/6">Accelerate your growth with tailored loan solutions.
                            </div>
                            <div className="text-base text-gray-400 w-5/6">Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights.</div>
                        </div>
                    </div>
                    <div className="md:flex gap-3 mb-8 w-5/6 md:w-full mx-auto">
                        <div>
                            <Image src={DealershipMSystemIcon} alt="Image" width={40}></Image>
                        </div>
                        <div>
                            <div className="text-xl font-semibold mt-2 md:mt-0 mb-2">Dealership Management System
                            </div>
                            <div className="text-base font-semibold text-purple-500 mb-2 w-5/6">Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.
                            </div>
                            <div className="text-base text-gray-400 w-5/6">OneLot offers a suite of powerful digital tools designed to optimize your dealership&apos;s operations.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CAR FINANCING SECTION */}
            <div className="md:grid grid-cols-2 my-10 md:my-20">
                <div className="col-span-1">
                    <Image src={Image3} alt="Image" className="hidden md:block shadow-md rounded-lg mx-auto"></Image>
                </div>
                <div className="col-span-1 flex flex-col mx-auto w-5/6 md:w-4/6">
                    <div className="text-2xl md:text-4xl font-bold  mb-4">Car Financing</div>
                    <div className="text-base md:text-xl font-bold md:font-semibold mb-2">Dealer Loans</div>
                    <div className="text-base md:text-xl text-gray-400 mb-2">OneLot’s working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
                    </div>
                    <div className="border border-gray-300 border-b-1 my-6"></div>
                    <div className="flex gap-2 my-2 ">
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
                    <div className="text-base md:text-xl text-gray-400 mb-2">Use OneLot&apos;s financing solution today, grow the number of cars in your lot, and increase your profits.
                    </div>
                    <div className="my-6">
                        <Button className='text-base'>View Loans<MoveRight /> </Button>
                    </div>
                </div>
                <Image src={Image3} alt="Image" className="md:hidden w-5/6 mx-auto rounded-lg"></Image>
            </div>
            {/* DEALERSHIP MANAGEMENT SYSTEM SECTION */}
            <div className="md:grid grid-cols-2 my-20">
                <div className="col-span-1 flex flex-col mx-auto w-5/6 md:w-4/6">
                    <div className="text-2xl md:text-4xl font-bold  mb-4">Dealership Management System</div>

                    <div className="text-base md:text-xl text-gray-400 mb-2">OneLot’s digital platform has been build with the single
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
                    <div className="text-base md:text-xl text-gray-400 mb-2">Sign-up OneLot’s dealer platform today, and your cars easier</div>
                    <div className="my-6">
                        <Button className='text-base'>Explore now<MoveRight /> </Button>
                    </div>
                </div>
                <div className="col-span-1">
                    <Image src={Image4} alt="Image" className="w-5/6 md:w-full mx-auto rounded-lg"></Image>
                </div>
            </div>
        </div>
    )
}
