'use client'
import { useEffect, useState } from 'react'

import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowRoundBack } from 'react-icons/io'

import { Mulish } from 'next/font/google'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: '400' })
const mulish = Mulish({ subsets: ['latin'], weight: '400' })

import clsx from 'clsx';


export default function MobileMenu({ categories, isOpenMenu, setMenu }
    : { categories: any, isOpenMenu: boolean, setMenu: Function }) {

    const [menu, setMenuTab] = useState(categories.data?.categories?.edges);
    const [isOpenSubMenu, setSubMenu] = useState(false);

    return (
        <div className={`w-full h-full ${clsx({ 'is-open-mobile-menu': isOpenMenu })}`}>
            <div className={`flex flex-col justify-start bg-white w-3/4 border-r-2 fixed h-screen z-50 left-0 top-0 xl:relative xl:w-full transition-all ${clsx({ 'translate-x-[-150%]': !isOpenMenu, 'translate-x-0': isOpenMenu })}`}>
                <div className='flex justify-between items-center px-4 xl:hidden'>
                    <h2 className={lato.className}>trendyol</h2>
                    {isOpenSubMenu ?
                        <div onClick={() => {
                            setMenuTab(categories?.data?.categories?.edges)
                            setSubMenu(false)
                        }}><IoIosArrowRoundBack size={50} /></div>
                        : <div className='cursor-pointer' onClick={() => setMenu(false)}><AiOutlineClose size={28} /></div>
                    }
                </div>

                <ul className="list-menu flex flex-col xl:flex-row justify-center bg-white z-10 divide-y divide-slate-200 xl:divide-none">
                    {menu?.map(({ node: x }) => {
                        return (
                            <li className="flex justify-between xl:inline-block justify-center pl-4 py-4" key={x.id}>
                                <div className="w-full flex jsutify-between" onClick={() => {
                                    setMenuTab(x.products?.edges)
                                    setSubMenu(true)
                                }}>
                                    <span className='grow'>{x.name}</span>
                                    {!isOpenSubMenu && <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>}
                                </div>
                                <div className="menu hidden md:block flex-col flex-wrap absolute max-h-52 bg-white p-8">
                                    {x.products?.edges.map(({ node: sub }) => {
                                        return (<div key={sub.id}>
                                            <div className={`flex-initial menu-text ${mulish.className}`} key={sub.id}><span>{sub.name}</span></div>
                                        </div>
                                        )
                                    })}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div >
        </div>
    )
}