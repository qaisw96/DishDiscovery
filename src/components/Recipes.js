import React, { useCallback } from 'react';
import RegularList from 'components/ui/RegularList';
import ListHeader from 'components/ui/ListHeader';
import Recipe from 'components/Recipe';

const Recipes = ({ data }) => {
  const MemoizedRecipeComponent = useCallback(Recipe, []);

  return (
    <RegularList
      containerStyle={`container mt-4 md:mt-7`}
      itemsContainerStyle={`mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      items={data}
      resourceName='recipe'
      itemComponent={MemoizedRecipeComponent}
      listHeader={<ListHeader title='Our Recipes' />}
    />
  );
};

export default Recipes;
