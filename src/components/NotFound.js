import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return( 
        <div className="lg:container w-full mx-auto">
            <div className="container w-9/12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-36 justify-items-center lg:justify-items-start mt-24">
                    <div className="order-1">
                        <div className="grid justify-items-center lg:justify-items-start pb-4">
                            <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Error
                            </div>
                        </div>
                        <h1 className="text-xl lg:text-5xl text-center lg:text-left fredoka font-bold text-stone-900 pb-4">
                        Page Under Maintenance
                        </h1>
                        <p className="text-[0.6rem] sm:text-sm md:text-base text-center lg:text-left leading-5 lg:leading-7 text-stone-800">
                        Saat ini website LCTIP sedang dalam perbaikan. We'll be back soon!
                        </p>
                        <Link to='/' className="grid justify-items-center lg:justify-items-start">
                            <div className="mt-6 lg:mt-8">
                            <Button name="Back"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;