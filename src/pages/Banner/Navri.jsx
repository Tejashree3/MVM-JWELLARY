import React from 'react';
import img from "../../assets/navri/navri.png";
import img1 from "../../assets/navri/img1.png";
import img2 from "../../assets/navri/img2.png";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant';

const Navri = () => {
  return (
    <div className="flex justify-center items-center ">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover flex justify-end items-start bg-no-repeat bg-center w-full h-[990px]"
      >
<div className='container flex justify-end items-end pt-50 flex-col'>

<div className='flex justify-between items-center gap-6 pr-0 md:pr-10 flex-col'>
<img src={img1} alt="" />
<img src={img2} alt="" />

<div className=''>
  <Link to={ROUTES.PRODUCTS}>  
    <button className='shop-now'>
        SHOP NOW
    </button>
    </Link>
</div>
</div>
</div>

      </div>
    </div>
  );
};

export default Navri;
