import React from 'react'
import img from "../../assets/gallery/galley2.png"
import img2 from "../../assets/gallery/galley2.png"
import strip from "../../assets/gallery/strip.png"
import strip2 from "../../assets/gallery/strip2.png"
import title from "../../assets/gallery/title.png"
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
const Gallery = () => {
    return (
        <div>
            <div className=''>

                <div className='bg-cover flex justify-center items-center bg-no-repeat bg-center w-full min-h-screen py-30'

                    style={{ backgroundImage: `url(${img})` }}
                >

                    <div className='container max-auto '>
                        <div className='min-h-screen'>

                            <div className='flex gap-7 flex-col md:flex-row'>
                                <div className='w-full max-w-[230px]'>

                                    <img src={title} alt="" className='w-full max-w-[249px] mb-1' />
                                    <img src={strip2} alt="w-full " />
                                    <h3 className='text-white text-[18px] font-medium py-2'>MVM Jewellers च्या
                                        अविस्मरणीय क्षणांची झलक!</h3>
                                    <img src={strip2} alt="w-full " />
                                </div>
                                <div className=''>

                                    <img src={strip} alt="" />
                                </div>
                                <div className='text-[25px] leading-10 font-medium text-white w-full max-w-2xl'>

                                    <p className=''>आमच्या प्रवासातील खास क्षण, भव्य उद्घाटन सोहळे, विशेष कार्यक्रम आणि ग्राहकांसोबतच्या आठवणी यांचे सुंदर क्षणचित्र येथे पाहा.
                                        प्रत्येक कार्यक्रम हा केवळ एक प्रसंग नसून,तो आमच्या प्रवासातील एक सोनेरी पान आहे. आमच्या उत्साहपूर्ण आणि दैदिप्यमान क्षणांना तुमच्यासोबत
                                        शेअर करताना आम्हाला अभिमान वाटतो.</p>
                                </div>
                            </div>
                        

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
  {galleryimg.images.map((gal, index) => (
    <div
      key={index}
      className="relative group effect effect-six overflow-hidden gallery-img  shadow-lg"
    >
      <img
        src={gal.src}
        alt={gal.title}
        className="w-full h-[180px] grayscale group-hover:grayscale-0 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <p className="absolute max-w-[130px] p-2 m-[30px] text-right text-sm leading-tight opacity-0 transition-all duration-300 bottom-0 right-0 border-r-4 border-white text-white">
        {gal.title}
      </p>

      <div className="absolute bottom-1 flex justify-between z-10 left-0 right-0 bg-gradient-to-r to-[#43333D] from-[#BE6C46] text-white px-4 py-2 text-sm text-left">
        {gal.title}
        <Link to={ROUTES.GALLERYVIEW}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-800 text-white rounded-md transition-transform duration-300"
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GrGallery />
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </div>
  ))}
</div>




                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery
