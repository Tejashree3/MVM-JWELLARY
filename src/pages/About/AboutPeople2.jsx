import React from 'react'
import img1 from "../../assets/about/image-box-3.png"
import img2 from "../../assets/about/image-box-4.png"

const AboutPeople2 = () => {
  return (
    <>
    
    <div className='flex justify-center flex-col py-20'
    
    
    >
<div className='container '>

<div className='grid grid-cols-1 md:grid-cols-2 '>
<div className='flex justify-center items-center gap-6 flex-col '>

<img src={img1} className='image-card-left' alt="" />
<p className='baloo text-2xl font-normal text-primary '>मल्लाप्पा विराप्पा मजती </p>
</div>
<div className='flex justify-center gap-6 items-center flex-col'>

<img src={img2} className='image-card-right' alt="" />
<p className='baloo text-2xl font-normal text-primary'>मल्लाप्पा विराप्पा मजती  </p>

</div>
</div>


<div className='pt-24'>
    <h2 className='baloo text-primary text-center font-bold text-4xl'>
    नव्या युगाचे नेतृत्व
    </h2>
</div>

<div className="py-12 flex justify-center flex-col items-center gap-7">
  <div className="w-full max-w-[870px] px-8">
    <p className="text-center poppins font-normal text-3xl text-[#000000]">
    [तिसऱ्या पिढीचे नाव] यांनी डिजिटल युगात पाऊल टाकत MVM ज्वेलर्सला जागतिक स्तरावर पोहोचवण्याचा संकल्प केला. ऑनलाईन प्लॅटफॉर्म, नवीन डिझाइन्स आणि आधुनिक तंत्रज्ञानाच्या साहाय्याने त्यांनी हा वारसा नव्या उंचीवर नेला.
    </p>
  </div>
  <div className="w-full max-w-[870px] px-8">
    <p className="text-center poppins font-normal text-3xl text-[#000000]">
    परंपरा आणि नवनिर्मिती यांचा सुंदर संगम साधत, आजची पिढी जुन्या मूलभूत तत्त्वांना जपत नवीन तंत्रांसह पुढे जात आहे. आमचा हा प्रवास केवळ दागिन्यांचा नाही, तर एक विश्वास, कला आणि प्रेम यांचा संगम आहे.
    </p>
  </div>
</div>

</div>


    </div>
    </>
  )
}

export default AboutPeople2