import React from 'react'
import img3 from "../../assets/about/about3.png"

const Imagesection = ({innerImage}) => {
    return (
    
            <div className=' min-h-[286px] flex justify-center items-center'
                style={{
                    backgroundImage: `url(${img3})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
                }
            >
<div className='container'>

                <div className='px-10 flex justify-center items-center'>

                    <img src={innerImage} alt="" />
                </div>
</div>

            </div>
     
    )
}

export default Imagesection