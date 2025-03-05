import React, { useState } from 'react'
import img1 from "../../assets/product/product-banner.png"
import img2 from "../../assets/MVM3.png"
import img3 from "../../assets/product/mangalsutra.png"
import img4 from "../../assets/product/premacha-dhaga.png"
import card1 from "../../assets/product/card1.png"
import card from "../../assets/product/main-card.png"

import { IoMdHeart } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constant'

const categories = ["Charms","Earrings" ,"Ring", "Necklace", "Bracelet"];
const products = [
  { id: 1, name: "-20% BLACK FRIDAY", category: "Pulsera Moments Cadena de Serpiente con cierre de Corazón", image:card1 },
  { id: 2, name: "Gold Necklace", category: "Necklace", image:card },
  { id: 3, name: "Silver Bracelet", category: "Bracelet", image:card },
  { id: 4, name: "Ruby Ring", category: "Ring", image:card},
  { id: 5, name: "Pearl Necklace", category: "Necklace", image: card},
];

const Products = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      );
    };
  
    const filteredProducts = selectedCategories.length
      ? products.filter((p) => selectedCategories.includes(p.category))
      : products;
  
    return (
        <div>

            <div className=' '>
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
                                <img src={img3} alt="" />
                            </div>
                            <div className=''>
                                <img src={img4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

<div className='container'>
<div className='flex justify-end'>
<p className='font-light text-sm'>200 Results</p>
</div>
<div className="flex min-h-screen px-6 py-15">
      <div className="w-[284px]  p-4">
        <div className='border-b-gray-400  '>

        <h2 className="text-2xl font-normal mb-4">Categories</h2>
        {categories.map((category) => (
          <div key={category} className="flex  items-center mb-3">
            <input
              type="checkbox"
              id={category}
              className="mr-6 p-3 w-5 h-5"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            <label htmlFor={category} className="font-normal text-[16px]">{category}</label>
          </div>
        ))}
        </div>
      </div>

      <div className="w-[1000px] p-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="card-img mb-3" />
            <div className="flex gap-2">
  <label className="cursor-pointer">
    <input type="radio" name="color" className="hidden peer" />
    <div className="w-5 h-5 bg-gradient-to-r to-gray-400 from-gray-600 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
  </label>

  <label className="cursor-pointer">
    <input type="radio" name="color" className="hidden peer" />
    <div className="w-5 h-5 bg-gradient-to-r to-yellow-400 from-yellow-600 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
  </label>

  <label className="cursor-pointer">
    <input type="radio" name="color" className="hidden peer" />
    <div className="w-5 h-5 bg-gradient-to-r to-[#B53A3A] from-red-900 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
  </label>
</div>

<div className='flex flex-col pt-2 gap-1'>


            <h3 className="card-title">{product.name}</h3>
            <p className="card-subtitle">{product.category}</p>
            <p className='price'>$534534   <span className='price-wrong'>$232323</span></p>
            </div>
            <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
                <IoMdHeart size={20} />
              </button>
          </div>
        ))}
      </div>
    </div>
</div>




            </div>

        </div>
    )
}

export default Products
