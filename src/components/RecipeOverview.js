import React from 'react';

const RecipeOverview = ({ recipe }) => (
  <article className='flex flex-col md:flex-row gap-6 bg-secondary p-8 border-[.6px] border-dashed border-primary rounded-md'>
    <div>
      <h3 className='text-primary font-semibold text-xl text-center'>
        {recipe?.title}
      </h3>
      <div
        className='mt-12'
        dangerouslySetInnerHTML={{ __html: recipe?.summary }}
      />
    </div>
  </article>
);

export default RecipeOverview;
