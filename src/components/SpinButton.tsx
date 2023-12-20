'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const NumberInput = () => {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };

    return (
        <div className='flex h-6 md:h-8 xl:h-10 w-24 shrink-0 mr-8'>
            <Button color="default" variant="contained" className='p-1 min-w-[24px]' onClick={handleIncrement}>
                <BsPlusLg size={20}/>
            </Button>
            <TextField
                type="number"
                value={value}
                className='count-product h-full'
                onChange={(e) => setValue(parseInt(e.target.value, 10))}
            />
            <Button color="default" variant="contained" className='p-1 min-w-[24px]' onClick={handleDecrement}>
                <BiMinus size={20}/>
            </Button>
        </div>
    );
};

export default NumberInput;