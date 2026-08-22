import React from 'react'
import subscribe from "../../assets/subscribe.jpg";
function Subscribe() {
  return (
    <>
        <div className='sm:flex items-center mt-10'>
            <img className='sm:w-1/2 w-full h-[1000px] object-cover' src={subscribe} alt="Subscribe" />
            <div className='p-6 mx-auto sm:p-12 max-w-xl'>
                <h3 className="text-3xl font-bold text-black">
                    Join Our Newsletter
                </h3>
                <p className="mt-2 text-sm  text-gray-500">
                Access launches, exclusive offers, and upcoming events.
                </p>
                <form className="mt-8 flex flex-row gap-2">
                    <input type="email" placeholder="Enter your email" className="w-full border-b border-gray-300 text-lg  text-gray-600 placeholder:text-gray-500 focus:outline-none"/>
                    <button type="submit" className="bg-black text-white px-4 py-3 sm:py-4 text-xs font-semibold tracking-wider hover:bg-gray-800 duration-300">
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Subscribe
