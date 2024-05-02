import Image from "next/image";
import HomeImgNF from "@/public/homeNfill.png"
import HomeImgF from "@/public/homeFill.png"
import projF from "@/public/projectsFill.png"
import projNF from "@/public/projectsNfill.png"
import sendF from "@/public/sendFill.png"
import sendNF from "@/public/sendNfill.png"
import gitF from "@/public/gitFill.png"
import gitNF from "@/public/gitNfill.png"

import { animate, motion } from 'framer-motion'

export default function Navblock (attr : any) {


    let parentStyle = ` navblock:hidden z-40 fixed self-center bottom-0 `;
    let hlTile = ` flex flex-col justify-center items-center m-2 px-[10px] py-[3px] rounded-lg bg-[rgba(100,98,98,0.4)] z-50`;
    let nTile = ` flex flex-col justify-center items-center m-2`;

    return (
        
            <nav className={parentStyle}>
               
                <ul className="bg-[rgba(68,63,63,0.53)] w-[90vw] rounded-[17px] px-2 flex mb-6 items-center justify-center text-[#fff] text-[13px] gap-4 mx-4"
                style={{ backdropFilter: "blur(25px)" }}>
                    
                        <li >
                        <a href="../" className={attr.tile == 1 ? hlTile : nTile}>
                        <Image src={HomeImgNF} alt="Home" className='' style={{height:'25px',width:'25px',}} /> 
                        <div>Home</div>
                        </a>
                        </li>
                   
                    
                        <li >
                        <a href="../Projects" className={attr.tile == 2 ? hlTile : nTile}>
                        <Image src={projNF} alt="Home" className='' style={{height:'25px',width:'25px',}} /> 
                            Projects
                            </a>
                        </li>
                    

                    {/* <a href=""><li className='hover:text-orngclr cursor-pointer'>Solution</li></a> */}
                    
                        <li  >
                        <a href="https://github.com/Terracode-Dev" className={attr.tile == 3 ? hlTile : nTile}>
                        <Image src={gitNF} alt="Home" className='' style={{height:'25px',width:'25px',}} /> 
                            Github
                            </a>
                        </li>
                    
                    
                        <li >
                        <a href="../Form" className={attr.tile == 4 ? hlTile : nTile}>
                        <Image src={sendNF} alt="Home" className='' style={{height:'25px',width:'25px',}} /> 
                            Contact
                            </a>
                        </li>
                    
                </ul>
            
            </nav>
        
    );
}