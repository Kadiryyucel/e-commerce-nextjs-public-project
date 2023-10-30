'use client'
import { useEffect, useState } from 'react'

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import Link from 'next/link';


import { FiSearch } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { RiMenu2Line } from 'react-icons/ri'

import { Lato } from 'next/font/google'
import { Mulish } from 'next/font/google'


import { GetCategoriesQuery } from "../../../generated/graphql";
import { GET_CATEGORIES } from "../../../graphql/queries";

import { useSuspenseQuery } from '@apollo/client';

import useWhenResize from '@/customHooks/useWhenResize';

const mulish = Mulish({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '400' })

export default function PageHeader() {


    const dataCategories = useSuspenseQuery<GetCategoriesQuery>(GET_CATEGORIES);
    const [isOpenMenu, setMenu] = useState(false);
    let currentWidth = useWhenResize();

    function handleSetMenu(value: boolean) {
        setMenu(value)
    }


    useEffect(() => {
        if (currentWidth <= 1024) {
            setMenu(false)
        }
    }, [currentWidth])


    const [searchVal, setSearchVal] = useState('');

    function MenuRes() {
        if (currentWidth <= 1024) {
            return (
                <MobileMenu categories={dataCategories} setMenu={handleSetMenu} isOpenMenu={isOpenMenu} />
            )
        }
        else {
            return (
                <DesktopMenu categories={dataCategories} setMenu={handleSetMenu} />
            )
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
                        value={searchVal}
                        onChange={(e) => { setSearchVal(e.target.value) }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <Link href={`/search/${searchVal}`}>
                                    <FiSearch size={24} color='orange' />
                                </Link>
                            </InputAdornment>,
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