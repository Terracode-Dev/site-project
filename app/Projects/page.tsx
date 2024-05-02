'use client'
import Image from 'next/image';
import { useState } from 'react';

//----Components----//
import Navbar from '@/app/Components/Navbar';
import Hero from '@/app/Components/Hero';
import Footer from '@/app/Components/Footer';



//PROJECTS

import SimProject from '@/app/Projects/simProject';


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
      <div className='fixed z-30'><Navbar func = {navBlur} revert={revertVisibility}  visibility={visibility} /></div>
      <div className="fixed self-center mt-[100px] z-0">
      <Hero blury={blured} func={handleScroll} show="hidden"/>
      </div>
      

        {/* Projects come here */}
    <div className='mt-[120px] flex flex-col mb-[150px]'>
      <SimProject blury={blury}/>

      </div>
        
      <Footer blury={blury}/>

      
      
      
      
      
      

      

      
      
    </main>
  )
}
