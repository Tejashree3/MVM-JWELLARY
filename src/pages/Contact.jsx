import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaPhone, FaPhoneSlash, FaPhoneVolume, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center">

    <div className="container">

    <div className=" flex flex-col md:flex-row p-2 md:p-2 rounded-lg shadow-lg w-full max-w-5xl mx-auto">
      <div className="relative overflow-hidden bg-[#660033] text-white poppins p-10 rounded-bl-lg rounded-tl-lg md:max-w-1/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl  poppins font-semibold">Contact Information</h2>
          <p className="mt-3 poppins font-normal text-md">Say something to start a live chat!</p>
          
        </div>
          <div className="mt-4 space-y-3 flex justify-center items-start gap-5 flex-col">
            <p className="poppins flex items-center gap-4"><MdPhoneInTalk className="cursor-pointer text-xl" />+1012 3456 789</p>
            <p className="poppins flex items-center gap-4"><IoMdMail  className="cursor-pointer" />demo@gmail.com</p>
            <p className="poppins flex items-center gap-4"><MdLocationOn className="cursor-pointer text-2xl" /> 132 Dartmouth Street Boston,
            <br/>Massachusetts 02156 United States</p>
          </div>



        <div className="flex space-x-4  mt-6 text-2xl">
              <FaTwitter className="cursor-pointer rounded-full text-[#660033] p-1 bg-white" />
              <FaInstagram className="cursor-pointer rounded-full text-[#660033] p-1 bg-white" />
              <FaFacebookF className="cursor-pointer rounded-full text-[#660033] p-1 bg-white" />
            </div>
      <div className="bg-[#490025] -bottom-12 -right-20 absolute rounded-full w-[200px] h-[200px]">

</div>

<div className="bg-[#600130] bottom-12 -right-20 absolute rounded-full w-[100px] h-[100px]">

</div>

      </div>
      
      <div className="bg-white p-6 md:p-8 rounded-br-lg rounded-tr-lg shadow-lg md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold poppins ">First Name</label>
            <input type="text" className="w-full border-b-2 border-gray-300 focus:outline-none py-1" placeholder="John" />
          </div>
          <div>
            <label className="text-sm font-semibold poppins">Last Name</label>
            <input type="text" className="w-full border-b-2 border-gray-300 focus:outline-none py-1" placeholder="Doe" />
          </div>
          <div>
            <label className="text-sm font-semibold poppins">Email</label>
            <input type="email" className="w-full border-b-2 border-gray-300 focus:outline-none py-1" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-semibold poppins">Phone Number</label>
            <input type="text" className="w-full border-b-2 border-gray-300 focus:outline-none py-1" placeholder="+1012 3456 789" />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold poppins">Select Subject?</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {["General Inquiry", "Support", "Billing", "Feedback"].map((subject, index) => (
              <label key={index} className="flex items-center gap-1">
                <input type="radio" name="subject" className="form-radio text-[#660033]" />
                {subject}
              </label>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold poppins">Message</label>
          <textarea className="w-full poppins border-b-2 border-gray-300 focus:outline-none py-1" rows="3" placeholder="Write your message..."></textarea>
        </div>
        
        <button className="mt-6 bg-[#660033] poppins text-white px-6 py-2 rounded-lg">Send Message</button>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
