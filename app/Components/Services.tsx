'use client'
import Image from 'next/image';

import { VariantLabels, animate, motion } from 'framer-motion'
import { useState } from 'react';

import Tile from '@/app/Components/blocks/tile';

//--tools
import Typewriter from 'typewriter-effect';

//-----IMAGES---

import buildtxt from '@/public/BUILD.png'
//--fstile--
import fstack from '@/public/fstack.png'
import fstackW from '@/public/fstackW.png'
import reacticn from '@/public/react.png'
import pythonicn from '@/public/python.png'
import jsicn from '@/public/js.png'
import csharpicn from '@/public/csharp.png'
import phpicn from '@/public/php.png'
import cpp from '@/public/cpp.png'
import go from '@/public/go.png'

//--mobiletile--
import mobphone from '@/public/mobile.png'
import mobphoneB from '@/public/mobphoneB.png'
import kotlin from '@/public/kotlin.png'
import swift from '@/public/swift.png'
import java from '@/public/java.png'
import flutter from '@/public/flutter.png'

//----enterpriseTile----
import enterp from '@/public/enterprise.png'
import enterpB from '@/public/entB.png'
import netCore from '@/public/netcore.png'
import rust from '@/public/rust.png'


//AI Idea Tile
import idea from '@/public/research.png'
import ideaB from '@/public/Ideab.png'
import tf from '@/public/tensorf.png'
import numpy from '@/public/numpy.png'

//ImageBundlesForTiles
const tileImgs = {
    fullstack : {
        //img - for front side
        //simg - for back side
        img1 : fstack,
        img2 : fstackW,
        simglst : [reacticn,pythonicn,jsicn,rust,csharpicn,phpicn,cpp,go]

    },
    mobile : {
        img1 : mobphoneB,
        img2 : mobphone,
        simglst : [kotlin,swift,flutter,java]
        

    },
    enterprise : {
        img1 : enterpB,
        img2 : enterp,
        simglst : [netCore,csharpicn,rust,swift,java]
    },
    AI : {
        img1 : ideaB,
        img2 : idea,
        simglst : [pythonicn,tf,numpy,cpp]
    }
}

export default function Services (attr : any) {
    return (
        <div className={`${attr.blury} flex flex-col gap-[100px] mb-[70px] items-center lg:items-start py-6 mx-9 mt-[25vh] sm:mt-[200px]`}>

            <div className='flex gap-2 justify-center lg:justify-start items-center'>
                
                
                <section className='text-white flex  md:text-[40px] text-[3.5rem] sm:text-[25px] pl-6'>  ::
                
                <Typewriter

                options={{loop:true}}
                onInit={(typewriter) => {
                    let time = 100;
                        typewriter.typeString("<span style='color: #4E4C4C;'>What We Do<span style='color: white;'>..//</span></span>")
                            .callFunction(() => {
                            console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            // .deleteAll()
                            .callFunction(() => {
                            console.log('All strings were deleted');
                            })
                            .start();
                        time = 7000;
        
                }
                }
                />
                
                ::</section>


            </div>

            <div className='self-start  absolute'>
                    <Image src={buildtxt} alt="buildText"></Image>
            </div>

            <div className="circles flex gap-2 flex flex-wrap items-center justify-center">
                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1.0 }}>
                <Tile 
                    
                    img={tileImgs.fullstack} 
                    topic="Web Development" 
                    desc="Our company excels in designing bespoke web applications that cater to specific business requirements. We integrate robust APIs to ensure seamless functionality, enhancing user engagement and operational efficiency across diverse platforms."
                />
                </motion.div>

                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 0.5 , delay:0.2 }}>
                <Tile 
                    img={tileImgs.mobile} 
                    className="mr-[-20px]"
                    topic="Mobile App Development" 
                    desc="We are experts in creating state-of-the-art mobile applications, offering both hybrid and native development options. Our approach ensures optimal performance and adaptability, providing tailored solutions that meet the unique demands of your business."
                />
                </motion.div>

                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 0.5 , delay:0.4 }}>
                <Tile 
                    img={tileImgs.enterprise} 
                    className="mr-[-20px]"
                    topic="Enterprise Solutions" 
                    desc="We deliver advanced enterprise solutions that empower businesses to streamline processes, boost productivity, and achieve sustained growth. Our strategic implementations help you navigate complex market dynamics and maintain competitive advantage."
                />
                </motion.div>
                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 0.5 , delay:0.6 }}>
                <Tile 
                    img={tileImgs.AI} 
                    className="mr-[-20px]"
                    topic="AI Research & Innovation" 
                    desc="At the forefront of technological advancement, our dedicated AI research and innovation team develops groundbreaking artificial intelligence technologies. These innovations drive industry transformation and set new benchmarks for what technology can achieve."
                />
                </motion.div>
            </div>


        </div>
    )
}