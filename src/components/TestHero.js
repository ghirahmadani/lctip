import React from 'react'

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import Button from './Button';

const TestHero = () => {
  return (
    <div className='container w-full mx-auto my-36'>
      <div className='container w-9/12 mx-auto space-y-10'>
          <Alert
            color="success"
            icon={HiInformationCircle}
            className="flex justify-center mt-24"
          >
            <div className="flex justify-center items-center gap-4">
              <p>
                Jadwal try out akan dilaksanakan pada pukul 3:00 PM
              </p>
            </div>
          </Alert>
          <div className='order-1'>
            <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Try Out
            </div>
            <h1 className="text-5xl text-left fredoka font-bold text-stone-900 pb-4 mb-6">
            Profile
            </h1>
            <div className='grid grid-cols-12'>
              <p className="text-md text-left leading-7 text-stone-800">
                Nama
              </p>
              <p className="text-md text-center leading-7 text-stone-800">:</p>
              <p className='grid col-span-3 items-start text-md text-left leading-7 text-stone-800'>Ghirah Madani</p>
            </div>
            <div className='grid grid-cols-12'>
              <p className="text-md text-left leading-7 text-stone-800">
                Sekolah
              </p>
              <p className="text-md text-center leading-7 text-stone-800">:</p>
              <p className='grid col-span-3 items-start text-md text-left leading-7 text-stone-800'>SMAN 2 Bandung</p>
            </div>
            <div className='grid grid-cols-12'>
              <p className="text-md text-left leading-7 text-stone-800">
                Tim
              </p>
              <p className="text-md text-center leading-7 text-stone-800">:</p>
              <p className='grid col-span-3 items-start text-md text-left leading-7 text-stone-800'>Visual Maker</p>
            </div>

          </div>
          <div className='order-2'>
              <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Try Out
              </div>
              <h1 className="text-5xl text-left fredoka font-bold text-stone-900 pb-4 mb-6">
              Rules
              </h1>
              <p className="text-sm text-justify leading-7 text-stone-800">
                <li>Peserta hanya dapat mengakses soal try out online melalui situs dengan menggunakan user ID dan password yang telah dikonfirmasi terdaftar setelah tahap verifikasi data pada registrasi satu.</li>
                <li>Peserta hanya dapat mengerjakan soal sebanyak 1 kali (sekali attempt saja). Soal akan ditampilkan berurutan dan tidak bisa kembali ke soal sebelumnya.</li>
                <li>Peserta mengerjakan soal secara individu.</li>
                <li>Soal try out terdiri dari 20 soal pilihan ganda dengan rincian: 4 soal matematika, 4 soal fisika, 4 soal kimia, 4 soal biologi, 45 soal pangan.</li>
                <li>Soal menggunakan bahasa Indonesia atau bahasa Inggris.</li>
                <li>Peserta dapat mengerjakan seluruh soal dalam waktu 90 menit terhitung sejak peserta menekan tombol attempt.</li>
                <li>Tipe soal berupa pilihan ganda, sebab akibat, pernyataan 1, 2, 3, 4, dan benar salah.</li>
                <li>Boleh menggunakan kalkulator (scientific) dan bukan kalkulator dari gawai seperti handphone.</li>
                <li>Gangguan koneksi internet dan perangkat bukan merupakan tanggung jawab panitia.</li>
              </p>
          </div>
          <div className='order-3'>
            <div className="relative rounded-full px-3 py-1 mb-4 w-28 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Try Out
            </div>
            <h1 className="text-5xl text-left fredoka font-bold text-stone-900 pb-4 mb-6">
              Contact Person
            </h1>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
              </svg>
              <p className="text-md text-left ml-2 text-stone-800">083807840380</p>
              <p className="text-md text-left ml-2 text-stone-800">- Kathleen</p>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
              </svg>
              <p className="text-md text-left ml-2 text-stone-800">081541268240</p>
              <p className="text-md text-left ml-2 text-stone-800">- Maylia</p>
            </div>
          </div>
          <div className='order-4'>
          <fieldset className="mb-10">
            <div className="flex items-center mb-4">
                <input defaultChecked id="checkbox-1" type="checkbox" defaultValue className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-fuchsia-400 focus:ring-2" />
                <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900">dengan menekan tombol ini anda telah setuju dengan seluruh <span className="font-bold">aturan try out.</span></label>
            </div>
          </fieldset>
          <div className="flex items-start my-10">
              <Button name="Start"/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default TestHero