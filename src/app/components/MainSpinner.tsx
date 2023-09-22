'use client'

import { memo } from "react";

import CircularProgress from '@mui/material/CircularProgress';


function ShowSpinner(props:{ hasNextPage:boolean, hasSpinner:boolean }) {
    const {hasNextPage,hasSpinner} = props
    if(hasNextPage && hasSpinner){
        return <div className="flex justify-center pt-8 pb-16"><CircularProgress size={80} /></div>
    }
    else{
        return ''
    }
}

const showSpinner = memo(ShowSpinner);
export default showSpinner;