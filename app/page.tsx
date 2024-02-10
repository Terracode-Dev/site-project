'use client'
import Image from 'next/image';
import { useState } from 'react';

//----Components----//
import Navbar from './Components/Navbar';
import HomePage from '@/app/Components/Who';
//import Contact from './Components/Contact';
import Services from '@/app/Components/Services';
import Contact from '@/app/Components/Connect';
import Hero from '@/app/Components/Hero';
import Heroprev from '@/app/Components/Hero';

import Footer from '@/app/Components/Footer';
import PopForm from '@/app/Components/blocks/popMail';
import { animateScroll as scroll } from 'react-scroll';





//---subCompos---
import ContactForm from '@/app/Components/blocks/ContactForm';

//utils



//----TEMP----// 


export default function Home() {

  let [visibility, setVisibility] = useState('hidden');
  let [blury, setBlury] = useState('');

  function makeVisible(){
    // setVisibility('');
    // setBlury('blur');
  
  

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

  return (
    <main className=" p-0 flex flex-col gap-10 overflow-hidden " >
      <Navbar func = {navBlur} revert={revertVisibility} visibility={visibility}/>
      <Hero blury={blury} func={scrollToLoc} />
      <HomePage blury={blury} id="us"/>
      <Services blury={blury}/>
      <Contact blury={blury} visibility={visibility} revert={revertVisibility}/>
      
      {/* <ContactForm visibility={visibility} func={revertVisibility} /> */}
      
      <Footer blury={blury}/>

      
      
      
      
      
      

      

      
      
    </main>
  )
}
