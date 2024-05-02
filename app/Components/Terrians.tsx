import Image from 'next/image';
import { useState } from 'react';
import { animate, motion } from 'framer-motion'

import Ballset from '@/public/ballset.png';


export default function Terrians(attr : any) {
    
    let mainStyle = `${attr.blury} flex flex-col justify-center  p-[130px] gap-10`
    
    return(
        <div className = {mainStyle}>
            <div className="firstCircleSet self-end"><Image src={Ballset} alt="Ballset" className='w-[170px]'/></div>
            <div className="image self-center flex terraLogo:flex-col gap-10 items-center border-2 border-[#fff] rounded-xl py-[50px] px-[80px] bg-terrianImg">
                <section className="flex flex-col text-7xl">
                    <p>Meet the</p>
                    <p className="text-orngclr">Terrians</p>
                </section>
                <a href="" className="border-2 border-orngclr px-4 py-2 rounded-lg"> Dev Wall </a>
            </div>
            <div className="secondCircleSet self-start"><Image src={Ballset} alt="Ballset" className='w-[170px]'/></div>
        </div>
    );
}