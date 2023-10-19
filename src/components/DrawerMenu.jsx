import React from 'react';
import Display from '../components/Display.jsx';

const DrawerMenu = ({ isOpen }) => {
  return (
    <div className={`bg-slate-200 rounded-r-full bg-opacity-70 w-full h-full md:w-72 absolute top-18 left-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col items-start'>
        <div className='flex flex-col w-full justify-center items-center'>
          <Display />
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;

