import React from 'react';
import { Link } from 'react-router-dom';

const ButtonNav = ({ to, title }) => {
  return (
    <Link to={to} className='hover:bg-yellow-400 text-grey-400 bg-grey-200 p-1 mb-3 w-48 rounded-md font-semibold text-2xl'>
      {title}
    </Link>
 );
};

export default ButtonNav;
