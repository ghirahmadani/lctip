import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Validation from "./Validation";

const RegisterContent = () => {
    const [isSuccess, setIsSuccess] = useState(null);
    const [isError, setIsError] = useState(null);
    const [isUsernameOneAvailable, setIsUsernameOneAvailable] = useState(true);
    const [isUsernameTwoAvailable, setIsUsernameTwoAvailable] = useState(true);
    const [isUsernameThreeAvailable, setIsUsernameThreeAvailable] = useState(true);
    const [usernameOne, setUsernameOne] = useState("")
    const [usernameTwo, setUsernameTwo] = useState("")
    const [usernameThree, setUsernameThree] = useState("")

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        setIsUsernameOneAvailable(true)
        setIsUsernameTwoAvailable(true)
        setIsUsernameThreeAvailable(true)
    },[register])

    const onSubmit = async(data) => {

        if(isUsernameOneAvailable && isUsernameTwoAvailable && isUsernameThreeAvailable){

            const form = new FormData();

            form.append('team_name', data.teamName)
            form.append('school_name', data.schoolName)
            form.append('school_address', data.schoolAddress)
            form.append('school_email', data.schoolEmail)
            form.append('school_telp', data.schoolNumber)
            
            form.append('mentor_name', data.mentorName)
            form.append('mentor_nip', data.mentorNIK)
            form.append('mentor_telp', data.mentorNumber)
            form.append('mentor_email', data.mentorEmail)
            form.append('mentor_photo', data.mentorPics[0])

            form.append('username', data.leadUsername)
            form.append('password', data.leadPassword)
            form.append('name', data.leadName)
            form.append('nip', data.leadNIK)
            form.append('handphone', data.leadNumber)
            form.append('email', data.leadEmail)
            form.append('formal_photo', data.leadPicsFormal[0])
            form.append('ktp_photo', data.leadPicsCard[0])

            form.append('username2', data.memberOneUsername)
            form.append('password2', data.memberOnePassword)
            form.append('name2', data.memberOneName)
            form.append('nip2', data.memberOneNIK)
            form.append('handphone2', data.memberOneNumber)
            form.append('email2', data.memberOneEmail)
            form.append('formal_photo2', data.memberOnePicsFormal[0])
            form.append('ktp_photo2', data.memberOnePicsCard[0])

            form.append('username3', data.memberTwoUsername)
            form.append('password3', data.memberTwoPassword)
            form.append('name3', data.memberTwoName)
            form.append('nip3', data.memberTwoNIK)
            form.append('handphone3', data.memberTwoNumber)
            form.append('email3', data.memberTwoEmail)
            form.append('formal_photo3', data.memberTwoPicsFormal[0])
            form.append('ktp_photo3', data.memberTwoPicsCard[0])

            form.append('payment_proof', data.paymentPics[0])
            form.append('mesengger_letter', data.schoolPics[0])

            form.append('term1', data.correctCheck)
            form.append('term2', data.termCheck)

            // for (let [key, value] of form) {
            //     console.log(`${key}: ${value}`)
            // }

            await axios
            .post(`${process.env.REACT_APP_REGISTRATION_URL}/registration`, form,
            {
                headers: {
                'Content-Type': 'multipart/form-data'
                },
            })
            .then((res) => {
                setIsError(null)
                setUsernameOne("")
                setUsernameTwo("")
                setUsernameThree("")
                setIsSuccess(res.data.message)
            })
            .catch(error => {
                setIsSuccess(null)
                setIsError(error.message)
            });
        }
        else{
            setIsError("Registrasi Gagal Username Salah")
        }
    }

    return( 
        <div className="container">
            {
                isSuccess && 
                    <div className="relative">        
                        <div className="fixed inset-x-0 mx-auto top-[150px] w-10/12 rounded-lg bg-[#499e86] text-white px-4 py-3 z-10" role="alert">
                            <span className="block sm:inline">
                                {isSuccess}
                            </span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg
                                onClick={() => setIsSuccess(null)}
                                className="fill-current h-6 w-6 text-white"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                >
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>
                    </div>
            }
            {
                isError && 
                    <div className="relative">        
                        <div className="fixed inset-x-0 mx-auto top-[150px] w-10/12 rounded-lg bg-red-700 text-white px-4 py-3 z-20" role="alert">
                            <span className="block sm:inline">
                                {isError}
                            </span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg
                                onClick={() => setIsError(null)}
                                className="fill-current h-6 w-6 text-white"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                >
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>
                    </div>
            }
            {!isUsernameOneAvailable || !isUsernameTwoAvailable || !isUsernameThreeAvailable?
                <div className="relative">        
                    <div className="fixed inset-x-0 mx-auto top-[150px] w-10/12 rounded-lg bg-red-700 text-white px-4 py-3 z-10">
                        <span className="block sm:inline">
                            Username sudah digunakan!
                        </span>
                    </div>
                </div>:<></>
            }
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
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Team */}
                <div className="container w-9/12 mx-auto">
                    <div className="border-b my-10 py-10">
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
                    </div>
                    {/* Mentor */}
                    <div className="border-b my-10 py-10">
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
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500 dark:text-gray-300" id="mentorPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png</div>
                        </div>
                    </div>
                    {/* Leader */}
                    <div className="border-b my-10 py-10">
                        <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Ketua Tim</h1>
                        <div className="mb-6">
                            <label htmlFor="leadUsername" className="block mb-2 text-sm text-left font-medium text-gray-900">Username</label>
                            <input type="text" id="leadUsername" {...register("leadUsername")} value={usernameOne} onChange={(event) => setUsernameOne(event.target.value)} autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                            <Validation username={usernameOne} handleValidation={(status) => setIsUsernameOneAvailable(status)}/>
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
                            <input type="file" id="leadPicsFormal" {...register("leadPicsFormal")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="leadPicsHelp"/>
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="leadPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png</div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="leadPicsCard" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto atau Scan dari Kartu Pelajar atau KTP</label>
                            <input type="file" id="leadPicsCard" {...register("leadPicsCard")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="leadPicsHelp"  />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="leadPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png .pdf</div>
                        </div>
                    </div>
                    {/* Member 1 */}
                    <div className="border-b my-10 py-10">
                        <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Anggota I</h1>
                        <div className="mb-6">
                            <label htmlFor="memberOneUsername" className="block mb-2 text-sm text-left font-medium text-gray-900">Username</label>
                            <input type="text" id="memberOneUsername" {...register("memberOneUsername")} value={usernameTwo} onChange={(event) => setUsernameTwo(event.target.value)} autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                            <Validation username={usernameTwo} handleValidation={(status) => setIsUsernameTwoAvailable(status)}/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="memberOnePassword" className="block mb-2 text-sm text-left font-medium text-gray-900">Password</label>
                            <input type="password" id="memberOnePassword" {...register("memberOnePassword")} autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="memberOneName" className="block mb-2 text-sm text-left font-medium text-gray-900">Name</label>
                            <input type="text" id="memberOneName" {...register("memberOneName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
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
                            <input type="file" id="memberOnePicsFormal" {...register("memberOnePicsFormal")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="memberOnePicsHelp" />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="memberOnePicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png</div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="memberOnePicsCard" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto atau Scan dari Kartu Pelajar atau KTP</label>
                            <input type="file" id="memberOnePicsCard" {...register("memberOnePicsCard")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="memberOnePicsHelp" />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="memberOnePicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png .pdf</div>
                        </div>
                    </div>
                    {/* Member 2 */}
                    <div className="border-b my-10 py-10">
                        <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Individu Anggota II</h1>
                        <div className="mb-6">
                            <label htmlFor="memberTwoUsername" className="block mb-2 text-sm text-left font-medium text-gray-900">Username</label>
                            <input type="text" id="memberTwoUsername" {...register("memberTwoUsername")} value={usernameThree} onChange={(event) => setUsernameThree(event.target.value)}  autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                            <Validation username={usernameThree} handleValidation={(status) => setIsUsernameThreeAvailable(status)}/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="memberTwoPassword" className="block mb-2 text-sm text-left font-medium text-gray-900">Password</label>
                            <input type="password" id="memberTwoPassword" {...register("memberTwoPassword")} autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="memberOneName" className="block mb-2 text-sm text-left font-medium text-gray-900">Name</label>
                            <input type="text" id="memberTwoName" {...register("memberTwoName")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 block w-full p-2.5" required/>
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
                            <input type="file"  id="memberTwoPicsFormal" {...register("memberTwoPicsFormal")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="memberTwoPicsHelp" />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="memberTwoPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png</div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="memberTwoPicsCard" className="block mb-2 text-sm text-left font-medium text-gray-900">Foto atau Scan dari Kartu Pelajar atau KTP</label>
                            <input type="file"  id="memberTwoPicsCard" {...register("memberTwoPicsCard")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="memberTwoPicsHelp" />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="memberTwoPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png .pdf</div>
                        </div>
                    </div>
                    {/* Other */}
                    <div className="border-b my-10 py-10">
                        <h1 className="text-2xl lg:text-3xl text-left fredoka font-bold text-stone-900 pb-4 mb-8">Data Pendukung</h1>
                        <div className="mb-6">
                            <label htmlFor="paymentPics" className="block mb-2 text-sm text-left font-medium text-gray-900">Bukti Pembayaran</label>
                            <input type="file"  id="paymentPics" {...register("paymentPics")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="paymentPicsHelp" />
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="paymentPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png</div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="schoolPics" className="block mb-2 text-sm text-left font-medium text-gray-900">Surat Utusan Sekolah</label>
                            <input type="file" id="schoolPics" {...register("schoolPics")} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-fuchsia-400 focus:ring-3 focus:border-gray-200 focus:outline-none" aria-describedby="letterPicsHelp"/>
                            <div className="mt-2 text-[0.6rem] lg:text-sm text-left text-gray-500" id="paymentPicsHelp">*Maks. Ukuran 3 MB dan Format Upload .jpg, .png .pdf</div>
                        </div>
                        <fieldset className="mb-10">
                            <div className="flex items-center mb-4">
                                <input defaultChecked type="checkbox" id="checkbox-1" {...register("correctCheck")} defaultValue className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-fuchsia-400 focus:ring-2" />
                                <label htmlFor="checkbox-1" className="ml-2 text-[0.6rem] lg:text-sm font-medium text-left text-gray-900">dengan menekan tombol ini anda telah setuju bahwa semua data yang dimasukan sudah benar.</label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input type="checkbox" id="checkbox-2" defaultValue {...register("termCheck")} className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-fuchsia-400 focus:ring-2" />
                                <label htmlFor="checkbox-2" className="ml-2 text-[0.6rem] lg:text-sm font-medium text-left text-gray-900">dengan menekan tombol ini anda telah setuju mendaftar sebagai peserta LCTIP XXXI dan mematuhi syarat dan ketentuan yang berlaku.</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="flex items-start my-20">
                        <button type="submit" name="Submit" className="border p-4 px-10 rounded-lg border-[#79245B] text-[#79245B] hover:bg-[#79245B] hover:text-white">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterContent;