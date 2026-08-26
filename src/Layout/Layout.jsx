import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router'
import Loading from '../components/pages/Loading'

function Layout() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <Header />

      {loading ? <Loading /> : <Outlet />}

      <Footer />
    </>
  )
}

export default Layout