'use client'
import Image from 'next/image';
import { useState } from 'react';

//----Components----//
import Navbar from '@/app/Components/Navbar';
import Hero from '@/app/Components/Hero';
import Footer from '@/app/Components/Footer';
import send from '@/public/Send.png'

export default function Home() {

    

    let blured = "blur"
    let inputField = "text-orngclr w-fit focus:ring-0  bg-[#0000] border-x-0 border-t-0 border-b-2 border-orngclr mb-[2px]"
    return (
        <div className="flex flex-col justify-between h-[100vh] p-0">
            <Navbar show="hidden"/>
            <div className='absolute self-center mt-[80px]'>
            {/* <Hero blury={blured} show="hidden"/> */}
            </div>
            <div className="absolute mt-[240px] self-center ">
                <form action="../api/send" method='GET' className='flex flex-col flex-wrap justify-center items-center'>
                    <div>
                    <span>  I'm  </span>
                    <input type="text" name="name" id="name" placeholder='Your name' className={inputField}/>
                    <span>  and i'm here to  </span>
                    <input type="email" name="email" id="email" className={inputField}/>
                    <span>  and you can contact me through  </span>
                    <input type="text" name="message" id="message" className={inputField}/>
                    <span>  and i'm here to  </span>
                    </div>
                    <button type="submit" className="px-4 w-[100px] mt-[20px] flex justify-center py-1 rounded-lg bg-orngclr border-2 border-orngclr">
                        <Image src={send} alt="send Icon" className='' style={{height:'18px',width:'18px',}} />
                    </button>
                    
                </form>
            </div>


            <Footer />
        </div>
    );
}