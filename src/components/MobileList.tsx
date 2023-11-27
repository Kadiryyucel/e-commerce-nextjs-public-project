'use client'
import { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Checkbox } from '@mui/material';


export default function MobileList() {

    const [selectedCategory, setSelected] = useState<number>()

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
        <div>
            <div className='w-full'>
                <div className='flex justify-between gap-x-1 w-full h-10'>
                    <div className='flex justify-center items-center w-6/12 bg-gray-200'>Sırala</div>
                    <div className='flex justify-center items-center w-6/12 bg-gray-200'>Filtrele</div>
                </div>

                <div className='mobile-categories-wrapper flex w-full h-12 px-1 items-center bg-slate-300 overflow-x-scroll no-scrollbar'>
                    {categories.map((data, index) => {
                        return (<div className='mobile-category shrink-0 border rounded-full py-1 px-2 mx-1' onClick={() => { setSelected(index) }} key={index}>{data.category}</div>)
                    })}
                </div>

                <div className='categories px-2'>
                    {categories.map((data, index) => {
                        return (<div className={`${selectedCategory === index ? 'flex' : 'hidden'} flex-wrap py-4 w-full`} key={index}>{data.childCategories.map((datachild, i) => {
                            return (<div className='flex p-2' key={i}>
                                <div className="flex shrink-0 items-start w-1/12">
                                    <Checkbox
                                        className="pt-0"
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </div>
                                <div className='pl-8'>{datachild.category}</div>
                            </div>)
                        })}</div>)
                    })}
                </div>
            </div >
        </div >
    );
}