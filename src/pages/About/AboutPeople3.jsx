import React from 'react';
import img1 from "../../assets/about/image-box-6.png";

const AboutPeople3 = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full   px-6">
          <h2 className="text-3xl font-semibold text-primary">संस्थापक</h2>
          <p className="text-lg text-gray-700 mt-4">
            MVM ज्वेलर्सचा पाया टाकणारे मल्लाप्पा विराप्पा मजती यांनी त्यांच्या कष्टाने आणि निष्ठेने व्यवसायाची मुहूर्तमेढ रोवली.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            लहानशा कार्यशाळेतून सुरू झालेली ही यात्रा आज एक प्रतिष्ठित नाव बनली आहे.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <img src={img1} className="image-card-right w-full" alt="Founder" />
          <p className="baloo text-2xl font-normal text-primary mt-4">
            मल्लाप्पा विराप्पा मजती
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPeople3;
