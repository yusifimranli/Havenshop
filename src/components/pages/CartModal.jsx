import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router';
import CartBasket from './CartBasket';

function CartModal({basket,opencart,setOpencart}) {
  const total = basket.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
)
  return (
    <>
    <div className={`fixed right-0 top-0 p-4 sm:p-8 w-[300px] sm:w-[700px] h-screen z-[999]
    bg-white shadow-xl border
     transition-transform duration-300
     flex flex-col
    ${opencart ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className='flex justify-between items-center'>
        <h1 className='text-black font-bold text-sm'>YOUR CART</h1>
        <FaXmark onClick={() => setOpencart(false)} className='text-slate-900 text-xl '/>
    </div>
        {basket.length > 0 ?(
          <>
           <div className='flex-1 overflow-y-auto'>
            <CartBasket />
          </div>
          <div className='border-t border-slate-200 pt-5 mt-5'>
            <div className='flex items-center justify-between'>
              <p className='text-black font-bold text-lg'>
                Total
              </p>

              <p className='text-black font-bold text-lg'>
                ${total}
              </p>
            </div>
          </div>
          </>
        ) : (
        <div className='flex flex-col h-full gap-2 items-center justify-center'>
            <p className='text-slate-900 font-bold text-lg'>Your cart is empty</p>
            <Link className='text-[#737373] text-xs' to = {'/arrivals'}>Shop new arrival</Link>
        </div>
        )}
    </div>
    
    
    </>
  )
}

export default CartModal
