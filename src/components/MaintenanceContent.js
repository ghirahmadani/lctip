import React from "react";

const MaintenanceContent = () => {
    return( 
        <div className="container w-full mx-auto">
            <div className="container w-9/12 mx-auto">
                <div className="grid grid-cols-2 py-36 mt-24">
                    <div className="order-1">
                        <div className="grid justify-items-start pb-4">
                            <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Error
                            </div>
                        </div>
                        <h1 className="text-5xl text-left fredoka font-bold text-stone-900 pb-4">
                        Page Under Maintenance
                        </h1>
                        <p className="text-md text-justify leading-7 text-stone-800">
                        Saat ini website LCTIP sedang dalam perbaikan. We'll be back!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaintenanceContent;