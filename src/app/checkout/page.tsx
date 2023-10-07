
'use client'

import { Breadcrumbs, Button, Link } from "@mui/material";
import OrderSummaryWidget from "../components/OrderSummaryWidget";
import PageAlign from "../components/PageAlign";
import ShippingAddress from "../components/ShippingAddress";
import ValidPayMethods from "../components/ValidPayMethods";

import { Roboto } from 'next/font/google'
import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Checkout() {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" >
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
        >
            Core
        </Link>,
        <div>
            Shipping & Billing
        </div>
    ];

    const [currentWidth, setCurrentWidth] = useState(0)
    useEffect(() => {
        let debaounce = 500
        let currentBuffer: NodeJS.Timeout;
        function whenResize() {
            clearTimeout(currentBuffer)
            currentBuffer = setTimeout(() => {
                let currentWidth = window.innerWidth;

                setCurrentWidth(currentWidth)
                console.log('Tarayıcı genişliği değişti. Yeni genişlik: ' + currentWidth);
            }, debaounce)
        }

        window.addEventListener('resize', whenResize);
        return () => window.removeEventListener('resize', whenResize)
    }, [])

    function MobileOrderSummary() {
        if (currentWidth <= 1024) {
            return <OrderSummaryWidget mobile={true} />
        }
    }

    function DesktopOrderSummary() {
        if (currentWidth > 1024) {
            return <div className="xl:w-1/4 pl-8 relative desktop-order-summary"><OrderSummaryWidget mobile={false} /></div>
        }
    }

    return (
        <>
            <div className={`checkout-page ${roboto.className}`}>
                <PageAlign
                    left={
                        <>
                            <div className="sm:w-full lg:w-full xl:w-1/4 mx-4 md:mx-8 xl:mr-8 xl:ml-0">
                                <div className="mb-12">
                                    <h1 className="mb-2">Checkout</h1>
                                    <Breadcrumbs
                                        separator='›'
                                        aria-label="breadcrumb"
                                    >
                                        {breadcrumbs}
                                    </Breadcrumbs>
                                </div>

                                <MobileOrderSummary />
                                <ValidPayMethods payMethods={undefined} />
                                <ShippingAddress />
                                <Button variant="contained" className="rounded-2xl px-8 mt-8 mb-16 w-full">
                                    Complete Order
                                    <div className="ml-6"><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9997 5.00013C11.9956 4.56171 11.819 4.14255 11.508 3.83347L7.93301 0.25014C7.77687 0.0949307 7.56566 0.0078125 7.34551 0.0078125C7.12535 0.0078125 6.91414 0.0949307 6.75801 0.25014C6.6799 0.327609 6.61791 0.419776 6.5756 0.521325C6.53329 0.622875 6.51151 0.731796 6.51151 0.841806C6.51151 0.951816 6.53329 1.06074 6.5756 1.16229C6.61791 1.26383 6.6799 1.356 6.75801 1.43347L9.49967 4.1668H1.16634C0.945327 4.1668 0.733366 4.2546 0.577086 4.41088C0.420805 4.56716 0.333008 4.77912 0.333008 5.00013C0.333008 5.22115 0.420805 5.43311 0.577086 5.58939C0.733366 5.74567 0.945327 5.83347 1.16634 5.83347H9.49967L6.75801 8.57513C6.60109 8.73095 6.51249 8.94271 6.51171 9.16385C6.51093 9.38499 6.59803 9.59738 6.75384 9.7543C6.90966 9.91122 7.12142 9.99981 7.34256 10.0006C7.5637 10.0014 7.77609 9.91428 7.93301 9.75846L11.508 6.17513C11.821 5.86401 11.9978 5.44145 11.9997 5.00013V5.00013Z" fill="white"></path></svg></div>
                                </Button>
                            </div>

                        </>
                    }
                    right={
                        <DesktopOrderSummary />
                    }></PageAlign>


            </div>
        </>
    )
} 