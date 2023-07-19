import Button from "./Button";
import Sponsors from "./Sponsors";
import { Accordion } from 'flowbite-react';

import Mincy from '../assets/Mincy.png'

const data = [
  {
    id: 1,
    question: 'Apa format username dan password untuk registrasi?',
    answer: 'Format username dan password bebas, dapat berupa kombinasi angka dan huruf atau huruf saja. Jangan sampai lupa ya, karena nanti akan digunakan untuk mengakses soal.'
  },
  {
    id: 2,
    question: 'Apa perbedaan LCTIP dengan cerdas cermat biasa?',
    answer: 'LCTIP tidak hanya memiliki mata lomba Matematika, Biologi, Kimia, Fisika tetapi juga melombakan wawasan Ilmu Pangan. Selain itu, LCTIP memiliki serangkaian acara tour kampus IPB, tour laboratorium ITP IPB, dan seminar nasional yang dapat diikuti.'
  },
  {
    id: 3,
    question: 'Apa aja benefit ikut dalam LCTIP?',
    answer: 'Dengan mengikuti LCTIP, peserta berkesempatan untuk dapat mengenal program studi Teknologi Pangan IPB lebih dalam melalui serangkaian acara tour kampus IPB, tour laboratorium ITP IPB, dan seminar nasional. LCTIP merupakan perlombaan tingkat nasional, sehingga peserta bisa mengenal teman-teman dari luar daerah! *Psstt pemenang utama berkesempatan menajdi mahasiswa ITP IPB tanpa test masuk loh..'
  },
  {
    id: 4,
    question: 'Ilmu pangan belum diajarkan di SMA nih, Kak! Gimana ya? Jadi takut...',
    answer: 'Tenang saja! LCTIP telah menyediakan referensi untuk silabus Ilmu Pangan yang dapat diakses di laman “Competition.” Selain itu, berbagai referensi lainnya juga dapat diakses di internet.'
  },
  {
    id: 5,
    question: 'Materi apa saja yang dilombakan dalam LCTIP?',
    answer: 'Materi yang akan dilombakan adalah mata pelajaran Matematika, Fisika, Kimia, Biologi SMA dan Ilmu Pangan. Silabus lengkap dapat diakses pada laman “Competition”.'
  },
  {
    id: 6,
    question: 'Bingung nih belajarnya darimana?',
    answer: 'Tenang! Peserta dapat melihat materi dari guidebook LCTIP 2023.'
  },
  {
    id: 7,
    question: 'Bagaimana pembagian babak di LCTIP XXXI?',
    answer: 'Qualification stage, quarter final stage, semi final stage, dan final stage.'
  },
  {
    id: 8,
    question: 'Apakah peserta LCTIP otomatis ikut pada rangkaian acara lainnya?',
    answer: 'Kegiatan education dan campus tour ditujukan untuk seluruh peserta, kegiatan mix and make ditujukan untuk peserta yang lolos ke babak semi final, dan seminar nasional terbuka untuk umum.'
  },
  {
    id: 9,
    question: 'Apakah semua peserta akan mendapat sertifikat?',
    answer: 'Yap, betul, semua peserta akan mendapat sertifikat. Bagi peserta qualification stage tetapi tidak lolos ke tahap selanjutnya, maka akan mendapat e-sertifikat.'
  },
  {
    id: 10,
    question: 'Apakah pelaksanaan LCTIP XXXI akan dilakukan secara online atau offline?',
    answer: 'Setiap babak di LCTIP XXXI akan dilaksanakan secara offline di kampus IPB Dramaga. Kegiatan secara offline terdiri dari qualification stage, edu dan campus tour, quarter final stage, seminar nasional, semi final stage, mix and make, dan final stage. Sementara itu, kegiatan yang dilaksanakan secara online hanya try out LCTIP XXXI.'
  }
]

const QuestionContent = () => {
  return(
    <div className="lg:container">
      <div className="bg-white border-b my-20">
        <div className="relative isolate">
          <div className="flex mx-auto max-w-3xl py-36 justify-center gap-6">
            <div className="hidden md:flex order-1">
              <img src={Mincy} alt="Mascot Fraga" className="h-48 w-48"></img>
            </div>
            <div className="hidden md:flex order-3">
              <img src={Mincy} alt="Mascot Fraga" className="h-48 w-48 -scale-x-100"></img>
            </div>
            <div className="order-2">
            <div className="mb-6 flex justify-center">
              <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                LCTIP XXXI
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl fredoka font-bold text-stone-900">
                FAQ's
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button name="Contact Us" link="https://wa.me/083807840380/" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='w-9/12 mx-auto my-20'>
          <Accordion collapseAll>
            {
              data.map((i,key)=> {
                return(
                  <Accordion.Panel key={key}>
                  <Accordion.Title className="text-stone-900 hover:text-[#79245B] flex items-center text-sm lg:text-base justify-between w-full p-5 text-left border-0 border-b-0 border-stone-200">
                    <div>{i.question}</div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-justify text-[0.6rem] lg:text-sm leading-5 lg:leading-7 text-stone-900">
                      {i.answer}       
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                )
              })
            }
          </Accordion>
          <Sponsors/>
        </div>
      </div>
  )
};

export default QuestionContent;
