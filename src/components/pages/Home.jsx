import React, { useState } from 'react'
import Hero from "../../assets/hero.jpg";
import Hero2 from "../../assets/hero2.jpg";
import Arriwals from "../../assets/arriwals.jpg";
import Slider from './Slider';
import Subscribe from './Subscribe';
import { Link } from 'react-router';
import HeroHaven from './HeroHaven';
import Popular from './Popular';


function Home() {
  return (
    <>
    <main>
        {/* Mobile hero*/}
        <section className="relative sm:hidden block h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
            <div className="absolute bottom-10 left-6 text-white">
                <h3 className="text-3xl font-bold">
                    HAVEN Summer 2026: Indian Arm
                </h3>
                <p className="text-sm mt-2">Available now</p>
                <Link to={"/haven"} className="inline-block mt-5 border px-5 py-3 text-[11px] hover:bg-black hover:text-white duration-300">
                    SHOP NOW
                </Link>
            </div>
        </section>

        {/* Desktop hero*/}
        <section className="relative hidden sm:block h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Hero2})` }}>
            <div className="absolute bottom-10 left-6 p-10 text-white">
                <h3 className="text-4xl font-bold">
                    HAVEN Summer 2026: Indian Arm
                </h3>
                <p className="text-sm mt-2">Available now</p>
                <Link to={"/haven"} className="mt-5 border px-7 py-3 text-[11px] inline-block hover:bg-black hover:text-white duration-300">
                    SHOP NOW
                </Link>
            </div>
        </section>

        {/* HeroHaven Section */}
        <HeroHaven/>

        {/* Slider section */}
        <Slider/>
        {/* New Arrivals */}
        <section className="relative  h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Arriwals})` }}>
            <div className="absolute bottom-10 left-6 sm:p-10 text-white">
                <h3 className="text-3xl sm:text-4xl font-bold">
                    New Arrivals 
                </h3>
                <p className="text-sm mt-2">The latest arrivals from BATONER, SATISFY, Reproduction of Found</p>
                <Link to="/arrivals" className="mt-5 inline-block border px-5 py-3 text-[11px] hover:bg-black hover:text-white duration-300">
                    EXPLORE NOW
                </Link>
            </div>
        </section>
        {/* Popular */}
        <Popular/>
        {/* Subscribe */}
        <Subscribe/>
    </main>
    
    </>
  )
}

export default Home
