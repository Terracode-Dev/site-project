'use client';


import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';



export default function Tile(args : any) { //balaporoththuwa: 2 image object,Topic and Description 


    //----Flip Handler----
    const [isFlipped, setIsFlipped] = useState(false);
    
  
    const flipCard = () => {
      setIsFlipped(!isFlipped);
    };

    //----Hover Handler---
    const [isHover, setHover] = useState(false);
    const handleHover = () => {
        setHover(true);
    }
    const handleUnhover = () => {
        setHover(false);
    }

    const handleClick = () => {

    }

    



    
    return (
        <div className="card-container w-fit" onClick={flipCard} >
            <motion.div
        className={`card cursor-pointer`}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1.0 }}
      >
        <div className={`w-[300px] h-[300px] rounded-full p-12 transition duration-300 ease-in-out`} style={isHover ? { background : isFlipped?'linear-gradient(0deg, rgba(82,17,52,1) 0%, rgba(118,9,121,1) 35%, rgba(230,142,0,1) 100%)':'white',border:isFlipped?'2px solid #E87A15':'2px solid #aeacac'}:{background: isFlipped?'linear-gradient(0deg, rgba(82,17,52,1) 0%, rgba(118,9,121,1) 35%, rgba(230,142,0,1) 100%)':'black',border:isFlipped?'2px solid rgb(74 4 78)':'2px solid #4E4C4C'}} onMouseEnter={handleHover} onMouseLeave={handleUnhover} onClick={handleClick}>
            <div className={`border-b-2 p-2 flex gap-4 justify-center items-center ${isFlipped ? 'hidden' : 'block'}`} style={{borderColor: '#4E4C4C'}}>
                <Image src={isHover ? args.img.img1 : args.img.img2}  alt="Terracode Logo"  style={{height:'50px',width:'53px'}} /> 
                <div className='text-orngclr font-medium '> {args.topic}</div>
            </div>
            <div className={`text-[10px] mt-2 text-center transition duration-300 ease-in-out ${isFlipped ? 'hidden' : 'block'}`} style={isHover?{color:'black'}:{color:'white'}}>
            {args.desc}
            </div>

            <div className={` ${isFlipped ? 'block' : 'hidden'} flex flex-col gap-10 `} style={{color:'black',transform: 'rotateY(-180deg)'}}>
                <p className="text-center text-purple-200 font-medium">Tools We Use</p>
                <div className='flex flex-wrap gap-5 justify-center items-center'>

                {args.img.simglst.map((image : any,index : any)=>(
                    <Image key={index} src={image}  alt="Tool"  style={{height:'45px',width:'45px'}} /> 
                ))}


                </div>

                
            </div>

            

        </div>
            </motion.div>

        </div>


            


            



    )
}



