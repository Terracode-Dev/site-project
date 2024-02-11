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





//---subCompos---
import ContactForm from '@/app/Components/blocks/ContactForm';

//utils



//----TEMP----// 


export default function Home() {

  let [visibility, setVisibility] = useState('hidden');
  let [blury, setBlury] = useState('');


  let navBlur = () => {
    setBlury('blur');
  }

  function revertVisibility(){
    setVisibility('hidden');
    setBlury('');
  }


  const handleScroll= () => {
    const targetElement = document.getElementById('who');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  


  return (
    <main className=" p-0 flex flex-col gap-10 overflow-hidden" >
      <div className='fixed z-30'><Navbar func = {navBlur} revert={revertVisibility} visibility={visibility}/></div>
      <div className='mt-[120px]'><Hero blury={blury} func={handleScroll} /></div>
      <HomePage blury={blury} />
      <Services blury={blury}/>
      <Contact blury={blury} visibility={visibility} revert={revertVisibility}/>
      
      {/* <ContactForm visibility={visibility} func={revertVisibility} /> */}
      
      <Footer blury={blury}/>

      
      
      
      
      
      

      

      
      
    </main>
  )
}
