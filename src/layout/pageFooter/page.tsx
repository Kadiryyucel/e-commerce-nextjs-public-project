import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

import SafeSecureCheckout from '@/components/SafeSecureCheckout'

export default function PageFooter() {

    const [valueSection, setFooterSection] = useState<null | number>(null)

    return (
        <>
            <div className='hidden lg:flex gap-x-4 w-full justify-around products mt-24'>
                <div className='flex flex-col gap-y-2 cursor-pointer'>
                    <h2>Help</h2>
                    <div>Shop online</div>
                    <div>Payment</div>
                    <div>Delivery</div>
                    <div>Returns</div>
                    <div>Guest purchase</div>
                    <div>Electronic receipt</div>
                </div>

                <div className='flex flex-col gap-y-2 cursor-pointer'>
                    <h2>We are MAMA</h2>
                    <div>About BERSHKA</div>
                    <div>Sustainability</div>
                    <div>Work with us</div>
                    <div>Press</div>
                </div>

                <div className='flex flex-col gap-y-2 cursor-pointer'>
                    <h2>MAMA</h2>
                    <div>You might be interested in</div>
                    <div>Dresses</div>
                    <div>Jackets</div>
                    <div>Coats</div>
                    <div>Sweaters and cardigans</div>
                    <div>Baggy</div>
                    <div>Trousers</div>
                </div>
            </div>

            <div className='flex lg:hidden flex-col w-full px-4 justify-around products mt-8'>
                <div className={`flex flex-col gap-y-2 overflow-hidden cursor-pointer ${valueSection == 1 ? 'min-h-1' : 'max-h-16'}`}>
                    <div className='flex items-center justify-between' onClick={() => {
                        if (valueSection == 1) {
                            setFooterSection(null)
                            return
                        }
                        setFooterSection(1)
                    }}>
                        <h2 className='text-base md:text-2xl'>Help</h2>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>
                    <div>Shop online</div>
                    <div>Payment</div>
                    <div>Delivery</div>
                    <div>Returns</div>
                    <div>Guest purchase</div>
                    <div>Electronic receipt</div>
                </div>

                <div className={`flex flex-col gap-y-2 overflow-hidden cursor-pointer ${valueSection == 2 ? 'min-h-1' : 'max-h-16'}`}>
                    <div className='flex items-center justify-between' onClick={() => {
                        if (valueSection == 2) {
                            setFooterSection(null)
                            return
                        }
                        setFooterSection(2)
                    }}>
                        <h2 className='text-base md:text-2xl'>We are MAMA</h2>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>
                    <div>About BERSHKA</div>
                    <div>Sustainability</div>
                    <div>Work with us</div>
                    <div>Press</div>
                </div>

                <div className={`flex flex-col gap-y-2 overflow-hidden cursor-pointer ${valueSection == 3 ? 'min-h-1' : 'max-h-16'}`}>
                    <div className='flex items-center justify-between' onClick={() => {
                        if (valueSection == 3) {
                            setFooterSection(null)
                            return
                        }
                        setFooterSection(3)
                    }}>
                        <h2 className='text-base md:text-2xl'>MAMA</h2>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>
                    <div>You might be interested in</div>
                    <div>Dresses</div>
                    <div>Jackets</div>
                    <div>Coats</div>
                    <div>Sweaters and cardigans</div>
                    <div>Baggy</div>
                    <div>Trousers</div>
                </div>
            </div>
            <div className='flex justify-center'>
                <SafeSecureCheckout className='w-8/12 md:w-8/12 lg:w-6/12 xl:w-4/12 !bg-transparent' showText={false}></SafeSecureCheckout>
            </div>
        </>
    )
}