import React from "react";
import Sponsors from "./Sponsors";
import CarouselContent from "./CarouselContent";

import Pics from "../resources/1.JPG";
import Pics2 from "../resources/2.JPG";
import Pics3 from "../resources/3.JPG";

const CrosswordContent = () => {
    return( 
        <div className="lg:container w-full mx-auto">
            <div className="container w-9/12 mx-auto">
            <div className="grid grid-row md:grid md:grid-row lg:grid lg:grid-cols-2 py-36 gap-6 md:gap-8 lg:gap-6">
                    <div className="order-1 justify-items-center lg:justify-items-start">
                        <div className="grid justify-items-center lg:justify-items-start pb-4">
                            <div className="relative rounded-full px-3 py-1 w-24 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            LCTIP XXXI
                            </div>
                        </div>
                        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center lg:text-left fredoka font-bold text-stone-900 pb-0 md:pb-4">
                        Crossword Challenge
                        </h1>
                        <p className="text-[0.65rem] md:text-base text-justify lg:text-left leading-5 md:leading-8 text-stone-800 px-2 lg:px-0">
                        <br></br>Crossword Challenge atau lebih dikenal sebagai teka-teki silang adalah salah satu permainan seru yang diadakan selama kegiatan Edu - Camp Tour.
                        <br></br><br></br>Permainan ini akan dilakukan berkelompok sesuai dengan tim yang berlomba. Setiap tim akan diberikan selembar kertas yang digunakan untuk mengisi jawaban teka-teki silang. Namun, untuk mendapatkan pertanyaan atau petunjuk dari teka-teki silang, setiap tim harus memecahkan riddle yang diberikan oleh panitia terlebih dahulu. Dengan demikian, semua peserta akan terlibat dalam tantangan yang menyenangkan dan menarik ini!
                        </p>
                    </div>

                    <div className="order-2 grid justify-items-center content-center w-full">
                        <CarouselContent nameOne={Pics} nameTwo={Pics2} nameThree={Pics3}/>
                    </div>
            </div>

                <Sponsors/>
            </div>
        </div>
    )
}

export default CrosswordContent;