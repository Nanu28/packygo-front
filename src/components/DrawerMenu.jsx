import React from 'react';
import perfil from '../../public/image/perfilFem.png';
import Display from '../components/Display.jsx';

const DrawerMenu = ({ isOpen, onClose }) => (
    <div className={`bg-gradient-to-r from-yellow-200 to-cyan-400 w-full h-full md:w-1/3 absolute top-0 left-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col items-start pl-4'>

            <div className='w-full flex items-center justify-between '>
                <img src={perfil} alt="profile-img" className='w-20 rounded-full mb-4 m-2' />

                <button onClick={onClose} className='text-grey-400 bg-grey-200 p-1 mb-3 w-48 rounded-md font-bold text-2xl '>
                    <span className="border border-black rounded-full px-2 py-1 m-7">
                        X
                    </span>
                </button>

            </div>


            <div className='flex flex-col w-full justify-center items-center'>
                <Display />

            </div>

        </div>
    </div>
);

export default DrawerMenu;
