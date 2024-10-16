'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Site from '@/template/Site'

import { Button, Checkbox } from '@mui/material'
import SpinButton from '../../components/SpinButton'

import one from '@/assets/nike.png'
import EmptyImg from '../../assets/emptyBasket.png'


export default function Basket() {

    const router = useRouter();

    let data = new Array(30)
    data.fill(6)
    function BasketCol() {
        return (
            <div className='flex flex-col md:w-full gap-y-4 xl:pl-4 p-0 products-basket'>
                {data.map((_, i) => {
                    return (
                        <div className='w-full flex justify-center xl:justify-end' key={i}>
                            <div className='flex items-center md:justify-between max-w-screen-lg border pr-3 py-6'>
                                <div className='flex items-center md:w-full'>
                                    <div className="flex shrink-0 items-start w-1/12 mr-1">
                                        <Checkbox
                                            className="pt-0 pl-1 md:pl-4"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </div>
                                    <div className="min-h-24 h-20 w-3/12 md:h-24 md:w-2/12 shrink-0 overflow-hidden shrink-0 rounded-md border">
                                        <Image
                                            width={80}
                                            height={80}
                                            alt={""}
                                            src={one}
                                            priority={true}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className='w-9/12 pl-1 flex flex-col xl:flex-row xl:justify-around justify-start xl:items-center items-start'>
                                        <div className='flex flex-col max-w-full xl:max-w-[60%] text-[0.60rem] mb-2'>
                                            <div><h3 className='m-0'><b>Shoes</b></h3></div>
                                            <div className='flex items-center justify-center hidden md:block'>
                                                <p className='truncate'> Szymanski Tasarımlı Parfüm Esanslı Baskılı Ayna Oto Araç Kokusu Araba Kokusu</p>
                                            </div>
                                            <div><span>Beden:</span><span>Tek Ebat</span></div>
                                            <div className='hidden md:block cargo'><span>5 saat 18 dakika içinde sipariş verirsen en geç yarın kargoda</span></div>
                                            <div className='block md:hidden'><span>Tahmini Kargoya Teslim: 3 gün içinde</span></div>
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
                {
                    !(data && data.length) ? <div className='w-full flex justify-center p-8'>
                        <div className="w-4/12">
                            <Image alt={''} width={200} height={100} className='w-6/6 md:w-10/12' src={EmptyImg} />
                        </div>
                     </div>
                        :
                        <div className='flex justify-center gap-x-4'>
                            <BasketCol></BasketCol>
                            <div className='xl:w-8/12 xl:block hidden'>
                                <div className='flex flex-col items-center border w-10/12 px-4'>
                                    <div className='flex justify-start w-full'><h2>Sipariş Özeti</h2></div>
                                    <div className='flex justify-between w-full'><span>Ürünün Toplamı</span><span>368,70TL</span></div>
                                    <div className='flex justify-between w-full'><span>Ürünün Toplamı</span><span>29.99,70TL</span></div>
                                    <div className='flex justify-end w-full border-t-2 mt-4'><h3>398,69 TL</h3></div>
                                </div>
                                <Button color="default" variant='contained' className='w-8/12 mt-4' onClick={() => { router.push('/checkout') }}>Onayla</Button>
                            </div>

                            <div className='flex justify-center items-center xl:hidden fixed w-full h-20 gap-x-6 border-top mobile-approval'>
                                <div className='flex flex-col'>
                                    <div className='text-xs'><span>Toplam</span></div>
                                    <div><span>4.449,87 TL</span></div>
                                    <div className='text-xs'><span>Kargo Bedava</span></div>
                                </div>
                                <Button color="default" variant='contained' className='w-3/6 h-12' onClick={() => { router.push('/checkout') }}>Onayla</Button>
                            </div>
                        </div>
                }
            </Site >
        </>
    )
}