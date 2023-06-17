import React from 'react'
import Icon from "../assets/logo.png"

import { NavLink } from 'react-router-dom'
import Button from './Button'

const TryOutNavbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center" onClick={window.scrollTo({top: 0, behavior: "smooth"})}>
                    <img src={Icon} className="h-12 mr-3 transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-300" alt="LCTIP" />
                </NavLink>
                
                <div className="flex order-2">
                    <Button name="Logout" link="/login"/>
                </div>
            </div>
        </nav>
  )
}

export default TryOutNavbar