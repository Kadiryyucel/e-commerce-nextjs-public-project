'use client'

import Site from '@/template/Site'

import Image from 'next/image'
import { Button, Checkbox } from '@mui/material'
import SpinButton from '../../components/SpinButton'

import one from '@/assets/nike.png'

export default function Basket() {

    let data = new Array(5)
    data.fill(6)
    function BasketCol() {
        return (
            <div className='flex flex-col md:w-full gap-y-4 xl:pl-4 p-0'>
                {data.map((_, i) => {
                    return (
                        <div className='w-full flex justify-center xl:justify-end' key={i}>
                            <div className='flex items-center md:justify-between max-w-screen-lg border p-6'>
                                <div className='flex items-center md:w-full'>
                                    <div className="flex shrink-0 items-start w-1/12">
                                        <Checkbox
                                            className="pt-0"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </div>
                                    <div className="min-h-24 h-24 shrink-0 w-2/12 overflow-hidden shrink-0 rounded-md border">
                                        <Image
                                            width={80}
                                            height={80}
                                            alt={""}
                                            src={one}
                                            priority={true}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className='w-9/12 flex flex-col xl:flex-row xl:justify-around justify-start xl:items-center items-start'>
                                        <div className='flex flex-col max-w-full xl:max-w-[60%] text-xs'>
                                            <div><h3 className='m-0'><b>Shoes</b></h3></div>
                                            <div className='flex items-center justify-center'>

                                                <p className='truncate'> Szymanski Tasarımlı Parfüm Esanslı Baskılı Ayna Oto Araç Kokusu Araba Kokusu</p>
                                            </div>
                                            <div><span>Beden:</span><span>Tek Ebat</span></div>
                                            <div><span>5 saat 18 dakika içinde sipariş verirsen en geç yarın kargoda</span></div>
                                        </div>
                                        <div className='flex shrink-0 justify-between xl:justify-end w-full xl:w-auto items-end'>
                                            <SpinButton />
                                            <div className='block xl:hidden'><span>24,99TL</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='hidden xl:block'><span>24,99TL</span></div>
                            </div>
                        </div>
                    )
                })}
            </div>)
    }

    return (
        <>
            <Site>
                <div className='flex gap-x-4'>
                    <BasketCol></BasketCol>
                    <div className='w-full xl:block hidden'>
                        <div className='flex flex-col items-center border w-6/12 px-4'>
                            <div className='flex justify-start w-full'><h2>Sipariş Özeti</h2></div>
                            <div className='flex justify-between w-full'><span>Ürünün Toplamı</span><span>368,70TL</span></div>
                            <div className='flex justify-between w-full'><span>Ürünün Toplamı</span><span>29.99,70TL</span></div>
                            <div className='flex justify-end w-full border-t-2 mt-4'><h3>398,69 TL</h3></div>
                        </div>
                        <Button variant='contained' className='w-6/12 mt-4'>Onayla</Button>
                    </div>

                    <div className='flex justify-center items-center xl:hidden fixed w-full h-20 gap-x-6 bg-slate-200 mobile-approval'>
                        <div className='flex flex-col'>
                            <div className='text-xs'><span>Toplam</span></div>
                            <div><span>4.449,87 TL</span></div>
                            <div className='text-xs'><span>Kargo Bedava</span></div>
                        </div>
                        <Button variant='contained' className='w-3/6 h-12'>Onayla</Button>
                    </div>

                </div>
            </Site>
        </>
    )
}