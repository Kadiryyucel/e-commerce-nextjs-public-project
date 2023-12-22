import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

import { Mulish } from 'next/font/google'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: '400' })
const mulish = Mulish({ subsets: ['latin'], weight: '400' })


export default function DesktopMenu({ categories, setMenu }
    :{categories:any,setMenu:Function}) {
    return <div className={`flex flex-col justify-start bg-white w-3/4 absolute left-0 top-0 xl:relative xl:w-full`}>
        <div className='flex justify-between items-center px-4 xl:hidden'>
            <h2 className={lato.className}>MAMA</h2>
            <div className='cursor-pointer' onClick={() => setMenu(false)}><AiOutlineClose size={24} /></div>
        </div>

        <ul className="list-menu flex flex-col xl:flex-row justify-center bg-white z-10 divide-y divide-slate-200 xl:divide-none">
            {categories.data?.categories?.edges.map(({ node: x }) => {
                return (
                    <li className="flex justify-between xl:inline-block justify-center pl-4 py-4 show-category" key={x.id}>
                        <div className="w-full flex jsutify-between}" onClick={() => {

                        }}>
                            <span className='grow'>{x.name}</span>
                            <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>
                        </div>
                        <div className="menu flex flex-col flex-wrap absolute max-h-52 bg-white translate-x-0 p-8">
                            {x.products?.edges.map(({ node: sub }) => {
                                return (<div key={sub.id}>
                                    <div className={`flex-initial menu-text ${mulish.className}`} ><span>{sub.name}</span></div>
                                    <span className='pr-4 xl:hidden'><BsChevronRight size={20} /></span>
                                </div>
                                )
                            })}
                        </div>
                    </li>
                );
            })}
        </ul>
    </div >
}