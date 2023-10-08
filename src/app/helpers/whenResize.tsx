import { useEffect, useState } from "react";

export default function useWhenResize(){
    const [currentWidth, setCurrentWidth] = useState<number>(0)

        let debaounce = 500
        let currentBuffer: NodeJS.Timeout;
        function whenResize() {
            clearTimeout(currentBuffer)
            currentBuffer = setTimeout(() => {
                let currentWidth = window.innerWidth;

                setCurrentWidth(currentWidth)
                console.log('Tarayıcı genişliği değişti. Yeni genişlik: ' + currentWidth);
            }, debaounce)
        }

        useEffect(()=>{
            window.addEventListener('resize', whenResize);
            return () => window.removeEventListener('resize', whenResize)
        })
        

    return currentWidth
}