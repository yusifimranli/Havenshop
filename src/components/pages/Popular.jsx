import React, { useContext, useState } from 'react'
import { DATA } from '../Context/DataContext'
import { BASKET } from '../Context/BasketContext'


function Popular() {
  const {haven}= useContext(DATA)
  const {addBasket} = useContext(BASKET)
  const popular = haven.filter((item) => item.price > 900)
                        .sort((a, b) => b.price - a.price)
                        .slice(0, 4)
  const [selectedsize,setSelectedsize] = useState({})
  return (
    <>
    <h1 className='text-black font-bold text-3xl px-4 sm:px-10 pt-8'>Popular 4 Product</h1>
    <p className='text-[#737373] px-4 sm:px-10 sm:w-160 py-2 text-md'>Every week, the 4 most expensive products are selected.</p>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 sm:px-10 px-4 mb-10'>
      
      {
        popular.map((item)=>{
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
          <div className='group' key={item.id}>
            <div className="relative shadow-sm max-w-sm mt-6 overflow-hidden ">
              <div className="relative w-full aspect-[3/4]">
                  <img src={item.image} className="absolute w-full h-full duration-500 group-hover:opacity-0" alt={item.title} />
                  <img src={item.hoverImage} className="absolute inset-0 w-full duration-500 opacity-0 group-hover:opacity-100" alt={item.title} />
              </div>

            <div className='relative min-h-[160px]'>
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
                   className='p-2 px-5 text-slate-900 border w-full rounded-md'>
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
          )
        })
       }
    </div>
    </>
  )
}
export default Popular
