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
                
                
                <section className='text-white flex  md:text-[40px] text-[3.5rem] sm:text-[35px] pl-6'>  ::
                
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

            <div className='self-start ml-[30px] absolute'>
                    <Image src={buildtxt} alt="buildText"></Image>
            </div>

            <div className="circles flex gap-2 flex flex-wrap items-center justify-center">
                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 1.0 }}>
                <Tile 
                    
                    img={tileImgs.fullstack} 
                    topic="Full-Stack Development" 
                    desc="Full stack development refers to the practice of developing both the front-end and back-end components of a software application or website. A full stack developer is proficient in multiple programming languages and technologies, allowing them to work on all aspects of a project."
                />
                </motion.div>

                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 0.5 , delay:0.2 }}>
                <Tile 
                    img={tileImgs.mobile} 
                    className="mr-[-20px]"
                    topic="Mobile App Development" 
                    desc="Mobile development refers to the process of creating software applications or mobile apps that run on mobile devices such as smartphones and tablets. Mobile development is a specialized field with its own set of technologies, platforms, and best practices.."
                />
                </motion.div>

                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 0.5 , delay:0.4 }}>
                <Tile 
                    img={tileImgs.enterprise} 
                    className="mr-[-20px]"
                    topic="Enterprise Solutions" 
                    desc="Enterprise solutions, also known as enterprise software or business software, refer to a category of software applications and technologies designed to address the specific needs and challenges of large organizations and businesses."
                />
                </motion.div>
                <motion.div initial={{ opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration: 0.5 , delay:0.6 }}>
                <Tile 
                    img={tileImgs.AI} 
                    className="mr-[-20px]"
                    topic="AI Research & Innovation" 
                    desc="We are at the forefront of pioneering innovations that challenge the status quo and transform industries. Our team of experts, engineers, and visionaries collaborate to develop cutting-edge solutions that make a meaningful impact. Some key areas of our innovation"
                />
                </motion.div>
            </div>


        </div>
    )
}