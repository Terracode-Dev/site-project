import Image from "next/image";

import email from "@/public/emailIcon.png"
import phone from "@/public/phone.png"
import projects from "@/public/projects.png"
import events from "@/public/events.png"


//#48484854 bg
//#f78300



export default function Footer (attr : any) {
    
    let footerStyle = `${attr.blury} text-[14px] z-30 bg-orngclr w-[100%] h-fit pt-5 pb-5 terraLogo:pb-[120px] px-5 rounded-t-[60px] flex flex-col  gap-10 justify-center items-center  `

    return(
        <footer className={footerStyle}>

            {/* <div className="flex flex-wrap gap-[300px] mdm:gap-[50px] justify-center flex-1 "> */}

            <div className="flex flex-wrap gap-x-[100px] gap-y-[50px] px-[100px] terraLogo:px-[45px]">

                <div className="flex flex-col gap-3 items-center">
                    <h1 className="font-bold">Company</h1>
                    <ul className=" text-[#000] flex flex-col items-center">
                        <li>About</li>
                        <li>Members</li>
                        <li>Growth</li>
                        <li>Carriers</li>
                    </ul>
                </div>
                
                
                <div className="flex flex-col gap-3 flex-1">
                    <h1 className="font-bold">Resources</h1>
                    <div>
                        <div className="flex gap-3 items-center">
                            <Image src={projects} alt='gmail_image' className="w-[20px]"/>
                            <p className="text-[#000]">Projects</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Image src={events} alt='gmail_image' className="w-[20px]"/>
                            <p className="text-[#000]">Events</p>
                        </div>


                    </div>
                   
                </div>

                <div className="flex flex-col items-start gap-3 flex-1">
                    <h1 className="font-bold">Contact Us</h1>
                    <div>
                        <div className="flex gap-3 items-center">
                            <Image src={email} alt='gmail_image' className="w-[30px]"/>
                            <p className="text-[#000]">terracodedevs@gmail.com</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Image src={phone} alt='gmail_image' className="w-[25px]"/>
                            <p className="text-[#000]">+94775824406</p>
                        </div>


                    </div>
                </div>

            </div>

            <div className="Brand flex flex-col gap-4 justify-center items-center">
                    
            <Image
              src={'/terralogo.svg'}
              alt='logo'
              width={120}
              height={120}
          className='w-[50px]'

            />

                    <div>
                    © 2024 Terracode Inc. All rights reserved.
                    </div>

            </div>
        </footer>
    );
}