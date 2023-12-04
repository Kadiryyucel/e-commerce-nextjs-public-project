'use client'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'


import Link from 'next/link';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Badge from '@mui/material/Badge';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';


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
import { useSelector } from 'react-redux';


const mulish = Mulish({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '400' })

export default function PageHeader() {

    const dataCategories = useSuspenseQuery<GetCategoriesQuery>(GET_CATEGORIES);
    const [isOpenMenu, setMenu] = useState(false);
    let currentWidth = useWhenResize();

    function handleSetMenu(value: boolean) {
        setMenu(value)
    }

    const favorites = useSelector((state: any) => state.products.favorites);
    const basket = useSelector((state: any) => state.products.basket);

    useEffect(() => {
        if (currentWidth <= 1024) {
            setMenu(false)
        }
    }, [currentWidth])


    const [searchVal, setSearchVal] = useState('');

    function DesktopMen() {
        if (currentWidth > 1280) {
            return (
                <DesktopMenu categories={dataCategories} setMenu={handleSetMenu} />
            )
        }
    }

    function MobileMen() {
        if (currentWidth <= 1280) {
            return (
                <MobileMenu categories={dataCategories} setMenu={handleSetMenu} isOpenMenu={isOpenMenu} />
            )
        }
    }

    const searchParams = useSearchParams()! as unknown as URLSearchParams
    const router = useRouter()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    function searchProcess() {
        if (searchVal == null || searchVal == '') return
        router.push('search' + '?' + createQueryString('q', searchVal))
    }

    let categories = [
        {
            category: 'Kategori',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Beden',
            childCategories: [{ category: 'totoadfadfadsfsafads' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Fiyat',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Kalıp',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Avantajlı Ürünler',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        }
    ]
    return (
        <>
            <div className='wrapper-content px-2 xl:px-2 xl:px-28 w-full mb-10'>
                <div className="flex flex-wrap justify-center items-center w-full">
                    <div className='grow xl:hidden' onClick={() => setMenu(true)}><RiMenu2Line size={28} /></div>
                    <h1 className={`${lato.className} grow shrink basis-auto`}><Link href='/'>trendyol</Link></h1>
                    <Box sx={{ backgroundColor: '#f3f3f3' }} className='flex justify-center relative grown-[8] shirnk-1 basis-full m-0 order-3 xl:m-1 xl:order-2 xl:basis-6/12'>
                        <TextField
                            className='search-bar w-full'
                            placeholder='Search'
                            value={searchVal}
                            onChange={(e) => { setSearchVal(e.target.value) }}
                            InputProps={{
                                autoComplete:'off',
                                endAdornment: <InputAdornment position="end">
                                    <div className='cursor-pointer' onClick={() => { searchProcess() }}>
                                        <FiSearch size={24} color='orange' />
                                    </div>
                                </InputAdornment>,
                            }}
                        />
                        <div className='search-suggests top-14 min-h-80 absolute z-20 p-10 border-4 border-yellow-500' style={{ backgroundColor: '#f3f3f3' }}>
                            <div>
                                <div className='flex justify-between'>
                                    <span className='text-lg text-orange-400'>Geçmiş Aramalar</span>
                                    <span>Temizle</span>
                                </div>
                                <div className='flex flex-col gap-y-2 my-2'>
                                    <div>aplle</div>
                                    <div>Pantolon</div>
                                    <div>selam</div>
                                    <div>tshirt</div>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='text-lg text-orange-400'>Popüler Aramalar</span>
                                        <div className='flex flex-wrap gap-2'>{categories.map((data, index) => {
                                            return (
                                                <div className='p-2 border border-slate-400' key={index}>{data.category}</div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-y-2 mt-2'>
                                        <span className='text-lg text-orange-400'>Sana Özel Kategoriler</span>
                                        <div className='flex flex-wrap gap-2'>{categories.map((data, index) => {
                                            return (
                                                <div className='p-2 border border-slate-400' key={index}>{data.category}</div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>


                    <div className="flex gap-x-3 justify-end items-center order-2 grow basis-auto shrink-1 xl:order-3">
                        <Link href={`/login`}><div className='flex items-center gap-x-2'><div><CiUser size={20} /></div><span className='xl:w-auto hidden xl:block'>Login</span></div></Link>
                        <Link href={`/favorites`}>

                            <div className='flex items-center gap-x-2'>
                                <Badge badgeContent={favorites?.length} color="primary">
                                    <div><AiOutlineHeart size={20} /></div>
                                </Badge>
                                <span className='xl:w-auto hidden xl:block'>Favorilerim</span>
                            </div>

                        </Link>
                        <Link href={`/basket`}><div className='flex items-center gap-x-2'>
                            <Badge badgeContent={basket?.length} color="primary">
                                <div><SlBasket size={20} /></div>
                            </Badge>

                            <span className='xl:w-auto hidden xl:block'>Sepetim</span></div></Link>
                    </div>
                </div>
                <DesktopMen />
            </div>
            <MobileMen />
        </>
    )
}