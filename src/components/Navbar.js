import React from "react";
import Icon from "../assets/logo.png"
import Button from "./Button"

import { NavLink } from "react-router-dom";

const Navbar = () => {

    return( 
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center" onClick={window.scrollTo({top: 0, behavior: "smooth"})}>
                    <img src={Icon} className="h-12 mr-3 transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-300" alt="LCTIP" />
                </NavLink>
                
                <div className="flex order-2">
                    <Button name="Register" link="/registration"/>
                </div>
                <ul className="flex flex-col justify-center p-4 md:p-0 mt-0 font-medium md:flex-row md:space-x-8">
                    <li>
                        <NavLink to="/" className="block py-2 pl-4 pr-4 w-24 text-[#79245B] p-10 bg-white rounded-lg hover:bg-gray-100 [&.active]:font-bold">Home</NavLink>
                    </li>

                    <li>
                        <div className="dropdown dropdown-hover">
                        <NavLink to="/events" tabIndex={0} className="block py-2 pl-4 pr-4 w-24 text-[#79245B] p-10 bg-white rounded-lg hover:bg-gray-100 [&.active]:font-bold">Events</NavLink>
                            <ul tabIndex={0}
                            className="menu dropdown-content py-2 text-[#79245B] text-left text-sm z-10 bg-white rounded-lg shadow w-64 border border-gray-200 border-b-4 border-b-[#79245B]"
                            >
                                <li>
                                    <NavLink to="/events/competition"
                                    className="block px-4 py-2 hover:bg-gray-100 "
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
                        <NavLink to="/faq" className="block py-2 pl-4 pr-4 w-24 text-[#79245B] p-10 bg-white rounded-lg hover:bg-gray-100 [&.active]:font-bold">FAQ's</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;