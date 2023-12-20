'use client'
import { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


import { useSuspenseQuery } from '@apollo/client';
import { Checkbox } from '@mui/material';
import { ClassNames } from '@emotion/react';


function ListIn(props: { data: any }) {

    let data = props.data
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={data.category} />
                {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {data.childCategories.map((child:any,index:number) => {
                        return (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div className="flex shrink-0 items-start w-1/12">
                                        <Checkbox
                                            className="pt-0"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </div>
                                </ListItemIcon>
                                <ListItemText primary={child.category} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}

export default function ListComponent(props:{className:string}) {


    let categories = [
        {
            category: 'Kategori',
            childCategories: [{ category: 'Sweatshirt' }, { category: 'Gömlek' }, { category: 'Kazak' }, { category: 'Sneaker' }]
        },
        {
            category: 'Beden',
            childCategories: [{ category: 'XXS' }, { category: 'XS' }, { category: 'S' }, { category: 'M' }]
        },
        {
            category: 'Fiyat',
            childCategories: [{ category: '0 TL - 125 TL' }, { category: '125 TL - 250 TL' }, { category: '250 TL - 300 TL' }, { category: '350 TL - 600 TL' }]
        },
        {
            category: 'Kalıp',
            childCategories: [{ category: 'Baggy Fit' }, { category: 'Basic' }, { category: 'Bol' }, { category: 'Büyük Beden' }]
        },
        {
            category: 'Avantajlı Ürünler',
            childCategories: [{ category: 'Süper Avantajlı Ürün' }, { category: 'Çok Avantajlı Ürün' }, { category: 'Avantajlı Ürün' }, { category: 'Taksit Erteleme' }]
        }
    ]

    return (
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={props.className}
            >
                {
                    categories.map((category,index:number) => {
                        return (
                            <ListIn data={category} key={index} />
                        )
                    })
                }

            </List>
        </div>
    );
}