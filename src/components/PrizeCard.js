import React from "react";

const PrizeCard = (props) => {
    return( 
        <div className="justify-items-center">
            <div className="grid container w-full h-72 p-8 gap-4 rounded-xl border border-gray-200 border-b-8 border-b-[#BE949E] hover:shadow-md content-between justify-items-center transition ease-in-out delay-100 hover:border-b-[#79245B]">
                <div className="grid content-start justify-items-center w-full gap-4">
                    <div className="grid w-12 h-12">
                        <svg className="text-stone-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                    </div>
                    <h1 className="text-l md:text-xl text-center fredoka font-semibold text-stone-900">{props.title}</h1>
                    <div className="grid bg-white border-2 border-gray-100 w-10/12 md:w-full h-12 p-3 rounded-full text-stone-900 transition ease-in-out delay-100 hover:shadow-md duration-300 justify-items-center content-center">
                        <p className="text-xl md:text-xl lg:text-[1rem] xl:text-xl font-bold fredoka">{props.money}</p>
                    </div>
                    <p className="text-xs text-center leading-5 h-32 text-stone-800">
                        {props.prize}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrizeCard;