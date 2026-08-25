import React  from 'react'
import { FaRegTrashCan } from "react-icons/fa6"
import { BASKET } from '../Context/BasketContext'
import { useContext } from 'react'

function CartBasket({setOpencart}) {
  const { basket,removeBasket ,decrease,increase,selectedsize} = useContext(BASKET)

  return (
    <div className="flex flex-col gap-5 py-5">
      {basket.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-4 border-b border-slate-200 pb-5"
          >
            <img
              className="w-20 h-24 object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    {item.brand}
                  </p>
                  <p className="text-slate-900 text-sm">
                    {item.title}
                  </p>
                </div>
                <p className="text-slate-900 font-bold text-sm">
                  ${item.price * item.quantity}
                </p>
              </div>
              <p className="text-[#737373] text-xs mt-1">
                Size: {item.selectedsize}
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center border border-slate-200">
                  <button 
                    onClick={() => decrease(item.id)}
                    className="px-2 py-1 text-black"
                  >
                    -
                  </button>
                  <span className="px-2 text-black">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increase(item.id)}
                    className="px-2 py-1 text-black"
                  >
                    +
                  </button>
                </div>
                <FaRegTrashCan onClick={()=>{removeBasket(item.id)
                  if(basket.length === 1){
                    setOpencart(false)
                  }}
                } className="text-[#737373] cursor-pointer" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CartBasket