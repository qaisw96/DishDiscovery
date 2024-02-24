import React from 'react';

const RecipesSkeleton = ({ count }) => {
  const recipes = [...Array(count).keys()];

  return (
    <article
      className={`animate-pulse container mt-2 md:mt-7 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
      {recipes.map((id) => (
        <div
          key={id}
          className='flex items-center bg-gray-100 max-h-[200px] min-h-[200px] md:min-h-[250px] p-1 md:p-1 md:px-8'></div>
      ))}
    </article>
  );
};

export default RecipesSkeleton;
