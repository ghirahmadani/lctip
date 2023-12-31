import React from "react";
import PrizeCard from "./PrizeCard";
import QR from "../resources/qr.png"
import Sponsors from "./Sponsors";
import CarouselContent from "./CarouselContent";

import Pics from "../resources/1.JPG"
import Pics2 from "../resources/2.JPG"
import Pics3 from "../resources/3.JPG"

const CompetitionContent = () => {
    return( 
        <div className="lg:container w-full mx-auto">
            <div className="container w-9/12 mx-auto">
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
                        <p className="text-[0.65rem] md:text-base text-justify lg:text-left leading-5 md:leading-8 text-stone-800 px-2 lg:px-0">
                        <br></br>Kompetisi LCTIP XXXI merupakan lomba cepat tepat terkait ilmu pangan yang terdiri atas beberapa babak ditujukan spesial bagi siswa dan siswi SMA/Sederajat yang memiliki ketertarikan dalam bidang pangan.<br></br><br></br>
                        Beberapa mata pelajaran yang diujikan dalam lomba ini adalah Matematika, Fisika, Kimia, Biologi, dan Ilmu Pangan. Tujuan diadakannya lomba ini adalah meningkatkan pengetahuan, wawasan, dan kepedulian siswa SMA terhadap permasalahan pangan di Indonesia.
                        </p>
                    </div>

                    <div className="order-2 grid justify-items-center content-center w-full">
                        <CarouselContent nameOne={Pics} nameTwo={Pics2} nameThree={Pics3}/>
                    </div>
                </div>

                {/* Category */}
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

            
            <div className="container w-9/12 mx-auto">
                 <div className="grid justify-items-center pb-4 my-20">
                    <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Competition
                    </div>
                    <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center lg:text-left fredoka font-bold text-stone-900 pb-4 mb-10">
                    Silabus
                    </h1>

                    <p className="text-[0.6rem] sm:text-sm lg:text-base text-justify leading-7 lg:leading-9 text-stone-800">
                    <span className="font-bold">Matematika</span><br></br>Bangun datar dan ruang, trigonometri, peluang, kombinatorika, logika matematika, statistika, fungsi, diferensial dan integral, persamaan garis dan persamaan kuadrat, aljabar, barisan dan deret, eksponensial dan logaritma, limit, dan matematika terapan.
                    <br></br><br></br><span className="font-bold">Fisika</span><br></br>Kinematika, energetika, fluida, sifat fisika bahan, listrik, getaran dan gelombang, termodinamika, fisika modern, fisika atom, dan fisika optik.
                    <br></br><br></br><span className="font-bold">Kimia</span><br></br>Stoikiometri larutan, polimer, hukum gas ideal, reaksi redoks, kesetimbangan kimia, koloid dan sifat koligatif larutan, kelat, senyawa kompleks, prinsip asam basa & larutan buffer, elektrokimia, kimia organik.
                    <br></br><br></br><span className="font-bold">Biologi</span><br></br>Mikrobiologi, biologi sel, virologi, fotosintesis, metabolisme tubuh, pencernaan, sistem transportasi tubuh, sistem kekebalan tubuh, fisiologis tubuh dan enzim, anatomi, bioteknologi, biologi lingkungan, dan genetika.
                    <br></br><br></br><span className="font-bold">Ilmu pangan</span><br></br>Komponen makro dan mikro, analisis pangan, karakteristik bahan pangan, bahan tambahan pangan, flavor dan kandungan dalam pangan, sanitasi pangan, fermentasi, mikrobiologi pangan, biokimia pangan, metabolisme komponen pangan, teknik pangan, rekayasa proses pangan, alat-alat pengolahan, evaluasi sensori.
                    </p>     
                </div>

                <div className="grid justify-items-center pb-4 my-20">
                    <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Competition
                    </div>
                    <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl text-center lg:text-left fredoka font-bold text-stone-900 pb-4 mb-10">
                    Reference
                    </h1>

                    <p className="text-[0.6rem] sm:text-sm lg:text-base text-justify leading-7 text-stone-800 border rounded-lg py-10 px-10 flex flex-col lg:flex-none gap-5 lg:gap-4">
                        <div className="flex">
                        <li></li>Buku Pendamping Mata Pelajaran Matematika, Fisika, Kimia, dan Biologi SMA/sederajat.
                        </div>
                        <div className="flex">
                        <li></li>Muchtadi TR, Sugiyono, Ayustaningwarno F. 2013. Ilmu Pengetahuan Bahan Pangan. Bandung(ID): Alfabeta.
                        </div>
                        <div className="flex">
                        <li></li>Fellows PJ. 2016. Teknologi Pengolahan Pangan: Prinsip dan Praktik. Jakarta (ID): EGC.
                        </div>
                        <div className="flex">
                        <li></li>Kusnandar F. 2019. Kimia Pangan Komponen Makro. Jakarta (ID): PT Bumi Aksara.
                        </div>
                        <div className="flex">
                        <li></li>Rahayu WP, Nurwitri CC, Komalasari P. 2012. Mikrobiologi Pangan. Bogor (ID): IPB Press 
                        </div>
                        <div className="flex">
                        <li></li>PATPI, Kusnandar F, Rahayu WP, Marpaung AM, Santoso U. 2020. Perspektif Global Ilmu dan Teknologi Pangan. Bogor (ID): IPB Press.
                        </div>
                        <div className="flex">
                        <li></li>Anggraeni NI. 2018. Biokimia Berorientasi pada Analisis Pangan Fungsional. Bandung (ID): Bitread Publishing.
                        </div>
                        <div className="flex">
                        <li></li>Wijaya CH, Mulyono N. 2010. Bahan Tambahan Pangan: Pemanis. Bogor (ID): IPB Press.
                        </div>
                        <div className="flex">
                        <li></li>Wijaya CH, Mulyono N, Afandi FA. 2011. Bahan Tambahan Pangan: Pengawet. Bogor (ID): IPB Press.
                        </div>
                        <div className="flex">
                        <li></li>Andarwulan N, Kusnandar F, Herawati D. 2011. Analisis Pangan. Jakarta (ID): PT Dian Rakyat.
                        </div>
                    </p>     
                </div>
            </div>



            <div className="container w-9/12 mx-auto">
                <div className="grid justify-items-center mb-36">
                    <div className="flex items-center justify-center bg-pink-50 rounded-xl py-5 px-8">
                        <p className="text-[0.6rem] sm:text-sm lg:text-md text-left leading-7 lg:leading-9 mr-10 text-stone-900">
                            Informasi lebih lanjut terdapat di Guidebook LCTIP XXXI <br></br>yang dapat diakses pada link berikut: { } 
                            <a href="https://ipb.link/guidebook-lctip-xxxi" className="font-bold hover:underline">Guidebook</a>
                        </p>

                        <div className="p-5 w-32 h-32 auto mx-auto rounded-lg flex items-center bg-white">
                            <img src={QR} className="" alt="qr-guidebook"></img>

                        </div>
                    </div>
                </div>

                <Sponsors/>
            </div>


        </div>
    )
}

export default CompetitionContent;