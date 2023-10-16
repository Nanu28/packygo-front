import React from 'react'
import { Link } from 'react-feather'
Link

const Blog = () => {
    return (
        <div className='w-full h-screen bg-orange-200 flex flex-col items-center justify-center'>

            <div>
                <p className='text-3xl font-medium'>Blog</p>
            </div>
            <div className='flex bg-orange-400 w-full items-center justify-around text-2xl' >
                <p>Tips </p>
                <p>Chile</p>
                <p>Peru</p>
                <p>Colombia</p>
                <p>Bolivia</p>


            </div>



        </div>
    )
}

export default Blog