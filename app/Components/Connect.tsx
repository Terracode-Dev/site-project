'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import Image from "next/image";

//Fonts
import { poppinsFont } from "@/app/Components/util/fonts";

//Images
import xTwitter from '@/public/TwitterX.png'
import GitImg from '@/public/GitHub.png'
import LinkedinImg from '@/public/LinkedIn.png'
import Patreon from '@/public/Patreon.png'

import ContactForm from '@/app/Components/blocks/ContactForm'




export default function Contact_section(attr : any){
    const rout = useRouter();
    const send_form = ()=>{
        rout.push('#');
    }


    let icnStyle = `flex justify-center items-center gap-2 w-[30px] h-[30px]`
    return(

        <div className={`parentAlpha flex flex-col  justify-center p-0 mb-[120px] items-center`}>

            <div className={`${attr.blury} my-[3rem] mx-[3rem] lgm:mx-[1rem] flex p-0 justify-center 2lg:gap-[180px]
            items-center w-fit cnct:w-[90vw] 2lg:pl-7 border-2 border-ashclr  lgm:flex-col items-center overflow-hidden`}
            style={{borderRadius:'100px'}}>

                {/* topic */}
                <div className="w-fit rounded-2xl  h-fit  flex flex-col justify-center items-center" style={{borderColor:'#4E4C4C'}}>
                                    
                        <div 
                        className={`${poppinsFont.className}  text-center text-orange-500 text-[6rem] cnct:mt-[9px] cnct:text-[15vw]`} 
                        style={{color:'#E87A15'}}
                        >Connect</div>
                        <div 
                        className={`${poppinsFont.className}  text-center    text-neutral-600 text-[6rem] font-normal cnct:text-[15vw] font-['Poppins'] mt-[-30px]`}
                        style={{color:'#4E4C4C'}}
                        >with us</div>
                                    
                </div>
                

                {/* circles */}
                <div className="relative flex justify-center items-center w-fit m-0" >

                    {/* two circles */}
                    <div className='flex z-0 w-[560px]' >
                    
                        <div 
                        className="rounded-full border-2 w-80 h-80"
                        style={{color:'#4E4C4C'}}
                        ></div>
                        <div 
                        className="rounded-full border-2 w-80 h-80 mx-[-5rem]"
                        style={{color:'#4E4C4C'}}
                        ></div>

                    </div>

                    {/* button */}
                    <div className="button border-2 h-fit w-fit px-4 py-2 absolute z-1 flex justify-center items-center hover:text-orngclr hover:border-ashclr"
                    style={{color:'balck',borderColor:'#E87A15',}}>
                        <a href="../Form"
                        className="button_content text-4xl lg:text-3xl">
                            Connect
                        </a>
                    </div>


                </div>
            </div>

            {/* <ContactForm visibility={attr.visibility} func={attr.revert} /> */}

            <div className={`${attr.blury} socialMedia flex justify-center items-center gap-[200px] flex-wrap`}>
                {/* x */}
                <div className={icnStyle}>
                    <Image src={xTwitter} alt='xTwitterImg'/>
                    <p>@terracode</p>
                </div>
                {/* github */}
                <div className={icnStyle}>
                    <Image src={GitImg} alt='GithubImg'/>
                    <p>@terracode</p>
                </div>
                {/* Linkedin */}
                <div className={icnStyle}>
                    <Image src={LinkedinImg} alt='LinkedInImg'/>
                    <p>@terracode</p>
                </div>

                <div className={icnStyle}>
                    <Image src={Patreon} alt='PatreonImg'/>
                    <p>@terracode</p>
                </div>
            </div>








        </div>
        
    );
}