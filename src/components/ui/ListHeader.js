import React from 'react';

const ListHeader = ({ title }) => (
  <h2 className='text-xl font-semibold text-primary border-dashed border-b-[1px] border-b-primary w-fit pb-1'>
    {title}
  </h2>
);

export default ListHeader;
