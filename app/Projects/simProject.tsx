export default function SimProject (attr : any) {
    let mainStyle = `${attr.blury} h-auto w-[80vw] mdm:w-[90vw] text-white bg-[#111] rounded-[80px] self-center p-20 opacity-60 mdm:p-9 mdm:rounded-[40px]`
    return(

        

        <div className={mainStyle}>
            <h1 className="border-b-2 pb-3 border-orngclr text-[35px] text-white  mdm:text-[25px]   ">Industrial Simulation with Our own simpy monitoring framework </h1>
            
            <section className="text-orngclr flex justify-between mx-4 mt-2 mdm:flex-col mdm:mx-2">
                <h2>Date: 2024 - 03 - 05</h2>
                <h2>Dev : Team - Keplar</h2>
                
            </section>

            <section className="mdm:text-[14px]">
            <p className="pt-2">
The SimPy Monitoring Framework is a revolutionary tool for industrial simulation that integrates robust monitoring functionalities for real-time insights into processes like manufacturing, logistics, and energy systems. It offers customizable, scalable solutions with real-time data visualization through dashboards, optimizing performance and enhancing efficiency. The framework also prioritizes security with measures like data encryption and role-based access control. Designed for high performance without compromising on accuracy, it marks a significant advancement in simulation technology, empowering users to drive innovation and improve operations in various industrial scenarios.
</p>
            </section>
        </div>
    );
}