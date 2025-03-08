import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import p1 from "../../assets/sushobhita/sushobhita.png";
import p2 from "../../assets/purusharth/pu1.png";
import img1 from "../../assets/sushobhita/sushobit.png";
import img2 from "../../assets/navri/img2.png";
import brooch from "../../assets/purusharth/brooch.png";
import pin from "../../assets/purusharth/pin.png";
import ring from "../../assets/purusharth/ring.png";
import mala from "../../assets/purusharth/mala.png";
import brecleate from "../../assets/purusharth/brecleate.png";

const products = [
    { name: "ब्रोजेस", image: brooch },
    { name: "माळा", image: mala },
    { name: "ब्रॅसलेट", image: brecleate },
    { name: "अंगठी", image: ring },
];

const Sushobhit = () => {
    return (
        <div className="">
            <div
                style={{ backgroundImage: `url(${p1})` }}
                className="bg-cover bg-no-repeat bg-center w-full h-screen"
            >
                <div className="container">
                    <div className="flex justify-end items-center pt-30 md:pt-50  flex-col w-full max-w-[800px]">
                        <div className="flex items-center gap-3 md:pb-25 pb-10 pr-0   md:pr-30 flex-col">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>

                        
                        <div className="w-full max-w-[1200px]">

                            <Swiper
                                spaceBetween={0}
                                navigation={true}
                                pagination={{ clickable: true }}
                                modules={[Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    320: { slidesPerView: 2, },
                                    600: { slidesPerView: 2, },
                                    768: { slidesPerView: 3, },
                                    1024: { slidesPerView: 4, },
                                }}
                            >
                                {products.map((product, index) => (
                                    <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                                        <img src={p2} alt="Placeholder" className="mb-12 p-1" />
                                        <img src={product.image} alt={product.name} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

</div>
                    </div>

                        <div className="w-full md:pt-22 pb-20 pt-10 flex justify-start items-start">
                            <p className="text-white baloo text-[23px]">

                                आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये प्रत्येक दागिना हा<br />
                                सांस्कृतिक वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Sushobhit;
