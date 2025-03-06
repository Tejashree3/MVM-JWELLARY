import React from 'react'
import img from "../../assets/gallery/galley1.png"

import strip from "../../assets/gallery/strip.png"
import strip2 from "../../assets/gallery/strip2.png"
import title from "../../assets/gallery/udghatan.png"
import g1 from "../../assets/gallery/g1.png"
import g2 from "../../assets/gallery/g2.png"
import g3 from "../../assets/gallery/g3.png"
import { GrGallery } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constant'
import { motion } from 'framer-motion'

const galleryimg = {
    images: [
      { src: g1, title: "उद्घाटन समारंभ" },
      { src: g2, title: "लक्ष सायन्स फेस्टिवल" },
      { src: g3, title: "गोल्ड फेस्टिवल" },
      { src: g1, title: "सोनेरी गट्टी" },
      { src: g2, title: "mvm टीम ची कोलकात्य वारी" },
      { src: g3, title: "मंगलमय महोत्सव" },
      { src: g1, title: "खास दिवस वाढदिवस" },
      { src: g2, title: "mvm चे नयन भरे" },
    ],
  };
const ViewGallery = () => {
    return (
        <div>
            <div className=''>

                <div className='bg-cover flex justify-center items-center bg-no-repeat bg-center w-full min-h-screen py-30'

                    style={{ backgroundImage: `url(${img})` }}
                >

                    <div className='container max-auto '>
                        <div className='min-h-screen'>

                            <div className='flex gap-7 flex-col '>
                                <div className=''>

                                    <img src={title} alt="" className=' mb-1' />
                                  
                                </div>
                                
                                <div className='text-[25px] leading-10 font-medium text-white w-full '>

                                    <p className=''>
                                    आमच्या प्रवासातील खास क्षण, भव्य उद्घाटन सोहळे, विशेष कार्यक्रम आणि ग्राहकांसोबतच्या आठवणी यांचे सुंदर क्षणचित्र येथे पाहा. 
                                    प्रत्येक कार्यक्रम हा केवळ एक प्रसंग नसून, तो आमच्या प्रवासातील 
                                    एक सोनेरी पान आहे. आमच्या उत्साहपूर्ण आणि दैदिप्यमान क्षणांना तुमच्यासोबत शेअर करताना आम्हाला अभिमान वाटतो.

                                    </p>
                                </div>
                            </div>
                        

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
  <div className="md:col-span-1 overflow-hidden">
    <img
      src={galleryimg.images[0].src}
      alt={galleryimg.images[0].title}
      className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>

  <div className="md:col-span-2 grid grid-cols-2 gap-4">
    {galleryimg.images.slice(1, 5).map((gal, index) => (
      <div key={index} className="overflow-hidden shadow-lg">
        <img
          src={gal.src}
          alt={gal.title}
          className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>

  <div className="md:col-span-3 grid grid-cols-4 gap-4">
    {galleryimg.images.slice(4, 9).map((gal, index) => (
      <div key={index} className="overflow-hidden shadow-lg">
        <img
          src={gal.src}
          alt={gal.title}
          className="w-full h-[150px] border-design object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>




                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewGallery
