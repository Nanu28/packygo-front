import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { ChevronsLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate()

    const email = useRef();
    const password = useRef();
    ChevronsLeft

    // Función para manejar el envío del formulario
    async function handleRegisterSubmit(e) {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value,
        }
        try {
          const credenciales = await axios.post("http://localhost:8000/users/login", data)
            localStorage.setItem('token', credenciales.data.response.token)
            localStorage.setItem('user', JSON.stringify(credenciales.data.response.user));
           navigate('/')
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <>
            <div className="container max-w-full mx-auto md:py-24 px-6">
                <div className="max-w-screen-xl mx-auto flex items-center justify-center">
                    <div className="w-1/2 pl-4">
                        <div >
                            <p className="text-center text-2xl font-bold text-black">
                            Welcome to login!
                            </p>
                        </div>
                        <form className="mt-8" onSubmit={handleRegisterSubmit}>
                            <div className="mx-auto max-w-lg">
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Email</span>
                                    <input
                                        ref={email}
                                        type="email"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>

                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Password</span>
                                    <input
                                        ref={password}
                                        type="password"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className='flex justify-center '>
                                    <button
                                        className='p-3 m-3 font-bold text-black ml-5  w-28 bg-yellow-400 rounded-full'
                                        type="submit" >Login
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
