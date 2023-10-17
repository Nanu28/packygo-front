import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carrousel.jsx';

const America = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-sky-50'>
            <div className="hidden md:block">
                <Carousel autoSlide={true} autoSlideInterval={5000}>
                    <img className='w-full' src="../public/image/carouselHome1.png" alt="carousel_banner1" />
                    <img className='w-full' src="../public/image/carouselHome2.png" alt="carousel_banner2" />
                    <img className='w-full' src="../public/image/carouselHome3.png" alt="carousel_banner3" />
                </Carousel>
            </div>

            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer' >/Blog</p>
                <p className=''>/Latin America and Europe</p>
            </div>
           

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>


                <div class="bg-red-200 shadow-md h-4/5 ">
                    <img className='h-56 object-cover w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof626K2P5_Gq6i7HG3ic0NgFnlfrbdVgOFA&usqp=CAU" class="w-full h-40 object-cover " />
                    <div class="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 class="text-xl font-bold">Malta</h5>
                        <p className="text-gray-600 min-h-4/5">
                            Basic information with which to take a trip to Malta
                            I will be quick and concise, clear sentences with the most important information for a trip to Malta.
                            The Republic of Malta is a European Union country, so if you have an EU SIM card, you can browse and call as if you were in your own country.
                            In Malta, said by a taxi driver, "he who speaks only two languages ​​is either stupid or lazy." In Malta they speak English, Maltese, Italian and, depending on the person, French, Portuguese and Spanish.
                            The islands are quite small. The largest, Malta, can be traveled from end to end by car in just one hour.
                            In Malta they drive on the left.
                            The distances are quite short but public transport still takes longer than expected to make a seemingly short route.
                            Malta is a very safe place.
                            It is located in a strategic location in the middle of the Mediterranean that makes it a very interesting destination on a historical level
                            The island of Malta is the largest of the entire archipelago, although this information is not very relevant either since it is almost three times smaller than the Community of Madrid (which is not particularly large).
                            What is relevant, on the contrary, is the fact that the population density is the highest of all the countries in the European Union.

                        </p>

                    </div>
                    <div class="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small class="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>


                <div class="bg-red-200 shadow-md h-4/5 ">
                  
                    <img className='h-56 object-cover w-full' src="https://eaqxr36k8gu.exactdn.com/wp-content/uploads/2013/07/que-ver-y-hacer-en-paris-torre-eiffel.jpg?strip=all&lossy=1&resize=1000%2C621&ssl=1" />
                    <div class="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 class="text-xl font-bold">Francia</h5>
                        <p className="text-gray-600 min-h-4/5">Fue construida por Gustave Eiffel para conmemorar el centenario de la Revolución Francesa y su inauguración coincidió con la Exposición Mundial de París de 1889. Aunque en sus inicios no fue del agrado de todos los parisino, e incluso llegó a tener carácter provisional (en teoría se desarmaría en el año 1900), poco a poco la gente se acostumbró a la apodada “La Dame de Fer” (la Dama de Hierro) hasta convertirse en el mayor símbolo de París.

                            Tiene una altura de 324 metros y se dispone en tres niveles, accesibles con diferentes tickets (dependiendo del nivel que quieras visitar y si usas o no el ascensor el precio cambia). Pero ya que estás, te recomendamos subir hasta arriba del todo, a 276 metros de altura, para disfrutar de unas maravillosas vistas de París y de algunas de sus principales atracciones turísticas (de las que te hablamos en este post).

                            Si lo que quieres es disfrutar de la torre pero sin subir a ella, el mejor lugar para contemplarla es desde los Jardines de Trocadero, al otro lado del río Sena.

                            Precio: escaleras 2ª planta: 10,50€ / ascensor 2ª planta: 16,70€ / escaleras 2ª planta + ascensor a cima: 19,90€ / ascensor a cima: 26,10€.
                            Reserva la entrada con adelanto en su web oficial.</p>
                    </div>
                    <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                        <small className="text-gray-500">Maria - 25/05/2019</small>
                    </div>
                </div>


                <div className="bg-red-200 shado h-4/5 w-md">
                    <img classNameName='h-56 object-cover w-full' src="https://www.guiaenturismo.com/wp-content/uploads/2018/01/Las-Tendencias-Turisticas-Populares-en-Europa.jpg" className="w-full h-40 object-cover " />
                    <div className="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 className="text-xl font-bold">Lisbon</h5>
                        <p className="text-gray-600 min-h-4/5">
                            Lisbon
                            The feeling of nostalgia runs through the streets of the city that always seems very far away. Lisbon is that city that seems to belong to another era. It is marked by very narrow roads, the viewpoints of its sky and its ocean. With a light that allows you to take a momentary walk into each person's past just by resting your eyes on its cobblestone floors and its old-style houses.
                            Edinburgh
                            Every year, Edinburgh is filled with more than hundreds of millions of tourists in search of cultural shows and nightlife fun. The Scottish capital always offers good spirits, and the desires and/or longing for colossal fun at night with the moon at its highest level. This place is an attractive space of culture culminating in the summer dates in the midst of the most beautiful celebration and celebration of the International Festival in honor of the artists and stage shows.
                            London
                            If you want to receive a dose of European culture, appreciate monuments from all eras, you must visit London. It is an important emblem of the continent. The architecture of its churches and museums are complemented by natural spaces visible to the public, with avant-garde details and respect for always maintaining its indisputable cosmopolitanism. This makes the city the most visited in the world. Obviously, after the cities of Hong Kong and Singapore.
                        </p>

                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Maria - 25/05/2019</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default America;


/*           <div class="bg-red-200 shadow-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZEAbcYchcHz-lu_RsYLHYNZB9KeGfapDrg&usqp=CAU" class="w-full h-40 object-cover " />
                    <div class="bg-gray-100 min-h-[35%] p-4 flex flex-col justify-between">
                        <h5 class="text-xl font-bold">Malta</h5>
            
                            <ul>
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