import React, { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const email = useRef();
    const password = useRef();
    const photo = useRef();
    const name = useRef();
    const surname = useRef();
    const address = useRef();
    const phone = useRef();

    // Función para manejar el envío del formulario
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value,
            photo: photo.current.value,
            name: name.current.value,
            surname: surname.current.value,
            address: address.current.value,
            phone: phone.current.value,
        };

        console.log(data)
        axios.post("http://localhost:8000/auth/register", data)
            .then((res) => {
                // Manejar la respuesta exitosa si es necesario
            })
            .catch((error) => {
                console.log(error);
                // Manejar el error si es necesario
            });
    };

    return (
        <>
            <div class="relative w-full h-36 bg-cover bg-center md:h-48"
                style={{ backgroundImage: `url('../../public/image/register_banner.png')` }}>
                <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
                    <p class="text-xl text-slate-800 md:text-3xl">Your best travel itinerary</p>
                    <p class="text-base text-yellow-500 font-bold md:text-lg">begins here</p>
                    <img className='w-6 mt-3 md:w-10' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
                </div>
            </div>

            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
                <Link to="/">Home</Link>
                <p className='font-semibold'>/Register</p>
            </div>

            <div className="container max-w-full mx-auto py-4 bg-sky-100 md:py-24 px-6">
                <div className="max-w-screen-xl mx-auto flex items-center justify-center">
                    <div className="w-80 p-4 shadow-gray-950 shadow-md bg-sky-50 rounded-sm md:w-1/2">
                        <div >
                            <p className="text-center text-2xl font-bold text-black">
                                Welcome to the registry!
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
                                    <span className="px-1 text-sm text-gray-600">Photo URL</span>
                                    <input
                                        ref={photo}
                                        type="text"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>

                                {/* Nuevos campos para el registro */}
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Password</span>
                                    <input
                                        ref={password}
                                        type="password"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Name</span>
                                    <input
                                        ref={name}
                                        type="text"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Surname</span>
                                    <input
                                        ref={surname}
                                        type="text"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Address</span>
                                    <input
                                        ref={address}
                                        type="text"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="py-1">
                                    <span className="px-1 text-sm text-gray-600">Phone</span>
                                    <input
                                        ref={phone}
                                        type="number"
                                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                {/* Fin de nuevos campos para el registro */}

                                <div className='flex justify-center '>
                                    <button
                                        className='p-1 m-3 font-bold text-white ml-5 w-28 bg-sky-800 hover:bg-yellow-600 rounded-full md:p-3'
                                        type="submit">Register
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

export default Register;
