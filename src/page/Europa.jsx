import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
const Europa = () => {

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

            <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer'>/Blog</p>
                <p className=''>/Traveling with pets</p>
            </div>


            <div>
                <div className='bg-orange-400 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02ReqzrsWTCMZbkppGNdmwnXN5yURQdWBFg&usqp=CAU" />
                        </div>

                        <div class="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 class="text-xl font-bold">Malta</h5>
                            <p className="text-gray-600 h-96">
                                1. Choose the right suitcase
                                It is essential that we choose the suitcase that is most convenient and comfortable for our trip,
                                since the amount of storage space will depend on it.
                                For the selection we must take into account the specifications of the airline with which we will travel
                                regarding luggage:

                                Handheld: standard measurements are 25 x 35 x 55 cm;
                                For wine cellars: they can weigh 23 kg and up to 158 linear cm (length, width and height);
                                Pets: traveling with our pet is possible; The maximum weight of the soft kennel is 6 kg, and if it is for a
                                winery, the kennel must be rigid and weigh a maximum of 45 kg.
                            </p>

                        </div>
                        <div class="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small class="text-gray-500">Maria - 25/05/2019</small>
                        </div>
                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://www.wradio.com.co/resizer/0tNr79x1rNv3_CxHxjjFQdfer7Q=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/C2W34A24OJHANF3BT5V3IM3RWU.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 class="text-xl font-bold">Francia</h5>
                            <p className="text-gray-600 h-96">
                                2. Haz una lista de viaje
                                Diseñar una lista de viaje será una de las cosas más importante del armado de nuestro equipaje puesto que nos
                                ayudará a organizarnos de manera eficaz y permitirá aprovechar todo el espacio al máximo.

                                Es una idea perfecta para ir chequeando todo lo que vayamos guardando y que no se nos olvide absolutamente nada;
                                básicamente se trata de un checklist de artículos imprescindibles.

                                Además, si eres un viajero frecuente, la lista te ayudará a darte cuenta si todo lo que anotaste lo utilizaste
                                o simplemente no era necesario llevarlo, de esta forma, en el próximo armado de tu maleta podrás ahorrar aún más
                                espacio.</p>
                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Maria - 25/05/2019</small>
                        </div>


                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src=" https://f.fcdn.app/imgs/46b007/mispetates.com/mipeuy/18d2/original/catalogo/OHR.LH354-17-5/460x460/set-organizador-de-valija-con-6-sobres-azul.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Cama compartida</h5>
                            <p className="text-gray-600 h-96">
                                3. Usa un organizador compresor
                                Existen muchos tipos de organizadores, pero los más conocidos y prácticos son los packing cube compresor,
                                ideales para ahorrar espacio en tu maleta.

                                Son bolsas que pueden venir de diferentes tamaños, telas y colores, excelente para tener nuestra
                                maleta ordenada y reducir el volumen hasta un 50 % menos.

                                Es muy sencillo de armar: enrollamos las prendas, las acomodamos dentro del packing cube
                                (no debemos intentar poner prendas de más), cerramos y quedará comprimido, y por último,
                                tiene otro cierre que al cerrarla se comprimirá aún más. ¡Excelente! ¿No crees?
                            </p>


                        </div>

                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Maria - 25/05/2019</small>
                        </div>
                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://h7w7b8g4.stackpathcdn.com/wp-content/uploads/2018/09/Acessorios-de-viagem.jpg" />
                       </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Cama compartida</h5>
                            <p className="text-gray-600 h-96">
                                Elementos indispensables y útiles para viajar
                                Este articulo sorprende a mucha gente, pues hay MUCHOS accesorios de viaje que son útiles y muy importantes para
                                viajar a Orlando, Miami o a cualquier otro lugar del exterior. Muchas veces no nos damos cuenta y viajamos sin
                                varios de ellos. Ellos facilitan demasiado nuestras vidas y evitan muchos dolores de cabeza. Vamos a mostrarte
                                aquí artículos muy útiles y excelentes para que vayas a ver lo que ya tienes y lo que tendrás que comprar.

                            </p>

                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Maria - 25/05/2019</small>
                        </div>

                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://h7w7b8g4.stackpathcdn.com/wp-content/uploads/2018/09/Pochete-Doleira-Dinheiro-Viagem-Acessorio.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Cama compartida</h5>
                            <p className="text-gray-600 h-96">
                                Riñonera / Porta Dolar / Pochete Money
                                Este es un accesorio de viaje muy útil e importante para evitar robos y la pérdida de documentos, dinero y pasaporte. Se le llama de varias maneras como dole, pochete money y porta dólar. Pero quédate tranquilo ya que no es uma riñonera que queda por fuera, que mucha gente se niega a usar.

                                Esta riñonera es super fina y hecha de uma tela muy cómoda para que sues por dentro de los pantalones. Por eso es tan seguro y es imposible que te roben o que perdas tu dinero, pasaporte o tarjetas. Es un artículo de viaje que cada vez es más utilizado por los turistas. </p>


                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Maria - 25/05/2019</small>
                        </div>

                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                        <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://h7w7b8g4.stackpathcdn.com/wp-content/uploads/2018/09/carregador-portatil-celular-camera-acessorio-viagem.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Cama compartida</h5>
                            <p className="text-gray-600 h-96">
                                Hoy el cargador portátil se ha convertido en uno de los accesorios de viaje más importantes. El celular es un
                                elenento esencial para viajar, ya sea para tomar fotos, filmar, utilizar Internet, GPS, etc. Lo mismo vale para
                                la cámara de fotos. Como en el viaje la gente usa mucho el celular y la cámara, y muchas veces nos quedamos todo
                                el día fuera, el cargador portátil se convierte en un gran aliado para que no corras el riesgo de quedarte sin
                                batería y perder las fotos de aquel lugar que estás conociendo o tenes algún episodio por no poder usar el celular. Son pequeños y fáciles de llevar en la cartera o en el bolsillo. Cargan tanto el celular como las cámaras de fotos y hasta la GoPro.
                            </p>

                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Maria - 25/05/2019</small>
                        </div>

                    </div>

                </div>
                <div className='w-full bg-orange-300 flex justify-center items-center'>
            <form className="mt-8 p-3 w-full md:w-1/2 bg-orange-400 rounded-xl m-3">
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







        </div>
    )
}


export default Europa