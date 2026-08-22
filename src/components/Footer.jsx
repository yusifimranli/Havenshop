import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className='bg-black'>
        <div className='sm:flex items-center gap-6 justify-between p-7 overflow-hidden'>
        <a href="">
          <svg className='w-10 text-white' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4922 2H20.3427L16.9782 9.79377V14.0024H13.0218V9.79377H10.5607V20.2062L8.53583 24.8513L2.83489 15L8.90966 4.46283H16.5732L17.6324 2H7.50779L0 15L7.50779 28H9.65732L13.0218 20.2062V15.9976H16.9782V20.2062H19.4393V9.79377L21.4642 5.14868L27.134 15L21.0592 25.5372H13.4268L12.3676 28H22.4922L30 15L22.4922 2Z" fill="currentColor"></path></svg>
        </a>
        <ul className='sm:flex flex-wrap items-center gap-4 uppercase text-[#737373] text-sm font-medium'>
          <li className="cursor-pointer hover:text-white duration-300">Book an appointment</li>
          <li className="cursor-pointer hover:text-white duration-300">HAVEN Sound</li>
          <li className="cursor-pointer hover:text-white duration-300">About</li>
          <li className="cursor-pointer hover:text-white duration-300">Subscribe</li>
          <li className="cursor-pointer hover:text-white duration-300">Locations</li>
          <li className="cursor-pointer hover:text-white duration-300">Shipping Rates</li>
          <li className="cursor-pointer hover:text-white duration-300">Customer Support</li>
          <li className="cursor-pointer hover:text-white duration-300">Policies</li>
          <li className="cursor-pointer hover:text-white duration-300">Product Care</li>
          <li className="cursor-pointer hover:text-white duration-300">Careers</li>
        </ul>
        </div>

        <div className='sm:flex items-center justify-between'>
          <p className='text-[#737373] sm:block hidden text-xs p-7'>Copyright © 2026 HAVEN Apparel Inc. All rights reserved.</p>
          <div className='text-[#737373]  flex items-center sm:justify-start justify-between sm:gap-4 p-7'>
          <FaInstagram className='text-xl'/>
          <div className='flex items-center gap-1'>
            <IoMdDownload className='text-xl'/>
            <p className='font-bold text-xs uppercase'>Download the HAVEN app</p>
          </div>
          </div>
        </div>
        <p className='text-[#737373] sm:hidden block text-xs p-7'>Copyright © 2026 HAVEN Apparel Inc. All rights reserved.</p>
        
      </footer>
    </>
  )
}

export default Footer

