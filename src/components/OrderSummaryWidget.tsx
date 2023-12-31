'use client'

import Image from "next/image";
import { useState } from "react";


import one from '@/assets/nike.png'
import two from '@/assets/rightimgsecond.png'
import three from '@/assets/rightimgfirst.png'
import { Badge } from "@mui/material";

export default function OrderSummaryWidget(props: { mobile: boolean ,className?:string}) {

    const { mobile,className } = props

    const [basketProducts, setProducts] = useState([
        { product: { url: one, alt: '', name: 'Nike sneakers', count: 1, price: 69, currency: 'dolar' } },
        { product: { url: two, alt: '', name: 'Nike sneakers', count: 1, price: 69, currency: 'dolar' } },
        { product: { url: three, alt: '', name: 'Nike sneakers', count: 1, price: 69, currency: 'dolar' } }
    ])

    const [open,setToggle] = useState(false);

    return (
        <>
            <div className={`mb-4 lg:m-0 ${className}`}>
                {mobile && <div className="flex w-full justify-between p-6 mb-4 border-2 rounded-2xl" onClick={()=>setToggle(prev=>!prev)}>
                    <div className="flex">
                        <div className="mr-4"><svg data-v-5f8bf7c9="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g data-v-5f8bf7c9="" clipPath="url(#clip0_2220_1440)"><path data-v-5f8bf7c9="" d="M22.713 4.077C22.4317 3.73944 22.0796 3.46795 21.6815 3.28182C21.2835 3.09568 20.8494 2.99946 20.41 3H4.242L4.2 2.649C4.11405 1.91942 3.76338 1.24673 3.21449 0.758478C2.6656 0.270223 1.95663 0.000341793 1.222 0L1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.222C1.46693 2.00003 1.70334 2.08996 1.88637 2.25272C2.06941 2.41547 2.18634 2.63975 2.215 2.883L3.591 14.583C3.73385 15.7998 4.31848 16.9218 5.23391 17.736C6.14934 18.5502 7.33185 19 8.557 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17H8.557C7.93806 16.9983 7.3348 16.8051 6.82994 16.4471C6.32507 16.089 5.94331 15.5835 5.737 15H17.657C18.8293 15.0001 19.9643 14.5882 20.8638 13.8364C21.7633 13.0846 22.37 12.0407 22.578 10.887L23.363 6.533C23.4414 6.10101 23.4237 5.65707 23.3114 5.23264C23.1991 4.80821 22.9948 4.41368 22.713 4.077ZM21.4 6.178L20.614 10.532C20.4891 11.225 20.1245 11.852 19.5839 12.3032C19.0433 12.7544 18.3612 13.0011 17.657 13H5.419L4.478 5H20.41C20.5569 4.99912 20.7022 5.03062 20.8355 5.09226C20.9689 5.15389 21.087 5.24415 21.1815 5.35661C21.276 5.46907 21.3446 5.60097 21.3824 5.74294C21.4201 5.8849 21.4262 6.03344 21.4 6.178Z" fill="url(#paint0_linear_2220_1440)"></path><path data-v-5f8bf7c9="" d="M7.00012 24.001C8.10469 24.001 9.00011 23.1055 9.00011 22.001C9.00011 20.8964 8.10469 20.001 7.00012 20.001C5.89555 20.001 5.00012 20.8964 5.00012 22.001C5.00012 23.1055 5.89555 24.001 7.00012 24.001Z" fill="url(#paint1_linear_2220_1440)"></path><path data-v-5f8bf7c9="" d="M17 24.001C18.1046 24.001 19 23.1055 19 22.001C19 20.8964 18.1046 20.001 17 20.001C15.8954 20.001 15 20.8964 15 22.001C15 23.1055 15.8954 24.001 17 24.001Z" fill="url(#paint2_linear_2220_1440)"></path></g><defs data-v-5f8bf7c9=""><linearGradient data-v-5f8bf7c9="" id="paint0_linear_2220_1440" x1="1.56074" y1="19" x2="21.5577" y2="19" gradientUnits="userSpaceOnUse"><stop data-v-5f8bf7c9="" stopColor="#4EFDEA"></stop><stop data-v-5f8bf7c9="" offset="1" stopColor="#5766FF"></stop></linearGradient><linearGradient data-v-5f8bf7c9="" id="paint1_linear_2220_1440" x1="5.26679" y1="24.001" x2="8.68345" y2="24.001" gradientUnits="userSpaceOnUse"><stop data-v-5f8bf7c9="" stopColor="#4EFDEA"></stop><stop data-v-5f8bf7c9="" offset="1" stopColor="#5766FF"></stop></linearGradient><linearGradient data-v-5f8bf7c9="" id="paint2_linear_2220_1440" x1="15.2667" y1="24.001" x2="18.6833" y2="24.001" gradientUnits="userSpaceOnUse"><stop data-v-5f8bf7c9="" stopColor="#4EFDEA"></stop><stop data-v-5f8bf7c9="" offset="1" stopColor="#5766FF"></stop></linearGradient><clipPath data-v-5f8bf7c9="" id="clip0_2220_1440"><rect data-v-5f8bf7c9="" width="24" height="24" fill="white"></rect></clipPath></defs></svg></div>
                        <div className="mr-4 text-sm"><span>Show <span className="hidden sm:inline-block">order</span> summary</span></div>
                        <div className="flex items-center"><svg data-v-5f8bf7c9="" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-5f8bf7c9="" d="M13.7099 1.20986C13.6169 1.11613 13.5063 1.04174 13.3845 0.990969C13.2626 0.9402 13.1319 0.914062 12.9999 0.914062C12.8679 0.914062 12.7372 0.9402 12.6153 0.990969C12.4934 1.04174 12.3828 1.11613 12.2899 1.20986L7.70988 5.78985C7.61691 5.88358 7.50631 5.95797 7.38445 6.00874C7.2626 6.05951 7.13189 6.08565 6.99988 6.08565C6.86787 6.08565 6.73716 6.05951 6.6153 6.00874C6.49344 5.95797 6.38284 5.88358 6.28988 5.78985L1.70988 1.20986C1.61691 1.11613 1.50631 1.04174 1.38445 0.990969C1.26259 0.9402 1.13189 0.914062 0.999877 0.914062C0.867865 0.914062 0.737159 0.9402 0.6153 0.990969C0.493441 1.04174 0.38284 1.11613 0.289877 1.20986C0.103626 1.39722 -0.000915527 1.65067 -0.000915527 1.91486C-0.000915527 2.17904 0.103626 2.4325 0.289877 2.61986L4.87988 7.20985C5.44238 7.77165 6.20487 8.08721 6.99988 8.08721C7.79488 8.08721 8.55738 7.77165 9.11988 7.20985L13.7099 2.61986C13.8961 2.4325 14.0007 2.17904 14.0007 1.91486C14.0007 1.65067 13.8961 1.39722 13.7099 1.20986Z" fill="#979AB8"></path></svg></div>
                    </div>
                    <div>$362.76</div>
                </div>}
                {(!mobile || open) && <div className="relative z-10 py-6 lg:pb-6 lg:pt-0 px-4 md:mb-8 bg-zinc-50 rounded-2xl">
                    <div className="py-4">{
                        basketProducts.map(({ product },i) => {
                            return (
                                <div key={i}>
                                    <div className="flex justify-between my-4">
                                        <div className="flex w-10/12">
                                            <div className="w-2/12">
                                                <Badge badgeContent={4} color="primary" className="w-full">
                                                    <Image
                                                        className="w-full"
                                                        alt={product.alt || ""}
                                                        src={product.url}

                                                    />
                                                </Badge>
                                            </div>
                                            <span className="flex items-center ml-2 md:w-8/12">{product.name}</span>
                                        </div>

                                        <div className="flex items-center"><span>{product.price}</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>
                    <div className="flex flex-col gap-y-2 py-4 info-discount">
                        <div className="flex justify-between">
                            <span>Subtotal</span><span>$138.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span><span>--</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discoount</span><span>--</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between pt-4 total">
                            <span><b>Total</b></span><span>$138.00</span>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}