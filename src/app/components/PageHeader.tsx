'use client'

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { FiSearch } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl'

import { Lato } from 'next/font/google'
import { useEffect } from 'react';

const lato = Lato({ subsets: ['latin'], weight: '400' })

export default function PageHeader() {

    return (
        <div className="flex justify-center items-center mx-36 w-full page-header">
            <h1 className={lato.className} style={{ flex: '1 1 auto' }}>trendyol</h1>
            <TextField
                className='search-bar'
                placeholder='Search'
                sx={{ m: 1, flex: '9 1 auto', backgroundColor: '#f3f3f3' }}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><FiSearch size={24} color='orange' /></InputAdornment>,
                }}
            />
            <div className="flex gap-x-3 justify-end items-center" style={{ flex: '1 1 auto' }}>
                <div className='flex items-center gap-x-2 '><div><CiUser size={20} /></div><span>Login</span></div>
                <div className='flex items-center gap-x-2'><div><AiOutlineHeart size={20} /></div><span>Favorilerim</span></div>
                <div className='flex items-center gap-x-2'><div><SlBasket size={20} /></div><span>Sepetim</span></div>
            </div>
        </div>
    )
}