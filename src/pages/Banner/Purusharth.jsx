// import React from 'react'
// import p1 from "../../assets/purusharth/purushrth.png"
// const Purusharth = () => {
//   return (
//     <div>
//         <div className="flex justify-center items-center min-h-screen ">
//       <div 
//       style={{backgroundImage:`url(${p1})`}}

//       className='bg-cover  bg-no-repeat bg-center w-full  h-[1117px]'
//       >
// </div>
//       </div>
//     </div>
//   )
// }

// export default Purusharth
import React, { useState } from 'react';
import p1 from "../../assets/purusharth/purushrth.png"
import p2 from "../../assets/purusharth/pu1.png"
import { ROUTES } from '../../constant';
import img1 from "../../assets/purusharth/pu2.png"
import img2 from "../../assets/navri/img2.png";
import { Link } from 'react-router-dom';

const products = [
  { name: 'ब्रोजेस', image: p2 },
  { name: 'माळा', image: p2 },
  { name: 'ब्रॅसलेट', image: p2 },
  { name: 'अंगठी', image: p2 },
  { name: 'टाय पिन्स', image: p2 },
];
const Purusharth = () => {

  
  return (
    <div className="flex justify-center items-center min-h-screen ">
         <div
           style={{ backgroundImage: `url(${p1})` }}
           className="bg-cover flex justify-start items-start bg-no-repeat bg-center w-full h-[1117px]"
         >
   <div className='container1 flex justify-end items-start pt-60 flex-col'>
   
   <div className='flex justify-between items-center gap-6 pl-50  flex-col'>
   <img src={img1} alt="" />
   <img src={img2} alt="" />
   

   </div>

<div className='flex gap-4 overflow-hidden'>
    <img src={p2} alt="" />
    <img src={p2} alt="" />
    <img src={p2} alt="" />
    <img src={p2} alt="" />
    <img src={p2} alt="" />
</div>


   </div>
   
         </div>
       </div>
  );
};

export default Purusharth;
