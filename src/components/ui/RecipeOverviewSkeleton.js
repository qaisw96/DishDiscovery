import React from 'react';

const RecipeOverviewSkeleton = () => (
  <article className='container mt-12 flex gap-5 flex-col items-center bg-secondary p-8 border-[.6px] border-dashed border-primary rounded-md'>
    <div className='w-40 h-12 bg-gray-100' />
    <div className='w-full h-12 bg-gray-100' />
  </article>
);

export default RecipeOverviewSkeleton;
