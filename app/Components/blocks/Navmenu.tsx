import Image from 'next/image'
import {useState} from 'react'
import { Source_Code_Pro } from 'next/font/google'
import { animate, motion } from 'framer-motion'


//--Images--//
import backArrow from '@/public/BackArrow.png'


//----font engine----//
const font_1 = Source_Code_Pro({
    weight: '400',
    subsets: ['latin-ext'],
});


//-----style strings----


export default function Navmenu (attr: any) {
    const navlist = ` ${font_1.className} ${attr.navPanelVisibility} flex flex-col absolute rounded-2xl border-4 mr-10` ;//custom added gap style

    return (
        <div className={navlist}>
            <button className='self-start mt-4 ml-4' onClick={attr.func}>
            <Image src={backArrow} alt="BackArrow"  style={{height:'35px',width:'35px',}} />
            </button>
            <div >
                <ul className='flex flex-col gap-[40px] py-10 px-20 text-center text-xl' >
                    <a href="../"><li className='hover:text-orngclr cursor-pointer'>Home</li></a>
                    <a href="../../Projects"><li className='hover:text-orngclr cursor-pointer'>Projects</li></a>
                    <a href="/Form"><li className='hover:text-orngclr cursor-pointer'>Inqueries</li></a>
                    <a href="https://github.com/Terracode-Dev"><li className='hover:text-orngclr cursor-pointer'>Github</li></a>
                    <a href=""><li className='hover:text-orngclr cursor-pointer'>Contact</li></a>
                </ul>
            </div>
        </div>
    )
}