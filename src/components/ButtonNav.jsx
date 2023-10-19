import React from 'react';
import { Link } from 'react-router-dom';

const ButtonNav = ({ to, title, onClick }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link to={to} className='text-grey-400 bg-grey-200 p-1 w-full rounded-md font-semibold text-lg' onClick={handleOnClick}>
      {title}
    </Link>
  );
};

export default ButtonNav;
