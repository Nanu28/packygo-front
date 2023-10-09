import React from 'react'
import ButtonNav from '../components/ButtonNav.jsx';
//import axios from 'axios';

const Display = () => {
  return (
    <div className='h-1/2 flex flex-col justify-around items-center text-center mt-5'>
      <ButtonNav to="/" title="Home" />
      <ButtonNav to="/" title="Login" />
      <ButtonNav to="/register" title="Register" />
      <ButtonNav to="/store" title="Store" />

    </div>
  )
}

export default Display