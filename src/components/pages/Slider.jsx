import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from "../../assets/slider1.jpg"
import Slider2 from "../../assets/slider2.jpg"
import Slider3 from "../../assets/slider3.jpg"
import Slider4 from "../../assets/slider4.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../../Slider.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slider1})` }}>
                <div className="absolute bottom-10 left-6 p-10 text-white">
                <h3 className="text-3xl font-bold">
                    HAVEN Spring/Summer 2026 Lookbook
                </h3>
                <p className="text-sm mt-2">Modular wardrobe for warmer months</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slider2})` }}>
                <div className="absolute bottom-10 left-6 p-10 text-white">
                <h3 className="text-3xl font-bold">
                    HAVEN Editorial for Levi’s® Vintage Clothing
                </h3>
                <p className="text-sm mt-2">Ideas Shaped Through Time with Jamie Wolfond</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slider3})` }}>
                <div className="absolute bottom-10 left-6 p-10 text-white">
                <h3 className="text-3xl font-bold">
                    Jeremy Koreski: ANOMALOUS
                </h3>
                <p className="text-sm mt-2">Capturing the scale and intimacy of the natural world</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Slider4})` }}>
                <div className="absolute bottom-10 left-6 p-10 text-white">
                <h3 className="text-3xl font-bold">
                    Summer 2026 Editorial by HAVEN
                </h3>
                <p className="text-sm mt-2">Long days under open skies</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
