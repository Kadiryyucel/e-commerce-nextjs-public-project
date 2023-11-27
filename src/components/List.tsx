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
            category: 'lo',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'mo',
            childCategories: [{ category: 'totoadfadfadsfsafads' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'yo',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'ro',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'to',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'ko',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'so',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
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