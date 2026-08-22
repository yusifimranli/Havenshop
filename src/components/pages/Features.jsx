    import React, { useContext, useState } from 'react'
    import { DATA } from '../Context/DataContext'
    import { Link } from 'react-router'


    function Features() {
      const {features}= useContext(DATA)
      const categories = [
      "ALL",
      "EDITORIAL",
      "FOCUS",
      "DIALOGUE",
      "LOOKBOOK",
      "JOURNAL",
      "PROCESS"
    ]
      const [selectedcategory,setSelectedcategory] = useState("ALL")
      const filteredFeatures =
      selectedcategory === "ALL"
        ? features
        : features.filter(item => item.category === selectedcategory)
        return (
        <>
        <div className=' bg-black'>
          <ul className="flex flex-wrap sm:px-0 px-4 justify-center text-[12px] font-bold pt-10 gap-6">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedcategory(category)}
                className={`cursor-pointer ${
                  selectedcategory === category
                    ? "text-white"
                    : "text-[#737373]"
                }`}
              >
                {category}
              </li>
            ))}
        </ul>
        </div>
      
        <div className='grid grid-cols-1 pt-7 sm:grid-cols-3 gap-4 sm:gap-6 sm:px-24 px-4 bg-black'>
          {
            filteredFeatures.map((item)=>{
              return(
              <div key={item.id}>
                <div className="shadow-sm max-w-sm mt-6 overflow-hidden">
                  <Link to={`/features/${item.id}`} className="block w-full">
                  <div className="w-full aspect-[3/4]">
                      <img src={item.image} className="w-full h-full" alt={item.title} />
                  </div>
                  </Link>

                <div>
                  <div className="p-4 sm:py-5 sm:p-0">
                      <h3 className="text-[#737373] text-sm font-semibold">{item.category}</h3>
                      <p className="mt-2 text-lg font-bold text-white leading-relaxed">{item.title}</p>
                      <p className="mt-2 text-xs text-[#737373] font-bold  leading-relaxed">{item.about}</p>
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
    export default Features
