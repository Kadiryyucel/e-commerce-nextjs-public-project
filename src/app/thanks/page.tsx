
'use client'
import Image from 'next/image';

import Site from '@/template/Site'

import { Breadcrumbs, Button, Link } from "@mui/material";
import OrderSummaryWidget from "../../components/OrderSummaryWidget";
import PageAlign from "@/layout/PageAlign";


import { Roboto } from 'next/font/google'

import useWhenResize from '@/customHooks/useWhenResize'


import ThaksImg from "../../assets/SecondTemp/thanksImg.png";
import SafeSecureCheckout from '@/components/SafeSecureCheckout';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Thanks() {

    const rows = [
        {
            name: "Name:",
            value: "Oleo Bone"
        },
        {
            name: "Email:",
            value: "Oleo Bone"
        },
        {
            name: "Ship To:",
            value: "4140 Parker Rd. Allentown, New Mexico 31134"
        },
        {
            name: "Bill To:",
            value: "4140 Parker Rd. Allentown, New Mexico 31134"
        },
        {
            name: "Payment:",
            value: "Credit Card"
        }
    ];


    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" >
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/"
        >
            Core
        </Link>,
        <Link underline="hover" key="3" color="inherit" href="/" >
            Shipping & Billing
        </Link>

    ];


    let currentWidth = useWhenResize()

    function MobileOrderSummary() {
        if (currentWidth <= 1024) {
            return <OrderSummaryWidget mobile={true} />
        }
    }

    function DesktopOrderSummary(props:{className:string}) {
        if (currentWidth > 1024) {
            return <div className={`pl-8 relative desktop-order-summary ${props.className}`}>
                <OrderSummaryWidget mobile={false} />
            </div>
        }
    }

    return (
        <>
            <Site>
                <div className={`flex w-full overflow-x-hidden ${roboto.className}`}>
                    <PageAlign
                        left={
                            <>
                                <div className='flex flex-col sm:w-2/4 md:w-6/12 xl:w-full'>
                                    <div className='px-4 md:px-8 xl:mr-8 xl:ml-0'><MobileOrderSummary /></div>
                                    <div className="w-full px-4 md:px-8 xl:mr-8 xl:ml-0">

                                        <div className="flex flex-col py-4 w-full items-center justify-center gap-y-2 py-4">
                                            <div className="flex flex-col w-full justify-center items-center">
                                                <div className="w-8/12 md:w-4/12">
                                                    <Image alt={''} width={400} height={400} className='w-5/6 md:w-11/12 xl:w-full xl:h-full' src={ThaksImg} />
                                                </div>


                                                <div className="flex flex-col justify-center items-center w-full">

                                                    <div className="flex flex-col w-full justify-center items-center pb-4">
                                                        <div className="flex justify-center w-8/12 pt-4 text-center text-xl md:text-4xl">Thank you for your order</div>
                                                        <div className="flex justify-center w-8/12 text-center text-sm"><p className="text-center">Your order is confirmed</p></div>
                                                    </div>


                                                    <div className="flex justify-center pb-4 w-8/12 md:w-6/12 ">
                                                        <Button color="default" variant='contained' className="flex justify-center items-center w-11/12 py-4 rounded-xl">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M15.8333 9.16683H7.5L10.2417 6.42517C10.3198 6.3477 10.3818 6.25553 10.4241 6.15398C10.4664 6.05244 10.4882 5.94351 10.4882 5.8335C10.4882 5.72349 10.4664 5.61457 10.4241 5.51302C10.3818 5.41147 10.3198 5.31931 10.2417 5.24184C10.0855 5.08663 9.87432 4.99951 9.65417 4.99951C9.43401 4.99951 9.2228 5.08663 9.06667 5.24184L5.49167 8.82517C5.17868 9.13629 5.00186 9.55885 5 10.0002C5.00406 10.4386 5.1807 10.8578 5.49167 11.1668L9.06667 14.7502C9.14437 14.8273 9.2365 14.8884 9.33781 14.9299C9.43912 14.9715 9.54762 14.9927 9.65711 14.9923C9.76661 14.9919 9.87496 14.97 9.97597 14.9277C10.077 14.8854 10.1687 14.8237 10.2458 14.746C10.323 14.6683 10.3841 14.5762 10.4256 14.4749C10.4672 14.3735 10.4883 14.265 10.488 14.1555C10.4876 14.0461 10.4656 13.9377 10.4234 13.8367C10.3811 13.7357 10.3194 13.644 10.2417 13.5668L7.5 10.8335H15.8333C16.0543 10.8335 16.2663 10.7457 16.4226 10.5894C16.5789 10.4331 16.6667 10.2212 16.6667 10.0002C16.6667 9.77915 16.5789 9.56719 16.4226 9.41091C16.2663 9.25463 16.0543 9.16683 15.8333 9.16683Z"
                                                                    fill="white" />
                                                            </svg>
                                                            <span className="pl-2 text-xs md:text-lg">Back to Shop</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-item p-10 w-full mt-20 rounded-2xl'>
                                                {rows.map((item: any, index: number) => {
                                                    return (<div className="flex justify-center" key={index}>
                                                        <span className="w-4/12 text-left">{item.name}</span>
                                                        <span className="w-8/12">{item.value}</span>
                                                    </div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block lg:hidden'><SafeSecureCheckout /></div>
                                </div>
                            </>
                        }
                        right={
                            <div className='flex flex-col sm:w-2/4 md:w-6/12 hidden lg:block'>
                                <DesktopOrderSummary className='order-summery-roundded'/>
                                <SafeSecureCheckout className='rounded-2xl'/>
                            </div>
                        }></PageAlign>


                </div>
            </Site >
        </>
    )
} 
