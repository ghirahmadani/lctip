import React from "react";
import Organizer from "../resources/organizer.png"
import Sponsors from "./Sponsors";
import PrizeCard from "./PrizeCard";
import CarouselContent from "./CarouselContent";

import Pics from "../resources/1.JPG";
import Pics2 from "../resources/2.JPG";
import Pics3 from "../resources/3.JPG";

import { Link } from "react-router-dom";

const Content = () => {
    return( 
        <div className="lg:container w-full mx-auto">
            <div className="container w-10/12 md:w-9/12 mx-auto">
                {/* About */}
                <div className="grid grid-row md:grid md:grid-row lg:grid lg:grid-cols-2 py-36 gap-6 md:gap-8 lg:gap-6">
                    <div className="order-1 justify-items-center lg:justify-items-start">
                        <div className="grid justify-items-center lg:justify-items-start pb-4">
                            <div className="relative rounded-full px-3 py-1 w-24 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            ABOUT
                            </div>
                        </div>
                        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center lg:text-left fredoka font-bold text-stone-900 pb-0 md:pb-4">
                        Lomba Cepat Tepat<br></br>Ilmu Pangan XXXI
                        </h1>
                        <p className="text-[0.65rem] md:text-base text-justify lg:text-left leading-5 md:leading-7 text-stone-800 px-2 lg:px-0">
                        <br></br>The biggest annual food science and technology competition for high school students all over Indonesia held by Himpunan Mahasiswa Ilmu dan Teknologi Pangan IPB with 
                        <span className="font-bold"> remarkable series of events</span>. <br></br><br></br>This year, we're returning with an <span className="font-bold">intriguing new topic</span> that will gave you more fun and excitement through offline experience!
                        </p>
                    </div>

                    <div className="order-2 grid justify-items-center content-center w-full">
                        <CarouselContent nameOne={Pics} nameTwo={Pics2} nameThree={Pics3}/>
                    </div>
                </div>

                {/* Category */}
                <div className="grid justify-items-center md:justify-items-center lg:justify-items-start mb-4">
                    <div className="pb-4">
                        <div className="relative rounded-full px-3 py-1 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        CATEGORY
                        </div>
                    </div>
                    <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center md:text-left fredoka font-bold text-stone-900">
                    Events
                    </h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-rows-2 py-4 gap-6">
                    <div className="order-1 justify-items-center">
                        <div className="grid container w-full h-96 p-8 gap-4 rounded-xl border border-gray-200 hover:shadow-md content-between justify-items-center">
                            <div className="grid content-start justify-items-center gap-4">
                                <div className="grid w-12 h-12">
                                    <svg className="text-stone-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl md:text-3xl text-center fredoka font-bold text-stone-900">Competition</h1>
                                <p className="text-[0.6rem] md:text-sm text-justify leading-5 md:leading-8 h-32 text-stone-800">
                                Kompetisi LCTIP XXXI merupakan lomba cepat tepat terkait ilmu pangan yang terdiri atas beberapa babak ditujukan spesial bagi siswa dan siswi SMA/sederajat yang memiliki ketertarikan dalam bidang pangan. 
                                </p>
                            </div>
                            <div className="grid w-full">
                                <Link to="/events/competition" className="grid content-center bg-white border-2 border-gray-100 w-full h-12 p-3 rounded-lg text-[#79245B] transition ease-in-out hover:bg-[#79245B] hover:text-white duration-300">See More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="order-2 justify-items-center">
                        <div className="grid container w-full h-96 p-8 gap-4 rounded-xl border border-gray-200 hover:shadow-md content-between justify-items-center">
                            <div className="grid content-start justify-items-center gap-4">
                                <div className="grid w-12 h-12">
                                    <svg className="text-stone-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl md:text-3xl text-center fredoka font-bold text-stone-900">National Seminar</h1>
                                <p className="text-[0.6rem] md:text-sm text-justify leading-5 md:leading-8 h-32 text-stone-800">
                                Seminar utama LCTIP XXXI mengangkat tema Exploring a Million Advantages from Dried Fruits as The Sustainable Future Food.
                                </p>
                            </div>
                            <div className="grid w-full">
                                <Link to="/events/seminar" className="grid content-center bg-white border-2 border-gray-100 w-full h-12 p-3 rounded-lg text-[#79245B] transition ease-in-out hover:bg-[#79245B] hover:text-white duration-300">See More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="order-3 grid lg:col-span-2 justify-items-center">
                        <div className="grid container w-full h-[30rem] md:h-[32rem] lg:h-96 p-8 gap-4 rounded-xl border border-gray-200 hover:shadow-md content-between justify-items-center">
                            <div className="grid content-start justify-items-center gap-4">
                                <div className="grid w-12 h-12">
                                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl md:text-3xl text-center fredoka font-bold text-stone-900">Crossword Challenge</h1>
                                <p className="text-[0.6rem] md:text-sm text-justify leading-5 md:leading-8 h-56 md:h-64 lg:h-32 text-clip text-stone-800">
                                Crossword Challenge atau yang lebih dikenal sebagai teka-teki silang adalah salah satu permainan seru yang diadakan selama kegiatan Edu-Camp Tour. Permainan ini akan dilakukan berkelompok sesuai dengan tim yang berlomba. Setiap tim akan diberikan selembar kertas yang digunakan untuk mengisi jawaban teka-teki silang. Namun, untuk mendapatkan pertanyaan atau petunjuk dari teka-teki silang, setiap tim harus memecahkan riddle yang diberikan oleh panitia terlebih dahulu.
                                </p>
                            </div>
                            <div className="grid w-full">
                                <Link to="/events/challenge" className="grid content-center bg-white border-2 border-gray-100 w-full  h-12 p-3 rounded-lg text-[#79245B] transition ease-in-out hover:bg-[#79245B] hover:text-white duration-300">See More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-[#79245B] py-20 my-20 md:my-28">
                <div className="container w-9/12 mx-auto">
                    <div className="grid justify-items-center mb-4">
                        <div className="pb-4">
                            <div className="relative rounded-full px-3 py-1 w-24 text-sm leading-6 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                            EVENTS
                            </div>
                        </div>
                        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center lg:text-left fredoka font-bold text-white">
                        Timeline
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex mr-3 md:mr-4">
                                <p className="text-[0.6rem] md:text-base text-left text-white">Registrasi I</p>
                            </div>
                            <div className="flex flex-auto mx-auto">
                                <p className="border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-2 md:ml-4">
                                <p className="text-[0.6rem] md:text-base text-right text-white">1 - 31 Agustus 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex mr-5">
                                <p className="text-[0.6rem] md:text-base text-left text-white">Try Out</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-2 md:ml-4">
                                <p className="text-[0.6rem] md:text-base text-right text-white">16 September 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex mr-0 md:mr-4 w-6/12 md:w-auto">
                                <p className="text-[0.6rem] md:text-base text-left text-white">Day 1 (Qualification Stage, Edu & Campus Tour)</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-2 md:ml-4">
                                <p className="text-[0.6rem] md:text-base text-right text-white">27 Oktober 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex mr-4">
                                <p className="text-[0.6rem] md:text-base text-left text-white">Registrasi II</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-2 md:ml-4">
                                <p className="text-[0.6rem] md:text-base text-right text-white">27 Oktober 2023 ( 18.00 - 23.59 )</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex mr-1 md:mr-4 w-6/12 md:w-auto">
                                <p className="text-[0.6rem] md:text-base text-left text-white">Day 2 (Quarter Final Stage, Seminar Nasional)</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-2 md:ml-4">
                                <p className="text-[0.6rem] md:text-base text-right text-white">28 Oktober 2023</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex mr-1 md:mr-4 w-6/12 md:w-auto">
                                <p className="text-[0.6rem] md:text-base text-left text-white">Day 3 (Semi Final Stage, Mix and Make, and Final Stage)</p>
                            </div>
                            <div className="flex flex-auto">
                                <p className="border-b border-dotted w-full"></p>
                            </div>
                            <div className="ml-2 md:ml-4">
                                <p className="text-[0.6rem] md:text-base text-right text-white">29 Oktober 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container w-10/12 md:w-9/12  mx-auto">
                {/* Prizes */}
                <div className="grid justify-items-center pb-4 my-20">
                    <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    LCTIP XXXI
                    </div>
                    <h1 className="text-[2rem] sm:text-4xl md:text-5xl text-center md:text-left fredoka font-bold text-stone-900 pb-4 mb-10">
                    Prizes Competition
                    </h1>

                    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 py-4 gap-6">
                        <PrizeCard title="Juara 1" money="Rp 6.000.000" prize="+ Piala + Golden Ticket ITP IPB + Piala bergilir + Sertifikat"/>
                        <PrizeCard title="Juara 2" money="Rp 4.000.000" prize="+ Piala + Sertifikat"/>
                        <PrizeCard title="Juara 3" money="Rp 2.000.000" prize="+ Piala + Sertifikat"/>
                        <PrizeCard title="Juara Harapan" money="Rp 600.000" prize="+ Sertifikat"/>         
                    </div>
                </div>

                {/* Organizer */}
                <div className="grid grid-row lg:grid-cols-2 py-36 gap-6 md:gap-6">
                    <div className="order-1 justify-items-center md:justify-items-start">
                        <div className="grid pb-4 justify-items-center lg:justify-items-start">
                            <div className="relative rounded-full px-3 py-1 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            ORGANIZER
                            </div>
                        </div>
                        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center lg:text-left fredoka font-bold text-stone-900 pb-0 md:pb-4">
                        Lomba Cepat Tepat<br></br>Ilmu Pangan XXXI
                        </h1>
                        <p className="text-[0.6rem] md:text-base text-justify lg:text-left leading-5 md:leading-8 text-stone-800">
                        <br></br>Acara ini diselenggarakan oleh <span className="font-bold">Himpunan Mahasiswa Ilmu dan Teknologi Pangan (HIMITEPA)</span> dari Departemen Ilmu dan Teknologi Pangan IPB University.
                        <br></br><br></br>Sebagai pionir dalam memecahkan masalah terkait pangan yang terbagi ke dalam empat divisi, yaitu <span className="font-bold">Kimia Pangan, Mikrobiologi Pangan, Biokimia Pangan, dan Rekayasa Proses Pangan</span>.
                        </p>
                    </div>

                    <div className="order-2 grid justify-items-center lg:justify-items-center content-center">
                        <img src={Organizer} className=" overflow-hidden rounded-lg w-9/12" alt="..."></img>
                    </div>
                </div>
            </div>
            
            <Sponsors/>
        </div>
        
    )
}

export default Content;