import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RootLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
        <Navbar/>

        <main>
            <Outlet/>
        </main>

        <Footer/>
    </>
  )
}

export default RootLayout