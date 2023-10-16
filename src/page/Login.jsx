import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email?.current?.value,
            password: password?.current?.value,
        };

        axios
            .post("http://localhost:8000/users/login", data)
            .then((res) => {
                console.log(res.data.response)
                const token = res.data.response.token; // Asume que el token se encuentra en la respuesta
                const user = res.data.response.user;
                // Almacena el token en el localStorage
                localStorage.setItem("token", token);
                localStorage.setItem('user', JSON.stringify(user));



                // Redirige al usuario a la página de inicio o a la página deseada
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div class="relative w-full h-36 bg-cover bg-bottom md:h-48"
                style={{ backgroundImage: `url('../../public/image/login_banner.png')` }}>
                <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
                    <p class="text-xl text-slate-800 md:text-3xl">Nice to see you again</p>
                    <p class="text-xl text-slate-800 md:text-3xl">enjoy your</p>
                    <p class="text-base text-yellow-500 font-bold md:text-lg">pack&Go trip</p>
                    <img className='w-6 mt-3 md:w-10' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
                </div>
            </div>

            <div className="container max-w-full mx-auto py-4 bg-sky-100 md:py-24 px-6">
                <div className="max-w-screen-xl mx-auto flex items-center justify-center">
                    <div className="w-80 p-4 shadow-gray-950 shadow-md bg-sky-50 rounded-sm md:w-1/2">
                        <div>
                            <p className="text-center text-2xl font-bold text-black">
                                Welcome to login!
                            </p>
                        </div>
                        <form className="mt-8" onSubmit={handleLoginSubmit}>
                            <div className="mx-auto max-w-lg">
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Email</span>
                                    <input
                                        ref={email}
                                        type="email"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" autocomplete="email"
                                    />

                                </div>

                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Password</span>
                                    <input
                                        ref={password}
                                        type="password"
                                        autoComplete="current-password" // Agregar este atributo
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className='flex justify-center '>
                                    <button
                                        className='p-1 m-3 font-bold text-white ml-5 w-28 bg-sky-800 hover-bg-yellow-600 rounded-full md:p-3'
                                        type="submit">Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
