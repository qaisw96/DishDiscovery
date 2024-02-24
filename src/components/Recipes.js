import React from 'react';
import RegularList from './ui/RegularList';
import Recipe from './Recipe';

const Recipes = ({ data }) => {
  return (
    <RegularList
      containerStyle={`container mt-4 md:mt-7`}
      itemsContainerStyle={`mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      items={data}
      resourceName='recipe'
      itemComponent={Recipe}
      listHeader={
        <h2 className='text-xl font-semibold text-primary border-dashed border-b-[1px] border-b-primary w-fit pb-1'>
          Our Recipes
        </h2>
      }
    />
  );
};

export default Recipes;
