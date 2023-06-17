import React from "react";
import Sponsors from "./Sponsors";
import CarouselContent from "./CarouselContent";

import Pics from "../resources/1.JPG";
import Pics2 from "../resources/2.JPG";
import Pics3 from "../resources/3.JPG";

const SeminarContent = () => {
    return(
        <div className="container w-full mx-auto">
            <div className="container w-9/12 mx-auto">
                <div className="grid grid-cols-2 py-24 gap-6">
                    <div className="order-1">
                        <div className="grid justify-items-start pb-4">
                            <div className="relative rounded-full px-3 py-1 w-24 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            LCTIP XXXI
                            </div>
                        </div>
                        <h1 className="text-5xl text-left fredoka font-bold text-stone-900 pb-4">
                        National Seminar
                        </h1>
                        <p className="text-md text-justify leading-7 text-stone-800">
                        <br></br>Seminar utama LCTIP XXXI mengusung tema <span className="font-bold">Exploring a Million Advantages from Dried Fruits as The Sustainable Future Food</span> dengan dua subtema yaitu “Unveiling The Secret of Dried Fruits and Its Myriad of Benefits” dan “The Limitless Creation Based on Dried Fruits For Healthy Lifestyle” 
                        <br></br><br></br>Seminar nasional ini diharapkan dapat memberikan wawasan dan pengetahuan bagi para
                        akademisi dan masyarakat umum tentang Dried Fruits dan produk olahannya serta beragam manfaat mengonsumsinya. Melalui seminar nasional ini, kami harap Dried Fruits dapat dikenal dan dikonsumsi lebih banyak kalangan dengan segudang manfaat serta keunggulannya.
                        </p>
                    </div>

                    <div className="order-2 grid justify-items-center content-center">
                        <CarouselContent nameOne={Pics} nameTwo={Pics2} nameThree={Pics3}/>
                    </div>
                </div>

            </div>

            <div className="bg-[#79245B] py-20 my-20">
                <div className="container w-9/12 mx-auto">
                    <div className="grid justify-items-center mb-4">
                        <div className="pb-4">
                            <div className="relative rounded-full px-3 py-1 w-24 text-sm leading-6 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                            EVENTS
                            </div>
                        </div>
                        <h1 className="text-5xl text-left fredoka font-bold text-white">
                        Timeline
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center justify-between gap">
                            <div className="flex mr-4">
                                <p className="text-md text-left text-white">Registrasi I</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="text-md border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-4">
                                <p className="text-md text-right text-white">15 September - 15 Oktober 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap">
                            <div className="flex mr-4">
                                <p className="text-md text-left text-white">Main Events</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="text-md border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-4">
                                <p className="text-md text-right text-white">28 Oktober 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w-9/12 mx-auto">
                <Sponsors/>
            </div>
        </div>
    )
}

export default SeminarContent;