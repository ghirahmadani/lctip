import React, { useState } from "react";
import Icon from "../assets/logo.png"
import Button from "./Button"

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const[open,setOpen]=useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return( 
        <nav className="bg-white fixed z-20 top-0 left-0 w-full border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex order-1 items-center" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                    <img src={Icon} className="h-12 mr-3 transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-300" alt="LCTIP" />
                </NavLink>
                
                <div className="hidden md:flex order-3 items-center">
                    <Button name="Register" link="/registration"/>
                </div>

                <div className="order-4 block md:hidden" onClick={handleOpen}>
                    {
                    !open ?
                    <svg fill="none" className="w-10 h-10 text-stone-900" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> : 
                    <svg fill="none" className="w-10 h-10 text-stone-900" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    }
                </div>
                <div className={open ? "fixed top-0 left-0 w-[60%] h-full bg-gray-100 z-10 items-start ease-in-out duration-500": "fixed top-0 w-[60%] h-full bg-gray-100 z-10 items-start ease-in-out duration-500 left-[-100%]"}>
                    <ul className="flex flex-col items-start space-y-4 py-10 text-[#79245B]">
                        
                        <li className="w-11/12 mx-auto py-2 px-4 text-left rounded-md hover:bg-gray-200">
                        <NavLink to='/' className="w-full">
                            Home               
                        </NavLink>
                        </li>
                        
                        <li className="w-11/12 mx-auto py-2 px-4 text-left rounded-md hover:bg-gray-200">
                        <NavLink to='/events' className="w-full">
                            Events
                        </NavLink>
                        </li>
                        <li className="w-11/12 mx-auto py-2 px-4 text-left rounded-md hover:bg-gray-200">
                        <NavLink to='/faq' className="w-full">
                            FAQ's
                        </NavLink>
                        </li>
                        <li className="w-11/12 mx-auto py-2 px-4 text-left rounded-md hover:bg-gray-200">
                        <NavLink to='/registration' className="w-full">
                            Register
                        </NavLink>
                        </li>
                    </ul>
                </div>
                

                <ul className="hidden md:flex order-2 justify-center mt-0 p-4 font-medium flex-row space-x-8">
                    <li>
                        <NavLink to="/" className="block py-2 pl-4 pr-4 w-24 text-[#79245B] p-10 bg-white rounded-lg hover:bg-gray-100 [&.active]:bg-gray-100">Home</NavLink>
                    </li>
                    <li>
                        <div className="dropdown dropdown-hover">
                        <NavLink to="/events" tabIndex={0} className="block py-2 pl-4 pr-4 w-24 text-[#79245B] p-10 bg-white rounded-lg hover:bg-gray-100 [&.active]:bg-gray-100">Events</NavLink>
                            <ul tabIndex={0}
                            className="menu dropdown-content py-2 text-[#79245B] text-left text-sm z-10 bg-white rounded-lg shadow w-64 border border-gray-200 border-b-4 border-b-[#79245B]"
                            >
                                <li>
                                    <NavLink to="/events/competition"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                    Competition
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/events/seminar"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                    National Seminar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/events/challenge"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                    Crossword Challenge
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/faq" className="block py-2 pl-4 pr-4 w-24 text-[#79245B] p-10 bg-white rounded-lg hover:bg-gray-100 [&.active]:bg-gray-100">FAQ's</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;