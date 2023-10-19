import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
const TravelingPets = () => {
    const navigate = useNavigate();
    return (

        <div>
            <div className="hidden md:block">
                <Carousel autoSlide={true} autoSlideInterval={5000}>
                    <img className='w-full' src="../public/image/bn1.png" alt="carousel_banner1" />
                    <img className='w-full' src="../public/image/bn2.png" alt="carousel_banner2" />
                    <img className='w-full' src="../public/image/bn3.png" alt="carousel_banner3" />
                </Carousel>
            </div>

            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer' >/Blog</p>
                <p className=''>/Traveling with pets</p>
            </div>

            <div className='bg-orange-400 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>


                <div className=" h-full p-2 w-96 gap-10 ">
                    <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQnYyPezAZVbF1RQius3LfoR1uXvJt1SQKIYWrVPXXX3QJj32R-r65TvdipdMpTfbSAo&usqp=CAU" />
                    </div>
                    <div class="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 class="text-xl font-bold">Assistance dog for flying</h5>
                        <p className="text-gray-600 h-96 py-4">Airlines require visually impaired passengers to notify at least two days before the flight. It is important to contact the airline and airport to request assistance. Airport staff assist with check-in, security checks and boarding gate. The crew offers accessible safety information. Guide dogs are allowed at no additional cost if advance notice is given.
                        </p>

                    </div>
                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small class="text-gray-500">Adam - 22/07/2020</small>
                    </div>
                </div>


                <div className=" h-full p-2 w-96 gap-10 ">
                    <div className='w-full h-56 '>

                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="data:image/jpeg;base64,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" />
                    </div>
                    <div class="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 class="text-xl font-bold">General measures</h5>
                        <ul className="list-disc pl-4 text-md mt-2 text-gray-600 h-96 py-4">
                            <li className="mb-1">
                                The last meal should be at least two hours before the trip to avoid dizziness and vomiting.
                            </li>
                            <li className="mb-1">
                                Have your pet's vaccination and deworming schedule up to date.
                            </li>
                            <li className="mb-1">
                                Take with you elements such as vaccination card, collar, muzzle, toys, grooming items, emergency kit, etc.
                            </li>
                            <li className="mb-1">
                                Never medicate your pet with relaxants without the advice of a veterinary professional.
                            </li>
                            <li className="mb-1">
                                If your pet has had recent health difficulties, travel may not be a good idea.
                            </li>
                            <li className="mb-1">
                                Brachycephalic pets should not be subjected to travel longer than four hours.
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small className="text-gray-500">Joaquin - 22/02/2021</small>
                    </div>
                </div>

                <div className=" h-full p-2 w-96 gap-10 ">
                    <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://www.eltiempo.com/files/image_950_534/uploads/2017/02/12/58a06c78ae556.jpeg" />
                    </div>
                    <div className="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 className="text-xl font-bold">If you travel by air</h5>

                        <ul className="list-disc pl-4 text-md mt-2 text-gray-600 h-96 py-4">
                            <li className="mb-1">
                                Consult the regulations of each airline regarding the transport of pets.
                            </li>
                            <li className="mb-1">
                                Consult the regulations required by different countries to allow the entry of animals.
                            </li>
                            <li className="mb-1">
                                Some airlines have restrictions on the size or breed of animals that can travel with people in the cabin.
                            </li>
                            <li className="mb-1">
                                Have on hand all the documents that certify that your pet can travel in the aircraft cabin: emotional support certificate, vaccination certificate, etc.
                            </li>
                            <li className="mb-1">
                                On some occasions, the airline may make an additional charge for carrying a pet in the aircraft cabin.
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small className="text-gray-500">Gladys - 22/06/2022</small>
                    </div>
                </div>

            </div>
            <div className='w-full bg-orange-400 flex justify-center items-center'>
                <form className="mt-8 p-3 w-full md:w-1/2 bg-orange-300 rounded-xl m-3">
                    <div className="mx-auto max-w-lg">
                        <div className="py-1">
                            <span className="px-1 text-sm text-gray-600">Photo :</span>
                            <input
                                //ref={Photo}
                                type="file"
                                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />

                        </div>

                        <div className="py-1">
                            <span className="px-1 text-sm text-gray-600">Title :</span>
                            <input
                                //ref={Title}
                                type="Title"
                                autoComplete="current-Title" // Agregar este atributo
                                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="py-1">
                            <span className="px-1 text-sm text-gray-600">Description :</span>
                            <input
                                //ref={Description}
                                type="Description"
                                autoComplete="current-Description" // Agregar este atributo
                                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="py-1">
                            <span className="px-1 text-sm text-gray-600">Data :</span>
                            <input
                                //ref={Data}
                                placeholder='Name - 22/12/2023'
                                type="Data"
                                autoComplete="current-Data" // Agregar este atributo
                                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className='flex justify-center '>
                            <button
                                className='p-1 m-3 font-bold text-white ml-5 w-28 bg-sky-800 hover-bg-yellow-600 rounded-full md:p-3'
                                type="submit">Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}


export default TravelingPets