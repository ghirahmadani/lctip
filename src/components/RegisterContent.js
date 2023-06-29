import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Button from "./Button";

const RegisterContent = () => {


    const form = useForm();

    const { register, control } = form;

    return( 
        <div className="container">
            <div className="bg-white border-b my-20">
                <div className="relative isolate">
                    <div className="mx-auto max-w-2xl py-36">
                        <div className="mb-6 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            LCTIP XXXI
                        </div>
                        </div>
                        <div className="text-center">
                        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl fredoka font-bold text-stone-900">
                            Registration<br></br>Form
                        </h1>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-fuchsia-900">
                                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <Link to="/events/competition" className="ml-1 text-sm font-medium text-gray-700 hover:text-fuchsia-900 md:ml-2">Competition</Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Register</span>
                                </div>
                            </li>
                            </ol>
                        </nav>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team */}
            <form>
            <div className="container w-9/12 mx-auto">
                <form className="border-b my-10 py-10">
                    <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Tim</h1>
                    <div className="mb-6">
                        <label htmlFor="teamName" className="block mb-2 text-sm text-left font-medium text-gray-900">Nama Tim</label>
                        <input type="text" id="teamName" {...register("teamName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="schoolName" className="block mb-2 text-sm text-left font-medium text-gray-900">Nama Sekolah</label>
                        <input type="text" id="schoolName" {...register("schoolName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="schoolAddress" className="block mb-2 text-sm text-left font-medium text-gray-900">Alamat Sekolah</label>
                        <input type="text" id="schoolAddress" {...register("schoolAddress")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="schoolEmail" className="block mb-2 text-sm text-left font-medium text-gray-900">Email Sekolah</label>
                        <input type="email" id="schoolEmail" {...register("schoolEmail")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="schoolNumber" className="block mb-2 text-sm text-left font-medium text-gray-900">Telepon Sekolah</label>
                        <input type="text" id="schoolNumber" {...register("schoolNumber")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                    <label htmlFor="schoolRegion" className="block mb-2 text-sm text-left font-medium text-gray-900">Regional Sekolah</label>
                    <select id="schoolRegion" {...register("schoolRegion")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required>
                        <option value="1">Regional I - Bogor</option>
                        <option value="2">Regional II - DKI Jakarta dan Banten</option>
                        <option value="3">Regional III - Jawa Barat</option>
                        <option value="4">Regional IV - Lampung, Sumatera Selatan, Bengkulu, dan Bangka Belitung</option>
                        <option value="5">Regional V - NAD, Sumatera Utara dan Barat, Riau, dan Kepulauan Riau</option>
                        <option value="6">Regional VI - Jawa Tengah dan DI Yogyakarta</option>
                        <option value="7">Regional VII - Jawa Timur, Bali, NTB, dan NTT</option>
                        <option value="8">Regional VIII - Kalimantan, Sulawesi, Maluku, dan Papua</option>
                    </select>
                    </div>
                </form>
                {/* Mentor */}
                <form className="border-b my-10 py-10">
                    <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Pembimbing</h1>
                    <div className="mb-6">
                        <label htmlFor="mentorName" className="block mb-2 text-sm text-left font-medium text-gray-900">Nama</label>
                        <input type="text" id="mentorName" {...register("mentorName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="mentorNIK" className="block mb-2 text-sm text-left font-medium text-gray-900">NIK</label>
                        <input type="text" id="mentorNIK" {...register("mentorNIK")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="mentorNumber" className="block mb-2 text-sm text-left font-medium text-gray-900">Nomor Telepon</label>
                        <input type="text" id="mentorNumber" {...register("mentorNumber")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="mentorEmail" className="block mb-2 text-sm text-left font-medium text-gray-900">Email</label>
                        <input type="email" id="mentorEmail" {...register("mentorEmail")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="mentorPics" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto Formal</label>
                        <input  type="file" id="mentorPics" {...register("mentorPics")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp"/>
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500 dark:text-gray-300" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png</div>
                    </div>
                </form>
                {/* Leader */}
                <form className="border-b my-10 py-10">
                    <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Ketua Tim</h1>
                    <div className="mb-6">
                        <label htmlFor="leadUsername" className="block mb-2 text-sm text-left font-medium text-gray-900">Username</label>
                        <input type="text" id="leadUsername" {...register("leadUsername")} autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadPassword" className="block mb-2 text-sm text-left font-medium text-gray-900">Password</label>
                        <input type="password" id="leadPassword" {...register("leadPassword")} autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadName" className="block mb-2 text-sm text-left font-medium text-gray-900">Name</label>
                        <input type="text" id="leadName" {...register("leadName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadNIK" className="block mb-2 text-sm text-left font-medium text-gray-900">NIK</label>
                        <input type="text" id="leadNIK" {...register("leadNIK")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadNumber" className="block mb-2 text-sm text-left font-medium text-gray-900">Nomor Telepon</label>
                        <input type="text" id="leadNumber" {...register("leadNumber")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadEmail" className="block mb-2 text-sm text-left font-medium text-gray-900">Email</label>
                        <input type="email" id="leadEmail" {...register("leadEmail")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadPicsFormal" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto Formal</label>
                        <input type="file" id="leadPicsFormal" {...register("leadPicsFormal")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp"/>
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png</div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="leadPicsCard" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto atau Scan dari Kartu Pelajar atau KTP</label>
                        <input type="file" id="leadPicsCard" {...register("leadPicsCard")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp"  />
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png .pdf</div>
                    </div>
                </form>
                {/* Member 1 */}
                <form className="border-b my-10 py-10">
                    <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Anggota I</h1>
                    <div className="mb-6">
                        <label htmlFor="memberOneUsername" className="block mb-2 text-sm text-left font-medium text-gray-900">Username</label>
                        <input type="text" id="memberOneUsername" {...register("memberOneUsername")} autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOnePassword" className="block mb-2 text-sm text-left font-medium text-gray-900">Password</label>
                        <input type="password" id="memberOnePassword" {...register("memberOnePassword")} autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOneName" className="block mb-2 text-sm text-left font-medium text-gray-900">Name</label>
                        <input type="text" id="memberOneName" {...register("memberName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOneNIK" className="block mb-2 text-sm text-left font-medium text-gray-900">NIK</label>
                        <input type="text" id="memberOneNIK" {...register("memberOneNIK")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOneNumber" className="block mb-2 text-sm text-left font-medium text-gray-900">Nomor Telepon</label>
                        <input type="text" id="memberOneNumber" {...register("memberOneNumber")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOneEmail" className="block mb-2 text-sm text-left font-medium text-gray-900">Email</label>
                        <input type="email" id="memberOneEmail" {...register("memberOneEmail")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOnePicsFormal" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto Formal</label>
                        <input type="file" id="memberOnePicsFormal" {...register("memberOnePicsFormal")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp" />
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png</div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOnePicsCard" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto atau Scan dari Kartu Pelajar atau KTP</label>
                        <input type="file" id="memberOnePicsCard" {...register("memberOnePicsCard")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp" />
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png .pdf</div>
                    </div>
                </form>
                {/* Member 2 */}
                <form className="border-b my-10 py-10">
                    <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Anggota II</h1>
                    <div className="mb-6">
                        <label htmlFor="memberTwoUsername" className="block mb-2 text-sm text-left font-medium text-gray-900">Username</label>
                        <input type="text" id="memberTwoUsername" {...register("memberTwoUsername")} autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberTwoPassword" className="block mb-2 text-sm text-left font-medium text-gray-900">Password</label>
                        <input type="password" id="memberTwoPassword" {...register("memberTwoPassword")} autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberOneName" className="block mb-2 text-sm text-left font-medium text-gray-900">Name</label>
                        <input type="text" id="memberTwoName" {...register("memberName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberTwoNIK" className="block mb-2 text-sm text-left font-medium text-gray-900">NIK</label>
                        <input type="text" id="memberTwoNIK" {...register("memberTwoNIK")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberTwoNumber" className="block mb-2 text-sm text-left font-medium text-gray-900">Nomor Telepon</label>
                        <input type="text" id="memberTwoNumber" {...register("memberTwoNumber")}name="memberTwoNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberTwoEmail" className="block mb-2 text-sm text-left font-medium text-gray-900">Email</label>
                        <input type="email" id="memberTwoEmail" {...register("memberTwoEmail")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberTwoPicsFormal" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto Formal</label>
                        <input type="file"  id="memberTwoPicsFormal" {...register("memberTwoPicsFormal")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp" />
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png</div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="memberTwoPicsCard" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto atau Scan dari Kartu Pelajar atau KTP</label>
                        <input type="file"  id="memberTwoPicsCard" {...register("memberTwoPicsCard")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp" />
                        <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png .pdf</div>
                    </div>
                </form>
                {/* Other */}
                <form className="border-b my-10 py-10">
                    <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Pendukung</h1>
                    <div className="mb-6">
                            <label htmlFor="paymentPics" className="block mb-2 text-sm text-left font-medium text-gray-900">Bukti Pembayaran</label>
                            <input type="file"  id="paymentPics" {...register("paymentPics")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp" />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="mentorPicsHelp">*Maks. Ukuran 15 MB dan Format Upload .jpg, .png</div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="schoolPics" className="block mb-2 text-sm text-left font-medium text-gray-900">Surat Utusan Sekolah</label>
                            <input type="file" id="schoolPics" {...register("schoolPics")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="mentorPicsHelp"/>
                        </div>
                </form>
                <fieldset className="mb-10">
                    <div className="flex items-center mb-4">
                        <input defaultChecked type="checkbox" id="checkbox-1" {...register("correctCheck")} defaultValue className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-fuchsia-400 focus:ring-2" />
                        <label htmlFor="checkbox-1" className="ml-2 text-[0.6rem] lg:text-sm font-medium text-left text-gray-900">dengan menekan tombol ini anda telah setuju bahwa semua data yang dimasukan sudah benar.</label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="checkbox-2" defaultValue {...register("termCheck")} className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-fuchsia-400 focus:ring-2" />
                        <label htmlFor="checkbox-2" className="ml-2 text-[0.6rem] lg:text-sm font-medium text-left text-gray-900">dengan menekan tombol ini anda telah setuju mendaftar sebagai peserta LCTIP XXXI dan mematuhi syarat dan ketentuan yang berlaku.</label>
                    </div>
                    <div className="flex items-start my-20">
                        <Button name="Submit"/>
                    </div>
                </fieldset>
            </div>
            </form>
            <DevTool control ={control}/>
        </div>

    )
}

export default RegisterContent;