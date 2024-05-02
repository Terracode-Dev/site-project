'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import us from '@/public/us.png'
import logo from '@/public/terralogo.svg'



const Cominfo = (attr : any) => {
  return (
    <section id ="who" className={`${attr.blury} mx-[90px] mdm:mx-[10px] flex flex-col gap-[50px]`}>
      <div className='whopart_container px-4 mdm:px-[1rem] py-4 mdm:py-[3rem] w-[100%]  '>
        <div className="w-[100%] flex justify-end">
            <Image 
              src='/us.png'
              alt='who'
              width={40}
              height={100}
            />
        </div>

        <div className=" md:text-[40px] text-[2.8rem] sm:text-[35px] sm:mb-[70px] z-10">
            <TypewriterComponent 
              options={
                {
                  strings : ['WHO//:: ?'],
                  autoStart : true,
                  loop : true,
                  delay: 200,
                  //onComplete: handleTypingComplete,
                }
              }
            />
        </div>
      </div>

      {/*image begins*/}

      <div className='relative flex justify-center md:h-[300px]'>
        <Image
          src={'/backCircles.svg'}
          alt='logo'
          width={1250}
          height={100}
        />

        {/* logo and text */}
        <div className='absolute inset-0 flex justify-center items-center terraLogo:mt-6'>

          <div className="py-[55px] px-4 sm:mb-[80px] flex gap-[5rem] justify-center items-center sm:text-left mdm:pt-[114px] sm:px-10 mdm:flex-col lgm:gap-[3rem]">
            <motion.div initial={{opacity:0,x:'-100px'}} whileInView={{opacity:1,x:0}}>
            <Image
              src={'/terralogo.svg'}
              alt='logo'
              width={120}
              height={120}
          className='sm:w-[150px] sm:h-[150px] w-[250px] h-[250px]'

            />
            </motion.div>
            <motion.p className="w-[85vw] text-center 2lg:w-[800px]" initial={{opacity:0,x:'50px'}} whileInView={{opacity:1,x:0}} transition={{duration:0.4}}>
              At <span className='text-orngclr'>Terracode</span> , we are dedicated to providing innovative solutions that address the unique needs and 
              challenges of our clients. Our core focus is on delivering excellent software products that are designed to streamline expected processes, enhance efficiency, and drive results beyond the expectations of our customers.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cominfo;