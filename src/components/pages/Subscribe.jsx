import React, { useState } from 'react'
import subscribe from "../../assets/subscribe.jpg";
function Subscribe() {
const [subscribed, setSubscribed] = useState(false)
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
                {subscribed ? (
            <div className='mt-8 flex items-center gap-4'>
                <div className='w-10 h-10 border border-black rounded-full flex items-center justify-center'>
                    <span className='text-black text-lg'>✓</span>
                </div>

                <div>
                    <p className='text-black text-lg font-semibold'>
                    Subscribed!
                    </p>

                    <p className='text-gray-500 text-xs mt-1'>
                    Thanks for joining our newsletter.
                    </p>
                </div>
                </div>
          ) :
                <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-row gap-2">
                    <input type="email" placeholder="Enter your email" className="w-full border-b border-gray-300 text-lg  text-gray-600 placeholder:text-gray-500 focus:outline-none"/>
                    <button onClick={() => setSubscribed(true)} type="submit" className="bg-black text-white px-4 py-3 sm:py-4 text-xs font-semibold tracking-wider hover:bg-gray-800 duration-300">
                        SUBSCRIBE
                    </button>
                </form>
                }
            </div>
        </div>
    </>
)
}

export default Subscribe
