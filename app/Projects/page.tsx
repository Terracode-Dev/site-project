'use client'
import Image from 'next/image';
import { useState } from 'react';

//----Components----//
import Navbar from '@/app/Components/Navbar';
import Hero from '@/app/Components/Hero';
import Footer from '@/app/Components/Footer';

import { animateScroll as scroll } from 'react-scroll';


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

  let scrollToElement = (elementId : any) => {
    scroll.scrollTo(elementId, {
      smooth: true,
      duration: 500,
    });
  };
  
      let scrollToLoc = ()=>{
          scrollToElement('who');
      }

      let blured = "blur"
      

  return (
    <main className=" p-0 flex flex-col gap-10 overflow-hidden " >
      <Navbar func = {navBlur} revert={revertVisibility}  visibility={visibility} />
      <div className="fixed self-center mt-[100px] z-0">
      <Hero blury={blured} func={scrollToLoc} show="hidden"/>
      </div>
      

        {/* Projects come here */}
      <SimProject blury={blury}/>
        
      <Footer blury={blury}/>

      
      
      
      
      
      

      

      
      
    </main>
  )
}
