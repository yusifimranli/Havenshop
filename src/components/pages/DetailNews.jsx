import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { DATA } from '../Context/DataContext'

function DetailNews() {
  const { news } = useContext(DATA)
  const { id } = useParams()
  const item = news.find((item) => item.id === Number(id))
  if (!item) {
    return <div className="p-10">News not found</div>
  }
  return (
    <div className="px-4 sm:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <p className="text-[#737373] mb-4">{item.date}</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-black mb-6">{item.title}</h1>
          <p className="text-[#555] leading-7 text-base sm:text-sm">{item.news}</p>
        </div>
        <div>
          <img src={item.image} alt={item.title} className="w-full h-[550px]  object-cover object-top"/>
        </div>
      </div>
    </div>
  )
}

export default DetailNews