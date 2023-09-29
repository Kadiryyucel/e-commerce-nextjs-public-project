'use client'

import { memo } from "react";

import CircularProgress from '@mui/material/CircularProgress';


function ShowSpinner(props:{ hasNextPage:boolean, hasSpinner:String }) {
    const {hasNextPage,hasSpinner} = props

    if(hasNextPage){
        return <div className="flex justify-center pt-8 pb-16"><CircularProgress className={ hasSpinner === 'visible' ? 'visible':'invisible'} size={80} /></div>
    }
    else{
        return ''
    }
}

const showSpinner = memo(ShowSpinner);
export default showSpinner;