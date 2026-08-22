import React, { createContext, useEffect, useState } from 'react'
import { getArrival, getFeatures, getHaven, getNews } from '../../service/Api'

export const DATA = createContext([])

function DataContext({children}) {
    const [arrival,setArrival] = useState([])
    const [haven,setHaven] = useState([])
    const [features,setFeatures] = useState([])
    const [news,setNews] = useState([])
    const [search, setSearch] = useState('')
    useEffect(()=>{
        getArrival().then(res=>setArrival(res))
        getHaven().then(res=>setHaven(res))
        getFeatures().then(res=>setFeatures(res))
        getNews().then(res=>setNews(res))
    },[])
  return (
    <>
      <DATA.Provider value={{arrival,haven,features,news,search,setSearch}}>
        {children}
      </DATA.Provider>
    </>
  )
}

export default DataContext
