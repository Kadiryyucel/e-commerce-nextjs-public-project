

import Image, { StaticImageData } from 'next/image'

import masterCard from "../assets/masterCard.png";
import visaCard from "../assets/visaCard.png";
import paypalCard from "../assets/paypalCard.png";
import amexCard from "../assets/amexCard.png";
import jcbCard from "../assets/jcbCard.png";
import oiCard from "../assets/oiCard.png";

import { IoLockClosedOutline } from "react-icons/io5";

export default function SafeSecureCheckout(props:{className?:string}) {

    const { className } = props

    const supportedPay = [
        masterCard,
        visaCard,
        paypalCard,
        amexCard,
        jcbCard,
        oiCard
    ]

    return (
        <>
            <div className={`flex flex-col justify-center gap-y-4 px-4 mt-8 h-32 bg-item ${className}`}>
                <div className='flex justify-center items-center w-full'>
                    <div><IoLockClosedOutline size={32}/></div>
                    <div className='text-sm md:text-base xl:text-lg'>Guaranteed Safe & Secure Checkout</div>
                </div>
                <div>
                    <div className='flex w-full gap-x-4 md:px-28 lg:px-10'>
                        {supportedPay.map((x:StaticImageData,index:number) => {
                            return (
                                <div key={index}><Image
                                    width={250}
                                    height={250}
                                    alt={""}
                                    src={x}
                                /></div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}