'use client'
import { useEffect, useRef, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Link from 'next/link';

import { FiSearch } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl'
import { RiMenu2Line } from 'react-icons/ri'
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowRoundBack } from 'react-icons/io'

import { Lato } from 'next/font/google'
import { Mulish } from 'next/font/google'


import { GetCategoriesQuery } from "../../generated/graphql";
import { GET_CATEGORIES } from "../../graphql/queries";

import { useSuspenseQuery } from '@apollo/client';
import clsx from 'clsx';

import useWhenResize from '@/helpers/whenResize';

const mulish = Mulish({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '400' })

export default function PageHeader() {

    const dataCategories = useSuspenseQuery<GetCategoriesQuery>(GET_CATEGORIES);
    const [menu, setMenuTab] = useState(dataCategories.data?.categories?.edges);

    const [isOpenMenu, setMenu] = useState(false);
    const [isOpenSubMenu, setSubMenu] = useState(false);

    let currentWidth = useWhenResize();

    useEffect(() => {
        if (currentWidth <= 1024) {
            setMenu(false)
        }
    }, [currentWidth])

    function MenuRes() {
        if (currentWidth <= 1024) {
            return (
                <div className={`flex flex-col justify-start bg-white w-3/4 border-r-2 fixed h-screen left-0 top-0 xl:relative xl:w-full transition-all ${clsx({ 'translate-x-[-100%]': !isOpenMenu, 'translate-x-0': isOpenMenu })}`}>
                    <div className='flex justify-between items-center px-4 xl:hidden' >
                        <h2 className={lato.className}>trendyol</h2>
                        {isOpenSubMenu ?
                            <div onClick={() => {
                                setMenuTab(dataCategories.data?.categories?.edges)
                                setSubMenu(false)
                            }}><IoIosArrowRoundBack size={50} /></div>
                            : <div onClick={() => setMenu(false)}><AiOutlineClose size={28} /></div>
                        }
                    </div>

                    <ul className="list-menu flex flex-col xl:flex-row justify-center bg-white z-10 divide-y divide-slate-200 xl:divide-none">
                        {menu?.map(({ node: x }) => {
                            return (
                                <li className="flex justify-between xl:inline-block justify-center pl-4 py-4 show-category" key={x.id}>
                                    <div className="w-full flex jsutify-between" onClick={() => {
                                        setMenuTab(x.products?.edges)
                                        setSubMenu(true)
                                    }}>
                                        <span className='grow'>{x.name}</span>
                                        {!isOpenSubMenu && <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>}
                                    </div>
                                    <div className="menu flex flex-col flex-wrap absolute max-h-52 bg-white p-8">
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
                </div >)
        }
        else {
            return (<div className={`flex flex-col justify-start bg-white w-3/4 absolute left-0 top-0 xl:relative xl:w-full`}>
                <div className='flex justify-between items-center px-4 xl:hidden'>
                    <h2 className={lato.className}>trendyol</h2>
                    <div onClick={() => setMenu(false)}><AiOutlineClose size={24} /></div>
                </div>

                <ul className="list-menu flex flex-col xl:flex-row justify-center bg-white z-10 divide-y divide-slate-200 xl:divide-none">
                    {dataCategories.data?.categories?.edges.map(({ node: x }) => {
                        return (
                            <li className="flex justify-between xl:inline-block justify-center pl-4 py-4 show-category" key={x.id}>
                                <div className="w-full flex jsutify-between}" onClick={() => {

                                }}>
                                    <span className='grow'>{x.name}</span>
                                    <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>
                                </div>
                                <div className="menu flex flex-col flex-wrap absolute max-h-52 bg-white translate-x-0 p-8">
                                    {x.products?.edges.map(({ node: sub }) => {
                                        return (<div key={sub.id}>
                                            <div className={`flex-initial menu-text ${mulish.className}`} ><span>{sub.name}</span></div>
                                            <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>
                                        </div>
                                        )
                                    })}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div >)
        }
    }

    return (
        <div className='wrapper-content px-2 xl:px-2 xl:px-28 w-full mb-10'>
            <div className="flex flex-wrap justify-center items-center w-full">
                <div className='grow xl:hidden' onClick={() => setMenu(true)}><RiMenu2Line size={28} /></div>
                <h1 className={`${lato.className} grow shrink basis-auto`}><Link href='/'>trendyol</Link></h1>
                <Box sx={{ backgroundColor: '#f3f3f3' }} className='grown-[8] shirnk-1 basis-full m-0 order-3 xl:m-1 xl:order-2 xl:basis-6/12'>
                    <TextField
                        className='search-bar w-full'
                        placeholder='Search'
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><FiSearch size={24} color='orange' /></InputAdornment>,
                        }}
                    />
                </Box>


                <div className="flex gap-x-3 justify-end items-center order-2 grow basis-auto shrink-1 xl:order-3">
                    <Link href={`/login`}><div className='flex items-center gap-x-2'><div><CiUser size={20} /></div><span className='xl:w-auto hidden xl:block'>Login</span></div></Link>
                    <Link href={`/favorites`}><div className='flex items-center gap-x-2'><div><AiOutlineHeart size={20} /></div><span className='xl:w-auto hidden xl:block'>Favorilerim</span></div></Link>
                    <Link href={`/basket`}><div className='flex items-center gap-x-2'><div><SlBasket size={20} /></div><span className='xl:w-auto hidden xl:block'>Sepetim</span></div></Link>
                </div>
            </div>
            <MenuRes></MenuRes>
        </div>
    )
}