import React from 'react'
import img1 from "../../assets/product/product-banner.png"
import { ROUTES } from '../../constant'
import img2 from "../../assets/MVM3.png"
import img3 from "../../assets/product/mangalsutra.png"
import img4 from "../../assets/product/premacha-dhaga.png"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import promain from "../../assets/product/mainpro.jpg"

import pro1 from "../../assets/product/pro1.png"
import pro2 from "../../assets/product/pro2.png"
import pro3 from "../../assets/product/pro3.png"
import { CiHeart, CiSaveUp2 } from 'react-icons/ci'









const product = {
    title: "Symbol of Love & Tradition",
    name: "MVM MANGALSUTRA",
    originalPrice: 40000,
    discountedPrice: 28000,
    sold: 1238,
    rating: 4.5,
    description:
        "Celebrate the sacred bond of love with our exquisitely crafted Gold & Black Beaded Mangalsutra. Designed to blend tradition with contemporary elegance, this piece is a perfect symbol of marital bliss and lifelong commitment.",
    features1: "Premium Craftsmanship – Made with high-quality gold and intricately designed black beads.",
    features2: "Traditional yet Stylish – A perfect mix of cultural heritage and modern aesthetics.",
    sizes: [6, 8, 10, 14, 18, 20],
    images: [
        promain,
        pro1,
        pro2,
        pro3
    ]
};



const ViewProductPage = () => {



    const [currentImage, setCurrentImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <div
                style={{ backgroundImage: `url(${img1})` }}
                className="bg-cover flex justify-center items-center bg-no-repeat bg-center min-h-[370px] w-full"
            >
                <div className='container '>
                    <div className='mb-6'>
                        <Link to={ROUTES.HOME}>

                            <img src={img2} alt="" />
                        </Link>
                    </div>
                    <div className=' grid md:grid-cols-2 items-end'>
                        <div className=''>
                            <Link to={ROUTES.PRODUCTS}>

                                <img src={img3} alt="" />
                            </Link>
                        </div>
                        <div className=''>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

                <div className="container mx-auto py-24 flex    gap-12">
                    <div className="w-1/2">
                        <div className="relative flex gap-5">
                            <img
                                src={product.images[currentImage]}
                                alt="Product"
                                className="w-full max-w-md  min-h[610px] object-cover rounded-lg"
                            />
                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <button className='px-3 py-3 bg-gray-200 rounded-md'>
                                        <CiSaveUp2 size={20} />

                                    </button>
                                    <button className='px-3 py-3 bg-gray-200 rounded-md'>

                                        <CiHeart size={20} />
                                    </button>

                                </div>
                                <div className='flex flex-col gap-4'>

                                    <button onClick={prevImage} className="px-2 py-2 text-2xl bg-gray-200 rounded-md">&#8249;</button>
                                    <button onClick={nextImage} className=" px-2 py-2 text-2xl bg-gray-200 rounded-md">&#8250;</button>
                                </div>

                            </div>
                        </div>
                        <div className="flex mt-4 gap-2 ">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="Thumbnail"
                                    className={`w-20 h-25 object-cover cursor-pointer rounded-lg ${currentImage === index ? "border-2 border-black" : ""
                                        }`}
                                    onClick={() => setCurrentImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col gap-2 pr-20 pl-10  ">
                        <h2 className="text-md font-medium pb-1 text-[#8F8F8F]">{product.title}</h2>
                        <h2 className="text-4xl font-semibold">{product.name}</h2>
                        <div className='flex items-center py-5 border-b border-dashed justify-between'>
                            <div className='flex items-center gap-5'>

                                <p className="text-md font-medium text-[#8F8F8F] line-through">Rs.{product.originalPrice}</p>
                                <p className="text-black text-2xl font-bold">Rs.{product.discountedPrice}</p>
                            </div>
                            <div className=''>

                                <p className="text-md font-medium text-[#8F8F8F]">{product.sold} Sold • ⭐ {product.rating}</p>
                            </div>
                        </div>

                       <div className='py-3 flex gap-3 flex-col'>

                            <h5 className='text-lg font-bold'>
                                Description</h5>
                            <p className="text-md font-medium text-[#8F8F8F]">{product.description}</p>
                        </div>
                        <div className=' flex flex-col gap-3 pt-2'>
                            <h5 className='text-lg font-bold'>
                                Key feature</h5>
                            <p className="text-md font-medium text-[#8F8F8F]">{product.features1}</p>
                            <p className="text-md font-medium text-[#8F8F8F]">{product.features2}</p>

                        </div>

                        <div className='py-6'>
                            <div className='flex justify-between '>

                                <p className="text-md  font-medium text-[#646464]">Size: <span className='text-md  font-semibold text-black'>{selectedSize}</span></p>
                                <Link >
                                    <p className='text-md underline font-medium text-[#646464]'>
                                        View size cart
                                    </p>
                                </Link>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-6 py-1 border rounded-lg ${selectedSize === size ? "bg-gray-300 text-black font-semibold" : ""}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button className="px-14 py-2.5 bg-[#6B2929] text-white rounded-lg flex items-center gap-2">
                                <FaHeart /> Add To Favorite
                            </button>
                            <button className="px-6 py-2.5 bg-white border text-black rounded-lg">Checkout Now</button>
                        </div>

                        <p className='text-sm pt-7 font-medium text-[#646464]'>
                            Delivery T&C
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default ViewProductPage
