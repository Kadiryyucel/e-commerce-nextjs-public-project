'use client'
import { useEffect, useState } from "react";

export default function useWhenResize(){
    const [currentWidth, setCurrentWidth] = useState<number>(0)
    useEffect(()=>{
        setCurrentWidth(window.innerWidth)
        console.log(window.innerWidth)
        let debaounce = 500
        let currentBuffer: NodeJS.Timeout;
        function whenResize() {
            console.log('hi')
            clearTimeout(currentBuffer)
            currentBuffer = setTimeout(() => {
                let currentWidth = window.innerWidth;

                setCurrentWidth(currentWidth)
                console.log('Tarayıcı genişliği değişti. Yeni genişlik: ' + currentWidth);
            }, debaounce)
        }

        
            window.addEventListener('resize', whenResize);
            return () => window.removeEventListener('resize', whenResize)
        },[])


    return currentWidth
}