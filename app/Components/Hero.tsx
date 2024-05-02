import { animate, motion } from 'framer-motion'
import Image from 'next/image';
import Lottie from 'lottie-react';
import worldAnim from '@/public/Anim/worldScript.json';
import worldBlack from '@/public/Anim/worldBlack.json';
 import ashBall from '@/public/ashBalls.png';
 import orngBall from '@/public/us.png';
 import hometxt from '@/public/HOME.png';

export default function Hero (attr: any) {

    // scrollToElement.js

   


    let mainStyle = `${attr.blury} flex justify-center items-center ckl:mt-[260px] ckl:mb-[300px] p-0`
    let txtStyle : any = `${attr.show} absolute flex flex-col text-center items-center z-10 gap-16 mdm:gap-9`
    return (
        <main className={mainStyle}>
            
            {/* 2 crossed circle couple */}
            <div className="flex  w-[100%] z-10 justify-between ckl:hidden overflow-hidden">
                {/*1 - crossed circle */}
                <motion.div className="flex " initial={{marginLeft:"-772px"}} animate={{marginLeft:'-340px'}} transition={{ duration: 1.0 }}>
                    <div className={`border border-ashclr rounded-full h-[80vh] w-[80vh] mr-[-230px] p-0`}></div>
                    <motion.div initial={{marginLeft:"-400px"}} animate={{marginLeft:'-230px'}} transition={{ duration: 1.0,delay:0.5 }} className={`border border-ashclr rounded-full h-[80vh] w-[80vh] p-0`}></motion.div>
                </motion.div>
                {/*2 - crossed circle */}
                <motion.div className="flex" initial={{marginRight:"-772px"}} animate={{marginRight:'-340px'}} transition={{ duration: 1.0 }}>
                    <motion.div initial={{marginRight:"-400px"}} animate={{marginRight:'-230px'}} transition={{ duration: 1.0,delay:0.5 }} className={`border border-ashclr rounded-full h-[80vh] w-[80vh] p-0`}></motion.div>
                    <div className={`border border-ashclr rounded-full h-[80vh] w-[80vh] ml-[-230px] p-0`}></div>
                </motion.div>
            </div>
            {/* big circle */}
            <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{ duration: 1 }} className="absolute z-0 overflow-hidden flex items-center justify-center">
            <Lottie animationData={worldBlack} className="absolute  w-[150vh] h-[150vh]  mdm:w-[97vh] mdm:h-[97vh] opacity-60"  />
                <div className={`rounded-full h-[80vh] w-[80vh] mdm:h-[50vh] mdm:w-[50vh] overflow-hidden p-0 [background:linear-gradient(180deg,_rgba(232,_122,_21,_0.12),_rgba(89,_45,_4,_0.87)_50%,_rgba(248,_121,_3,_0))]`}></div>
                

            </motion.div>

            <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{ duration: 1 }} className="absolute self-start flex flex-col justify-between h-[80vh] w-[90vw]">
                <div className="flex justify-between">
                    <Image src={hometxt} alt="homeTxt" className=""/>
                    <Image src={orngBall} alt="orngBall" className="w-[50px]"/>
                </div>
                <div className="flex justify-start w-full">
                    <Image src={ashBall} alt="ashBall" className="w-[50px]"/>
                </div>
            </motion.div>
            
            {/* text */}

            
            <div className={txtStyle}>
                <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 1 }} className="text-orngclr text-4xl mdm:text-3xl font-normal">IT Solutions and Beyond</motion.section>
                <motion.section initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{ duration: 1 }} className="font-semibold text-7xl mdm:text-5xl">Bridging Tommorow with Today</motion.section>
                <motion.button initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{ duration: 1 }} className="py-3 px-6  bg-[#000000a1] text-orngclr border border-[#000000a1] w-fit font-light rounded-2xl font-bold" onClick={attr.func}>Start Exploring</motion.button>
            </div>
        </main>
    );
}