
import React from 'react';

const Valoraciones = ({ title, description, imageSrc }) => {
  return (
    <div className="md:min-w-auto m-5 bg-slate-200 border border-gray-300 rounded-lg shadow">
      <div className="p-5">
        <img src={imageSrc} alt="" className="mb-4 w-full max-h-40 object-cover" />
        <p className="mb-2 text-xl font-bold tracking-wide text-gray-900 ">
          {title}
        </p>
        <p className="mb-3 font-normal text-[18px] text-center text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Valoraciones;
