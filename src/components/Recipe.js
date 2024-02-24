import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const { id, image, title } = recipe;

  const navigate = useNavigate();
  const navigateToRecipe = (recipeId) => navigate(`/recipes/${recipeId}`);

  return (
    <article
      onClick={() => navigateToRecipe(id)}
      key={id}
      className='rounded-sm p-3 border-[.4px] border-dashed border-primary bg-secondary cursor-pointer'>
      <img src={image} alt={title} loading='lazy' className='rounded-sm' />
      <div className='mt-2'>
        <h3 className='overflow-hidden text-ellipsis whitespace-nowrap text-primary'>
          {title}
        </h3>
      </div>
    </article>
  );
};

export default Recipe;
