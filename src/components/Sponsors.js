import React from "react";

import Sponsor from '../resources/sponsor.png'

const Sponsors = () => {
    return( 
        <div className="grid justify-items-center pb-4 my-20 mb-36">
            <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            LCTIP XXXI
            </div>
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl text-center md:text-left fredoka font-bold text-stone-900 pb-4 mb-10">
            Sponsors
            </h1>
            <img src={Sponsor} className="py-5 w-full rounded-lg" alt="..."></img>
        </div>
    )
}

export default Sponsors;