import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carrousel.jsx'

const About = () => {
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
                
                <p   onClick={()=>navigate('/blog')}className='font-semibold cursor-pointer' >/Blog</p>
                <p className=''>/Tips about luggage</p>
            </div>

            <div className='w-full h-96 flex justify-center items-center'>

                <button className='bg-red-600 p-12 rounded-full'>TRIVIA</button>

            </div>

            
        </div>
    )
}

export default About