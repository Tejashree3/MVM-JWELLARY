import React from "react";
import s1 from "../../assets/soundary/s1.png";
import s2 from "../../assets/soundary/s2.png";
import s3 from "../../assets/soundary/s3.png";
import strip from "../../assets/soundary/s-strip.png";
import silver from "../../assets/soundary/silver.png";
import set from "../../assets/soundary/set.png";
import design from "../../assets/soundary/design.png";
import strip1 from "../../assets/soundary/strip.png";
import s from "../../assets/soundary/s.png";

const Soundarya = () => {
  return (
<div className="">
    <div className="pb-10 pt-16 flex justify-center items-center flex-col">
<img src={s} alt="" />
<img src={strip1} alt="" />
    </div>
    <div className="grid md:grid-cols-3 ">
      <div className="relative gallery-img-1
       text-center overflow-hidden">
        <img src={s1} alt="Modern Design" className="w-full h-100vh object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-t gap-3 from-black/70 to-transparent 
        flex justify-center items-center flex-col text-white px-12 py-8">
<img src={design} alt="" />
 <img src={strip} alt="" />
          <p className="text-sm">स्टाईलची नवी परिभाषा, आधुनिकतेच्या स्पर्शाने</p>
        </div>
      </div>

      <div className="relative gallery-img-1
       text-center overflow-hidden">
        <img src={s2} alt="Silver Set" className="w-full h-100vh object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent gap-3 flex justify-center items-center flex-col text-white px-12 py-8">
<img src={silver} alt="" />
      <img src={strip} alt="" />

          <p className="text-sm">चांदीची झळाळी, तुमच्या घराचं वैभव</p>
        </div>
      </div>

      <div className="relative gallery-img-1
       text-center overflow-hidden">
        <img src={s3} alt="Necklace Set" className="w-full h-100vh object-cover " />
        <div className="absolute bottom-0 w-full bg-gradient-to-tnb gap-3 from-black/70 to-transparent flex justify-center items-center flex-col text-white px-12 py-8">
<img src={set} alt="" />          <img src={strip} alt="" />

          <p className="text-sm">तुमच्या सौंदर्याला गाणारा प्रत्येक मनमोहक दागिना</p>
        </div>
      </div>
    </div>
</div>

  );
};

export default Soundarya;