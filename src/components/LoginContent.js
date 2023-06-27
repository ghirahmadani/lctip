import React from "react";
import Logo from "../resources/logolctip.png";

const LoginContent = () => {
    return( 
        <div className="flex justify-items-center content-center px-6 py-8 mx-auto my-24">
            <div className="flex items-center h-[400px] justify-center transition hover:scale-105 duration-200">
                <img src={Logo} className="w-1/2" alt="logo" />
            </div>
            
            <div className="w-full bg-white rounded-lg max-w-md">
                <div className="p-6 space-y-4">
                    <h1 className="text-3xl text-left fredoka font-bold text-stone-900 pb-4">User login</h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label
                        htmlFor="username"
                        className="flex justify-items-start ml-2 mb-2 text-sm font-medium text-stone-900"
                        >
                        Username
                        </label>
                        <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg hover:border-fuchsia-900 focus:ring-fuchsia-900 focus:border-fuchsia-900 w-full p-2.5"
                        required
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="flex justify-items-start ml-2 mb-2 text-sm font-medium text-stone-900"
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg hover:border-fuchsia-900 focus:ring-fuchsia-900 focus:border-fuchsia-900 w-full p-2.5"
                        required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <p
                        href="#"
                        className="text-sm ml-2 font-medium text-primary-600 hover:underline"
                        >
                        Forgot password?
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-[#79245B] bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Log In
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginContent;