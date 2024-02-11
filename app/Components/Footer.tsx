import Image from "next/image";

import email from "@/public/emailIcon.png"
import phone from "@/public/phone.png"
import projects from "@/public/projects.png"
import events from "@/public/events.png"





export default function Footer (attr : any) {
    
    let footerStyle = `${attr.blury} text-[14px] bg-orngclr w-[100%] h-fit py-5 px-5 rounded-t-[60px] flex flex-col  gap-10 justify-center items-center `

    return(
        <footer className={footerStyle}>

            <div className="flex flex-wrap gap-10 justify-center ">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold">Company</h1>
                    <ul className=" text-[#000]">
                        <li>About</li>
                        <li>Members</li>
                        <li>Growth</li>
                    </ul>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                    <h1 className="font-bold">Services</h1>
                    <ul className="list-disc text-[#000]">
                    <li>Custom Software Development</li>
                    <li>Web Development</li>
                    <li>Mobile Application Development</li>
                    <li>UI/UX Design</li>
                    <li>Consulting Services</li>
                    <li>Quality Assurance and Testing</li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-3">
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

                <div className="flex flex-col items-center gap-3">
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

            <div className="Brand">
            © 2024 Terracode Inc. All rights reserved.
            </div>
        </footer>
    );
}