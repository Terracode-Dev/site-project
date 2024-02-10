import Image from 'next/image'

//Images
import backArrow from '@/public/BackArrow.png'

const Corousel = () => {
    return (

        <div>
        <div>
            <Image src={backArrow} alt="BackArrow"/>
        </div>
        <div>
            <Image src={} alt="Prj1"/>
        </div>
        </div>
    )
}

export default Corousel;