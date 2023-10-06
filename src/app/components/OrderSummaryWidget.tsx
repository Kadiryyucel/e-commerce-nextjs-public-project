'use client'

import Image from "next/image";
import { useState } from "react";


import one from '@/app/assets/nike.png'
import two from '@/app/assets/rightimgsecond.png'
import three from '@/app/assets/rightimgfirst.png'
import { Badge } from "@mui/material";

export default function OrderSummaryWidget() {

    const [basketProducts, setProducts] = useState([
        { product: { url: one, alt: '', name: 'Nike sneakers', count: 1, price: 69, currency: 'dolar' } },
        { product: { url: two, alt: '', name: 'Nike sneakers', count: 1, price: 69, currency: 'dolar' } },
        { product: { url: three, alt: '', name: 'Nike sneakers', count: 1, price: 69, currency: 'dolar' } }
    ])
    return (
        <>
            <div>
                <div className="py-4">{
                    basketProducts.map(({ product }) => {
                        return (
                            <div>
                                <div className="flex justify-between my-4">
                                    <div>
                                        <Badge badgeContent={4} color="primary">
                                            <Image
                                                width={48}
                                                height={48}
                                                alt={product.alt || ""}
                                                src={product.url}

                                            />
                                        </Badge>
                                        <span className="ml-2">{product.name}</span>
                                    </div>

                                    <div><span>{product.price}</span></div>
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
            </div>
        </>
    )
}