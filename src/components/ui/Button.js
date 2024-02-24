import React from 'react';

const Button = ({ children, onClick }) => (
  <button className='container flex justify-center' onClick={onClick}>
    <span className='relative mx-1 shadow-lg py-3 px-24 flex gap-2 items-center bg-primary rounded-md w-full md:w-fit justify-center'>
      <span className='text-md  font-medium text-white tracking-xs'>
        {children}
      </span>
      <div className='absolute w-full h-full border-[1.5px] border-dashed border-primary rounded-md left-2 top-2 z-[-1]'></div>
    </span>
  </button>
);

export default Button;
