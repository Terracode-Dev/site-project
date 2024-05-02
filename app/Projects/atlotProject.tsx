export default function AtlotProject (attr : any) {
    let mainStyle = `${attr.blury} h-auto w-[80vw] mdm:w-[90vw] text-white bg-[#111] rounded-[80px] self-center p-20 opacity-60 mdm:p-9 mdm:rounded-[40px]`
    return(

        

        <div className={mainStyle}>
            <h1 className="border-b-2 pb-3 border-orngclr text-[35px] text-white  mdm:text-[25px]   ">Empowering Your Digital Infrastructure with Atlot: an AI-Driven Backend Solution</h1>
            
            <section className="text-orngclr flex justify-between mx-4 mt-2 mdm:flex-col mdm:mx-2">
                <h2>Date: 2024 - 04 - 28</h2>
                <h2>Dev : Team - Colon</h2>
                
            </section>

            <section className="mdm:text-[14px]">
            <p className="pt-2">
            Introducing Atlot, the cutting-edge backend platform engineered to enhance operational efficiency and scalability through advanced AI technology. Tailored for discerning developers, Atlot dynamically adapts to your application's needs, ensuring optimal performance under any conditions. This platform not only promises customization through user-defined protocols but also guarantees a seamless deployment experience across various environments. Choose Atlot for a sophisticated, powerful backend solution that elevates your projects to new heights of excellence. Embrace the future with Atlot—where innovation meets reliability, empowering your applications to thrive.
            </p>

            <p className="text-orngclr">
                (Ongoing Project)
            </p>
            </section>
        </div>
    );
}