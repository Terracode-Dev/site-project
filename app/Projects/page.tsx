'use client'
import Image from 'next/image';
import { useState } from 'react';

//----Components----//
import Navbar from '@/app/Components/Navbar';
import Hero from '@/app/Components/Hero';
import Footer from '@/app/Components/Footer';
import Navblock from '@/app/Components/Navblock';



//PROJECTS

import SimProject from '@/app/Projects/simProject';
import AtlotProject from '@/app/Projects/atlotProject';


//---subCompos---
import ContactForm from '@/app/Components/blocks/ContactForm';

//utils



//----TEMP----// 


export default function Home() {

  let [visibility, setVisibility] = useState('hidden');
  let [blury, setBlury] = useState('');

  function makeVisible(){
    setVisibility('');
    setBlury('blur');
  }

  let navBlur = () => {
    setBlury('blur');
  }

  function revertVisibility(){
    setVisibility('hidden');
    setBlury('');
  }



      let blured = "blur"
      
  const handleScroll= () => {
    const targetElement = document.getElementById('who');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <main className=" p-0 flex flex-col gap-10 overflow-hidden " >
      <div className='fixed z-30 navblock:backdrop-blur-[25px] fixed z-40 navblock:bg-[rgba(0,0,0,0.4)] 2lg:border-b-[0.5px] border-b-[#fff]'><Navbar func = {navBlur} revert={revertVisibility}  visibility={visibility} /></div>
      <div className="fixed self-center mt-[100px] z-0">
      <Hero blury={blured} func={handleScroll} show="hidden"/>
      </div>
      
      

        {/* Projects come here */}
    <div className='mt-[120px] flex flex-col mb-[150px] gap-[20px]'>
    <div className='text-[#fff] font-bold text-[35px] terraLogo:text-center terraLogo:w-full navblock:ml-[130px]'>
        Our Products
      </div>
      <SimProject blury={blury}/>
      <AtlotProject blury={blury} />

      </div>
        

      <Navblock tile={2}/>
      <Footer blury={blury}/>

      
      
      
      
      
      

      

      
      
    </main>
  )
}
