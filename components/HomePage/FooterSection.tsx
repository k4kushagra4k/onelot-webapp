import Image from 'next/image';
import Logo from '../../public/images/logo.png'
import { Facebook, Instagram, ChevronDown } from "lucide-react"
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function FooterSection() {
    return (
        <div>
            <div className="bg-white py-2 md:py-10">
                <div className='hidden md:flex justify-between my-10 px-20'>
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
                <div className="hidden md:block border border-gray-300 border-b-1 my-6"></div>
                <div className='hidden md:flex justify-between  px-20'>
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
            <div className='md:hidden flex items-center gap-1 ml-4 my-5'>
                <Image src={Logo} alt='Image' width={40} height={40}></Image>
                <div className='text-xl font-bold'>OneLot</div>
            </div>
            <div className='md:hidden text-sm text-gray-400 ml-4 my-2 w-5/6'>&copy; 2023 OneLot Technologies Incorporated Pte. Ltd. All rights reserved.
            </div>
            <div className='md:hidden text-sm text-gray-400 ml-4 my-2 w-5/6' >&copy; 2023 OneLot Financing Corporation All rights reserved.
            </div>
        </div>
    )
}
