
export default function Footer (attr : any) {

    let footerStyle = `${attr.blury} bg-orngclr w-[100%] h-fit py-5 rounded-t-[60px] flex flex-col flex-wrap gap-10 justify-center items-center `

    return(
        <footer className={footerStyle}>

            <div className="flex gap-10 ">
            <div className="flex flex-col">
                <h1 className="font-bold">Company</h1>
                <ul>
                    <li>About</li>
                    <li>Members</li>
                    <li>Growth</li>
                </ul>
            </div>
            
            <div className="flex flex-col">
                <h1 className="font-bold">Services</h1>
            </div>
            
            <div className="flex flex-col">
                <h1 className="font-bold">Resources</h1>
            </div>

            <div className="flex flex-col">
                <h1 className="font-bold">Contact Us</h1>
            </div>

            </div>

            <div className="Brand">
            © 2024 Terracode Inc. All rights reserved.
            </div>
        </footer>
    );
}