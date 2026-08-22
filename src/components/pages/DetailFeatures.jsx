import React, { useContext } from 'react'
import { DATA } from '../Context/DataContext'
import { useParams } from 'react-router'

function DetailFeatures() {
    const {features} = useContext(DATA)
    const {id}  = useParams()
    const item = features.find((product) => product.id.toString() === id)
    if (!item) {
        return (
            <p className="p-10 text-center text-white bg-black">
                Feature not found
            </p>
        )
    }
  return (
      <div className="w-full relative aspect-[3/4]">
            <img src={item.image} className="w-full h-full" alt={item.title} />
            <div className='absolute bottom-20 left-1/2 w-full text-center -translate-x-1/2'>
                <h3 className="text-white text-sm font-semibold">{item.category}</h3>
                <p className="text-6xl font-bold text-white leading-relaxed">{item.title}</p>
            </div>  
        </div>
  )
}

export default DetailFeatures
