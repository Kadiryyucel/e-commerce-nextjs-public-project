
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { IoCheckmarkSharp } from "react-icons/io5";

export default function BottomMenu(props: { onOpen: boolean, setOpen: Function }) {

    const { onOpen, setOpen } = props;
    const orders = ['Önerilen Sıralama', 'En Düşük Fiyat', 'En Yüksek Fiyat', 'En Yeniler', 'Çok Satanlar', 'En Favoriler', 'Çok Değerlendirilenler']

    const [selected, setOrder] = useState<number>(0)
    return (
        <>
            <div className={`w-full h-full absolute bg-black bg-opacity-40 z-40 top-0 ${onOpen ? 'block' : 'hidden'}`} onClick={() => {
                setOpen(false)
            }}></div>
            <div className={`fixed w-full bg-white bottom-0 z-50 ${onOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className='flex justify-between p-4'>
                    <div>Sıralama</div>
                    <div onClick={() => {
                        setOpen(false)
                    }}><AiOutlineClose size={20} /></div>
                </div>
                <div className='w-full bg-black' style={{ height: 1 }}></div>
                <div className='p-4'>
                    {orders.map((x:string,index:number) => {
                        return (
                            <div className='flex justify-between items-center' key={index} onClick={()=>{setOrder(index)}}>
                                <div className={`py-2 ${selected === index ? 'text-base' : 'text-sm'}`} >{x}</div>
                                <div className={`py-2 ${selected === index ? 'block' : 'hidden'}`}><IoCheckmarkSharp /></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}