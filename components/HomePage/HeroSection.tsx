import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Image1 from '../../public/images/image1.webp'
import Image2 from '../../public/images/image2.webp'
export default function HeroSection() {
    return (
        <div>
            <div className="flex mx-auto text-3xl md:text-5xl text-center font-bold w-5/6 md:mt-20">Grow your dealership with working capital loans and
                digital tools from OneLot</div>
            <div className="flex mx-auto text-lg md:text-xl text-center text-gray-400 w-5/6 md:w-1/2 mt-10"> We enable dealers to buy more cars through our working capital loan solutions and
                sell cars more efficiently through our Dealership Management System with its
                inventory management, marketing solutions and market insights
            </div>
            <div className="flex justify-center my-6">
                <Button className='text-base'>Inquire Now</Button>
            </div>
            <Image src={Image1} alt='Image' className="w-5/6 mx-auto my-6" />
            <div className="flex flex-col items-center my-6">
                <div className="text-sm md:text-base font-semibold text-gray-400">Regulated by</div>
                <Image src={Image2} alt='Image' className="w-48" />
            </div>
            <div className="border-t border-gray-200 "></div>
        </div>
    )
}
