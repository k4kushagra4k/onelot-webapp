import { Button } from "@/components/ui/button"
import { MoveRight, Facebook, Instagram, CircleHelp } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function FAQSection() {
    return (
        <div>
            <div className=" text-2xl md:text-4xl text-center font-bold  mt-10 ">Frequently asked questions
            </div>
            <div className="mx-auto w-5/6 md:max-w-4xl my-10">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger >
                            <div className="flex gap-1">
                                <CircleHelp />
                                <div className="text-base font-semibold text-left">How do I apply for a loan?</div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="text-gray-400">
                                OneLot onboarding is easy and straightforward onboarding process. We only require a
                                few documents and after a few days you can get your first loan.</div>
                            <div className="text-gray-400">Check here for the exact requirements <span className="block md:inline text-purple-800 font-semibold"> See full requirements.</span></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger >
                            <div className="flex gap-1">
                                <CircleHelp />
                                <div className="text-base font-semibold text-left">What are the interest rates offered? </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="text-gray-400">
                                OneLot onboarding is easy and straightforward onboarding process. We only require a
                                few documents and after a few days you can get your first loan.</div>
                            <div className="text-gray-400">Check here for the exact requirements <span className="block md:inline text-purple-800 font-semibold"> See full requirements.</span></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger >
                            <div className="flex items-center gap-1">
                                <CircleHelp />
                                <div className="text-base font-semibold text-left">What kind of vehicles can I upload?
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="text-gray-400 ">
                                OneLot onboarding is easy and straightforward onboarding process. We only require a
                                few documents and after a few days you can get your first loan.</div>
                            <div className="text-gray-400">Check here for the exact requirements <span className="block md:inline text-purple-800 font-semibold"> See full requirements.</span></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger >
                            <div className="flex items-center gap-1">
                                <CircleHelp />
                                <div className="text-base font-semibold text-left">How can I keep track of potential buyers?

                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="text-gray-400">
                                OneLot onboarding is easy and straightforward onboarding process. We only require a
                                few documents and after a few days you can get your first loan.</div>
                            <div className="text-gray-400">Check here for the exact requirements <span className="block md:inline text-purple-800 font-semibold"> See full requirements.</span></div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="flex justify-center my-6">
                    <Button className='text-base'>See all<MoveRight /> </Button>
                </div>
            </div>
            <div className="bg-white py-2 md:py-10">
                <div className="text-2xl md:text-4xl text-center font-bold  my-5 md:my-10">Get started today
                </div>
                <div className="flex mx-auto text-xl text-center text-gray-400 w-5/6 md:w-2/5">We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
                </div>
                <div className="flex justify-center my-6">
                    <Button className='text-base'>Inquire Now </Button>
                </div>
            </div>
        </div>
    )
}
