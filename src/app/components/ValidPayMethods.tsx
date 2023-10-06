'use client'

import Image from 'next/image'

import googlePay from "../assets/GooglePay.png";
import payPal from "../assets/Paypal.png";
import shopPay from "../assets/ShopPay.png";

import shopPaySecondTemp from "../assets/SecondTemp/shopPay.png";
import paypalSecondTemp from "../assets/SecondTemp/paypal.png";
import googlePaySecondTemp from "../assets/SecondTemp/googlePay.png";

export default function ValidPayMethods(props: { payMethods:any }) {

    let cards = [shopPay, payPal, googlePay]

    const { payMethods=cards } = props
    return (
        <div className='border-2 rounded-3xl p-4'>
            <h2 className='font-700 m-0 pb-2'>Express Checkout</h2>
            <div className="flex flex-wrap [&>*:not(:last-child)]:pr-2">
                {(payMethods).map((x:any) =>
                    < Image
                        src={x}
                        alt="Picture of the author"
                        className='md:w-1/3 '
                    />)}
            </div>
        </div>
    )
}