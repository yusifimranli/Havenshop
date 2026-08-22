import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../Layout/Layout'
import Arrivals from '../components/pages/Arrivals'
import Haven from '../components/pages/Haven'
import Features from '../components/pages/Features'
import News from '../components/pages/News'
import Home from '../components/pages/Home'
import DetailArrival from '../components/pages/DetailArrival'
import DetailHaven from '../components/pages/DetailHaven'
import DetailFeatures from '../components/pages/DetailFeatures'
import DetailNews from '../components/pages/DetailNews'

function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element = {<Home/>}/>
            <Route path='/arrivals' element={<Arrivals />} />
            <Route path="/haven" element={<Haven />} />
            <Route path="/features" element={<Features />} />
            <Route path="/news" element={<News />} />
            <Route path="/arrivals/:id" element={<DetailArrival />} />
            <Route path="/haven/:id" element={<DetailHaven />} />
            <Route path="/features/:id" element={<DetailFeatures />} />
            <Route path="/news/:id" element={<DetailNews/>} />
        </Route>
    </Routes>
      
    </>
  )
}

export default Router
