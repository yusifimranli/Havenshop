import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../Slider2.css';

import { Pagination } from 'swiper/modules';
import { DATA } from '../Context/DataContext';
import { BASKET } from '../Context/BasketContext';

function HeroHaven() {
    const {haven}= useContext(DATA)
    const {addBasket} = useContext(BASKET)
    const [selectedsize,setSelectedsize] = useState({})

  return (
     <>
     <div className='flex items-center justify-between pt-8'>
        <h1 className='text-black font-bold text-xl px-6'>HAVEN</h1>
        <Link to = {"/haven"} className='text-black font-bold text-md px-6'>View all →</Link>
     </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
            768: {
            slidesPerView: 4,
            },
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-15"
        >
        
        {
        haven.slice(0,7).map((item)=>{
          const selectedSize = selectedsize[item.id] || item.sizes[0]
          const price =
              selectedSize === "02/M"
              ? item.price + 20
              : selectedSize === "03/L"
              ? item.price + 30
              : selectedSize === "04/XL"
              ? item.price + 40
              : item.price
          return(
        <SwiperSlide key={item.id} >
        <div className='px-3 sm:px-6'>
          <div className='group'>
            <div className="relative shadow-sm max-w-sm mt-6 overflow-hidden ">
              <div className="relative w-full aspect-[3/4]">
                  <img src={item.image} className="absolute w-full h-full duration-500 group-hover:opacity-0" alt={item.title} />
                  <img src={item.hoverImage} className="absolute inset-0 w-full duration-500 opacity-0 group-hover:opacity-100" alt={item.title} />
              </div>


            <div className='relative min-h-[130px]'>
              <div className="p-4 sm:p-5 duration-500 group-hover:opacity-0">
                  <h3 className="text-slate-900 text-base font-semibold">HAVEN</h3>
                  <p className="mt-2 text-xs text-slate-900 leading-relaxed">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-900 font-bold  leading-relaxed">${item.price}</p>
              </div>

              <div className='absolute bottom-10 inset-0 duration-500 opacity-0 group-hover:opacity-100 flex items-center justify-between gap-3 sm:p-2'>
                  <select value={selectedsize[item.id] || item.sizes[0]}
                   onChange={(e)=>setSelectedsize({
                    ...selectedsize,
                    [item.id]:e.target.value
                   })} 
                   className='p-1 px-3 text-slate-900 border w-full rounded-md'>
                      {item.sizes.map((size, index) => (
                      <option className='text-slate-900' key={index} value={size}>
                        {size}
                      </option>
                    ))}
                   
                  </select>
                  <button onClick={()=>addBasket({...item,price:price},1,selectedsize[item.id] || item.sizes[0])}
                   className='w-full bg-black p-2 px-5 text-xs'>ADD TO CART</button>
              </div>
              </div>
            </div>
          </div>
          </div>
          </SwiperSlide>
          
          )
        })
       }
        
            
        
      </Swiper>
    </>
  )
}

export default HeroHaven
