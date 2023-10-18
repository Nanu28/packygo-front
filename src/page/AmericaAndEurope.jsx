import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carrousel.jsx';

const AmericaAndEurope = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-sky-50'>
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
                <p className=''>/Latin America and Europe</p>
            </div>


            <div className='bg-orange-400 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>


                <div class="  h-full p-2 ">
                    <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg" />
                    </div>

                    <div class="bg-gray-100 min-h-5/6 p-2 flex flex-col justify-between">
                        <h5 class="text-xl font-bold pl-4">Argentina</h5>
                        <p className="text-gray-600 h-5/6 p-3">
                            If you're planning a trip to Argentina, here's some essential information to get you started. Argentina is a vast and diverse country located in South America. As a traveler, there are a few key details you should know:

                            Languages: Spanish is the official language of Argentina. While Spanish is the most widely spoken language, you can often find people who speak English, especially in major cities and tourist areas.

                            Geography: Argentina is known for its diverse landscapes. From the stunning Andes Mountains in the west to the beautiful Pampas region in the east and the breathtaking landscapes of Patagonia, there's a wide range of natural beauty to explore.

                            Currency: The official currency of Argentina is the Argentine Peso (ARS). It's advisable to have some cash with you, and you can find ATMs in most cities for easy currency exchange.

                            Local Cuisine: Don't miss the opportunity to savor traditional Argentine cuisine. Argentine barbecue, known as "asado," is famous worldwide. Enjoy delicious steaks, empanadas, and try the national drink, "mate."

                            Safety: Argentina is generally a safe destination for travelers. However, like in any country, it's essential to be cautious and aware of your surroundings, especially in crowded places.

                            Visa Requirements: Depending on your nationality, you may need a visa to enter Argentina. Make sure to check the visa requirements well in advance of your trip.

                            Remember that Argentina is a diverse and beautiful country with something for every type of traveler. Enjoy your journey through this fascinating land of culture, nature, and adventure.

                        </p>

                    </div>
                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>


                <div className=" h-full p-2">
                    <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://eaqxr36k8gu.exactdn.com/wp-content/uploads/2013/07/que-ver-y-hacer-en-paris-torre-eiffel.jpg?strip=all&lossy=1&resize=1000%2C621&ssl=1" />
                    </div>
                    <div class="bg-gray-100 min-h-5/6 p-2 flex flex-col justify-between">
                        <h5 className="text-xl font-bold pl-4">Francia</h5>
                        <p className="text-gray-600 h-5/6 p-3">
                            It was built by Gustave Eiffel to commemorate the centenary of the French Revolution
                            and its inauguration coincided with the Paris World Exposition of 1889.
                            Although in the beginning it was not to the liking of all Parisians,
                            and even became provisional (in theory it would be dismantled in 1900),
                            gradually people got used to the nicknamed "La Dame de Fer" (the Iron Lady)
                            to become the greatest symbol of Paris. It has a height of 324 meters and is arranged
                            in three levels, accessible with different tickets
                            (depending on the level you want to visit and whether or not you use the elevator
                            the price changes). But while you're at it, we recommend you to climb to the top,
                            at 276 meters high, to enjoy wonderful views of Paris and some of its main tourist
                            attractions (which we told you about in this post). If you want to enjoy the tower
                            but without climbing it, the best place to see it is from the Trocadero Gardens,
                            on the other side of the Seine River. Price: stairs 2nd floor: 10,50€ /
                            elevator 2nd floor: 16,70€ / stairs 2nd floor + elevator to the top: 19,90€ /
                            elevator to the top: 26,10€. Book your ticket in advance on their official website.</p>
                    </div>
                    <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small className="text-gray-500">George - 18/10/2020</small>
                    </div>
                </div>


                <div className=" h-full p-2 ">
                    <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://www.guiaenturismo.com/wp-content/uploads/2018/01/Las-Tendencias-Turisticas-Populares-en-Europa.jpg" />
                    </div>
                    <div className="bg-gray-100 min-h-5/6 p-2 flex flex-col justify-between">
                        <h5 className="text-xl font-bold pl-4">Lisbon</h5>
                        <p className="text-gray-600 h-5/6 p-3">
                            Lisbon
                            The feeling of nostalgia runs through the streets of the city that always seems very far away. Lisbon is that city that seems to belong to another era. It is marked by very narrow roads, the viewpoints of its sky and its ocean. With a light that allows you to take a momentary walk into each person's past just by resting your eyes on its cobblestone floors and its old-style houses.
                            Edinburgh
                            Every year, Edinburgh is filled with more than hundreds of millions of tourists in search of cultural shows and nightlife fun. The Scottish capital always offers good spirits, and the desires and/or longing for colossal fun at night with the moon at its highest level. This place is an attractive space of culture culminating in the summer dates in the midst of the most beautiful celebration and celebration of the International Festival in honor of the artists and stage shows.
                            London
                            If you want to receive a dose of European culture, appreciate monuments from all eras, you must visit London. It is an important emblem of the continent. The architecture of its churches and museums are complemented by natural spaces visible to the public, with avant-garde details and respect for always maintaining its indisputable cosmopolitanism. This makes the city the most visited in the world. Obviously, after the cities of Hong Kong and Singapore.
                        </p>

                    </div>
                    <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small className="text-gray-500"> Marcelo - 15/03/2022</small>
                    </div>
                </div>
            </div>



            <div className='w-full 00 bg-orange-400 flex justify-center items-center'>
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
        </div>
    );
};

export default AmericaAndEurope;


/*           <div class=" ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZEAbcYchcHz-lu_RsYLHYNZB9KeGfapDrg&usqp=CAU" class="w-full h-40 object-cover " />
                    <div class="bg-gray-100 min-h-5/6  flex flex-col justify-between">
                        <h5 class="text-xl font-bold">Malta</h5>
            n                          <ul>
                                <li>
                                    Basic information with which to take a trip to Malta
                                </li>

                                I will be quick and concise, clear sentences with the most important information for a trip to Malta.
                                <li>
                                    The Republic of Malta is a European Union country, so if you have an EU SIM card, you can browse and call as if you were in your own country.
                                </li>
                                <li>
                                    In Malta, said by a taxi driver, "he who speaks only two languages ​​is either stupid or lazy." In Malta they speak English, Maltese, Italian and, depending on the person, French, Portuguese and Spanish.
                                </li>
                                <li>
                                    The islands are quite small. The largest, Malta, can be traveled from end to end by car in just one hour.
                                    In Malta they drive on the left.
                                </li>
                                <li>
                                    The distances are quite short but public transport still takes longer than expected to make a seemingly short route.
                                    Malta is a very safe place.
                                </li>
                                <li>
                                    It is located in a strategic location in the middle of the Mediterranean that makes it a very interesting destination on a historical level.
                                </li>

                                <li>
                                    The island of Malta is the largest of the entire archipelago, although this information is not very relevant either since it is almost three times smaller than the Community of Madrid (which is not particularly large).
                                    What is relevant, on the contrary, is the fact that the population density is the highest of all the countries in the European Union.


                                </li>






                            </ul>

                    </div>
                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div> */