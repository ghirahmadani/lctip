import React from 'react'
import TryOutNavbar from '../components/TryOutNavbar'
import { Outlet } from 'react-router-dom'

const TestLayout = () => {
  return (
    <>
        <TryOutNavbar/>

        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default TestLayout