import { useEffect, useRef } from "react"

import { createPortal } from 'react-dom';



export default function Magnifying(props: { children: React.ReactNode }) {

    const magnifying = useRef<HTMLDivElement>(null)
    const magnifyingSpace = useRef<HTMLDivElement>(null)

    const magnifyingImg = document.querySelector('.magnifying-img');

    useEffect(() => {

        const magnifyingImgContent = document.querySelector('.magnifying-img-content');

        let space = magnifying.current?.getBoundingClientRect();

    
        magnifying.current?.addEventListener('mousemove', (e: MouseEvent) => {
            let x = e.offsetX - 96;
            let y = e.offsetY - 120;

            if (y <= 0) y = 0
            if (y + 240 >= (space?.height || 100)) y = (space?.height || 100) - 240
            if (x <= 0) x = 0
            if (x + 192 >= (space?.width || 100)) x = (space?.width || 100) - 192

            if (magnifyingSpace && magnifyingSpace.current) {
                if (magnifyingSpace.current.style) {
                    magnifyingSpace.current.style.transform = `translate(${x}px,${y}px)`;
                }
            }

        
            if(magnifyingImgContent && magnifyingImgContent.parentElement){

                let xAxis = -(x * 2.08333333333);
                let yAxis = -(y * 2.5);
                magnifyingImgContent.parentElement.style.transform = `translate(${xAxis}px,${yAxis}px)`
            }
        })
    }, [])

    

    return (
        <>
            <div className="h-full relative">
                <div className="magnifying h-full relative z-20">
                    {props.children}
                </div>

                {magnifyingImg && createPortal(
                    props.children,
                    magnifyingImg
                )
                }
            </div>
            <div ref={magnifying} className="h-full w-full top-0 absolute z-30 hover:cursor-crosshair"></div>
            <div ref={magnifyingSpace} className="magnifyingSpace absolute h-60 w-48 top-0 z-20 bg-stone-50 bg-opacity-40"></div>

        </>
    )

}