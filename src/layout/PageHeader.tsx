
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

import { Lato } from 'next/font/google'
import { Mulish } from 'next/font/google'


import { GetCategoriesQuery } from "../../generated/graphql";
import { GET_CATEGORİES } from "../../graphql/queries";

import { getClient } from "@/lib/ssr"

const mulish = Mulish({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '400' })

export default async function PageHeader() {

    const dataCategories = await getClient().query<GetCategoriesQuery>({ query: GET_CATEGORİES });


    return (
        <div className='w-full'>
            <div className="flex flex-wrap justify-center items-center w-full">
                <div className='grow xl:hidden'><RiMenu2Line size={28} /></div>
                <h1 className={`${lato.className} grow shrink basis-auto`}>trendyol</h1>
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
                    <div className='flex items-center gap-x-2'><div><AiOutlineHeart size={20} /></div><span className='xl:w-auto hidden xl:block'>Favorilerim</span></div>
                    <div className='flex items-center gap-x-2'><div><SlBasket size={20} /></div><span className='xl:w-auto hidden xl:block'>Sepetim</span></div>
                </div>
            </div>
            <div className="flex flex-col justify-start bg-white w-3/4 absolute left-0 top-0 xl:relative xl:w-full">
                <div className='flex justify-between items-center px-4 xl:hidden'>
                    <h2 className={lato.className}>trendyol</h2>
                    <div><AiOutlineClose size={24} /></div>
                </div>

                <ul className="list-menu flex flex-col xl:flex-row justify-center bg-white z-10 divide-y divide-slate-200 xl:divide-none">
                    {dataCategories.data.categories?.edges.map(({ node: x }, index: number) => {
                        return (
                            <>
                                <li className="flex justify-between xl:inline-block justify-center pl-4 py-4 show-category" key={index}>
                                    <span>{x.name}</span> <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>
                                    <div className="menu flex flex-col flex-wrap absolute max-h-52 bg-white translate-x-0 p-8">
                                        {x.products?.edges.map(({ node: sub }, i: number) => {
                                            return (<div className={`flex-initial menu-text ${mulish.className}`} key={i}><span>{sub.name}</span></div>)
                                        })}
                                    </div>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}