import React from 'react'
import img1 from "../../assets/special/d.png"
import img2 from "../../assets/special/d1.png"
import img3 from "../../assets/special/s.png"
import img4 from "../../assets/special/special.png"
import img5 from "../../assets/special/shobha.png"
import img6 from "../../assets/special/mangalsutra.png"





const Special = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col gap-3 py-30'>
        <img src={img4} alt="" />
<img src={img5} alt="" />
<img src={img3} alt="" />
      </div>

<div   style={{ backgroundImage: `url(${img2})` }}
                className="bg-cover bg-no-repeat bg-center w-full h-screen"
>
    <div className=''>

    </div>
    <div className=''>
        
    </div>
</div>


    </div>
  )
}

export default Special
