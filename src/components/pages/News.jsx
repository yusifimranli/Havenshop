  import React, { useContext } from 'react'
  import { DATA } from '../Context/DataContext'
  import { Link } from 'react-router'

  function News() {
    const { news } = useContext(DATA)

    return (
      <>
      <h1 className='font-bold text-black text-3xl px-3 sm:px-10 mt-10'>News</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 sm:px-10 px-4 my-10 '>
        {news.map((item) => (
          <div key={item.id} className='min-h-[160px]'>
            <Link to={`/news/${item.id}`} className="block w-full">
            <img src={item.image} alt=""  className='w-full aspect-[3/4] object-cover'/>
            </Link >
            <p className='text-[#737373] py-2'>{item.date}</p>
            <p className='text-black font-bold text-[15px]'>{item.title}</p>
          </div>
        ))}
      </div>
      </>
    )
  }

  export default News