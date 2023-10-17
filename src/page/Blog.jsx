import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'
const Blog = () => {
    const navigate = useNavigate();
    return (

        <div className='bg-sky-100'>

            <div className="hidden md:block">
                <Carousel autoSlide={true} autoSlideInterval={5000}>
                    <img className='w-full' src="../public/image/bn1.png" alt="carousel_banner1" />
                    <img className='w-full' src="../public/image/bn2.png" alt="carousel_banner2" />
                    <img className='w-full' src="../public/image/bn3.png" alt="carousel_banner3" />
                </Carousel>
            </div>

            <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-bold w-full flex justify-center p-3'>- Share your experience -</h1>
            </div>


            <div className='w-full h-full flex flex-grow bg-orange-400 items-center justify-center'>

                <div className='bg-orange-400 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../public/image/bn10.png" alt="pet's_accesories_category" />
                        <button onClick={()=>navigate('/america')} className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Latin America <br /> and Europe</button>
                    </div>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../public/image/bn12.png" alt="pet's_accesories_category" />
                        <button  onClick={()=>navigate('/europa')} className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Tips about luggage</button>
                    </div>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../public/image/bn19.png" alt="pet's_accesories_category" />
                        <button  onClick={()=>navigate('/pets')} className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Traveling <br /> with pets</button>
                    </div>

                    <div className="relative inline-block">
                        <img className='opacity-80' src="../public/image/bn11.png" alt="pet's_accesories_category" />
                        <button  onClick={()=>navigate('/about')} className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Trivia</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog