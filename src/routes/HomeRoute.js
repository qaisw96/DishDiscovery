import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useGetApi from '../hooks/useGetApi';
import { transformRecipes } from '../util/transformation/recipes';

import Button from '../components/ui/Button';
import ErrorMessage from '../components/ui/ErrorMessage';
import Recipes from '../components/Recipes';
import RecipesSkeleton from '../components/ui/RecipesSkeleton';

const INITIAL_RECIPES = 12;

const HomeRoute = () => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search') || '';

  const [recipesNumbers, setRecipesNumbers] = useState(INITIAL_RECIPES);

  const endpointUrl = `${process.env.REACT_APP_BASE_URL}?apiKey=1d5cb95a3155400dbbbb0a8f05da0f4c&number=${recipesNumbers}&query=${searchParam}`;
  const { data, isLoading, error } = useGetApi(endpointUrl);
  const totalResults = data?.totalResults;

  const recipes = transformRecipes(data);

  const handleLoadMore = () => setRecipesNumbers((prev) => prev + 10);

  const renderRecipes = () => {
    if (isLoading && recipesNumbers <= INITIAL_RECIPES)
      return <RecipesSkeleton count={8} />;

    if (error) return <ErrorMessage message={error} />;

    return <Recipes data={recipes} />;
  };

  const isShowLoadMore = recipes?.length > 0 && totalResults > recipes?.length;

  return (
    <div>
      <Helmet>
        <title>DishDiscovery | Home</title>
      </Helmet>
      {renderRecipes()}
      {isShowLoadMore && (
        <div className='mt-10 mb-10 md:mt-16 md:mb-16'>
          <Button onClick={handleLoadMore}>
            {isLoading ? 'Loading ...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomeRoute;
