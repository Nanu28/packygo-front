import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
const TipsAboutLuggage = () => {

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

                <p onClick={() => navigate('/blog')} className='font-semibold cursor-pointer'>/Blog</p>
                <p className=''>/Tips about luggage</p>
            </div>


            <div>
                <div className='bg-orange-400 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://www.mobiliariocomercialmaniquies.com/blog/wp-content/uploads/2022/06/pexels-ketut-subiyanto-4245905.jpg" />
                        </div>

                        <div class="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 class="text-xl font-bold">Choose the right suitcase</h5>
                            <p className="text-gray-600 h-96  my-4">
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
                            <small class="text-gray-500">Amanda - 21/09/2023</small>
                        </div>
                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://www.wradio.com.co/resizer/0tNr79x1rNv3_CxHxjjFQdfer7Q=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/C2W34A24OJHANF3BT5V3IM3RWU.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 class="text-xl font-bold">Make a travel list</h5>
                            <p className="text-gray-600 h-96 my-4">
                                Designing a travel list will be one of the most important things to do when packing your luggage, since it will help you to organize your luggage efficiently and will allow you to make the most of all the space available.
                                will help us to organize ourselves in an efficient way and will allow us to take advantage of all the space to the maximum.

                                It is a perfect idea to check everything we are going to keep and make sure we don't forget anything at all;
                                basically it is a checklist of essential items.

                                Also, if you are a frequent traveler, the list will help you realize if everything you wrote down you used it
                                or simply it was not necessary to take it, this way, the next time you pack your suitcase you can save even more space.
                                </p>
                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Peter - 25/02/2023</small>
                        </div>


                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src=" https://f.fcdn.app/imgs/46b007/mispetates.com/mipeuy/18d2/original/catalogo/OHR.LH354-17-5/460x460/set-organizador-de-valija-con-6-sobres-azul.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Use a compressor organizer</h5>
                            <p className="text-gray-600 h-96  my-4">
                                There are many types of organizers, but the best known and most practical are the packing cube compressor,
                                ideal for saving space in your suitcase.

                                They are bags that can come in different sizes, fabrics and colors, excellent to have our suitcase tidy and reduce
                                tidy suitcase and reduce the volume up to 50% less.

                                It is very easy to assemble: we roll the clothes, we place them inside the packing cube
                                (we should not try to put more clothes), we close it and it will be compressed, and finally, it has another zipper that closes it,
                                It has another zipper that will compress even more when we close it. Excellent, don't you think?
                            </p>


                        </div>

                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Héctor - 16/06/2019</small>
                        </div>
                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://h7w7b8g4.stackpathcdn.com/wp-content/uploads/2018/09/Acessorios-de-viagem.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Travel Accessories</h5>
                            <p className="text-gray-600 h-96 my-4">
                                Indispensable and useful items for traveling
                                This article surprises many people, because there are MANY travel accessories that are useful and very important for
                                travel to Orlando, Miami or any other place abroad. Many times we don't realize it and we travel without
                                several of them. They make our lives much easier and avoid a lot of headaches. We are going to show you
                                here very useful and excellent articles for you to go and see what you already have and what you will have to buy.

                            </p>

                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Laura - 17/07/2019</small>
                        </div>

                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://h7w7b8g4.stackpathcdn.com/wp-content/uploads/2018/09/Pochete-Doleira-Dinheiro-Viagem-Acessorio.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Waist pack</h5>
                            <p className="text-gray-600 h-96  my-4">
                            Bum Bag / Dollar Holder / Money Wallet
                                This is a very useful and important travel accessory to avoid theft and loss of documents, money and passport. It is called variously as dole, pochete money and dollar holder. But rest assured that it is not a fanny pack that is left on the outside, which many people refuse to use.

                                This fanny pack is super thin and made of a very comfortable fabric to fit inside your pants. That's why it's so secure and impossible to get stolen or lose your money, passport or cards. It is a travel item that is increasingly used by tourists.</p>


                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Catalina - 23/11/2020</small>
                        </div>

                    </div>

                    <div className=" h-full p-2 w-96 gap-10 ">
                        <div className='w-full h-56 '>
                            <img className='h-56 object-cover w-full rounded-ss-full rounded-t-full ' src="https://h7w7b8g4.stackpathcdn.com/wp-content/uploads/2018/09/carregador-portatil-celular-camera-acessorio-viagem.jpg" />
                        </div>
                        <div className="bg-gray-100 min-h-1/2 p-4 flex flex-col justify-between">
                            <h5 className="text-xl font-bold">Portable charger</h5>
                            <p className="text-gray-600 h-96  my-4">
                            Today the portable charger has become one of the most important travel accessories. The cell phone is an essential
                                essential for traveling, be it for taking pictures, filming, using the Internet, GPS, etc. The same goes for
                                camera. Since people use their cell phones and cameras a lot while traveling, and we are often away for the whole day, the portable
                                day out, the portable charger becomes a great ally so that you don't run the risk of running out of battery and losing your photos of that
                                battery and lose the pictures of that place you are visiting or you have some episode because you can't use your cell phone. They are small and easy to carry in your wallet or pocket.
                            </p>

                        </div>
                        <div className="flex gap-1 text-base pl-6 py-2 items-center bg-sky-100">
                            <small className="text-gray-500">Claudio - 15/09/2021</small>
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

            </div>







        </div>
    )
}


export default TipsAboutLuggage