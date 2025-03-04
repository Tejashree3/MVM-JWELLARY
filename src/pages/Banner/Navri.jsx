import React from 'react';
import img from "../../assets/navri/navri.png";
import img1 from "../../assets/navri/img1.png";
import img2 from "../../assets/navri/img2.png";

const Navri = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover flex justify-end items-start bg-no-repeat bg-center w-full h-[990px]"
      >
<div className='container flex justify-end items-end pt-50 flex-col'>

<div className='flex justify-between items-center gap-6 pr-10  flex-col'>
<img src={img1} alt="" />
<img src={img2} alt="" />

<div className=''>
    <button className='shop-now'>
        SHOP NOW
    </button>
</div>
</div>
</div>

      </div>
    </div>
  );
};

export default Navri;
