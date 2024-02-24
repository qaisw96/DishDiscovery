import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import useGetApi from '../hooks/useGetApi';

import ErrorMessage from '../components/ui/ErrorMessage';
import RecipeOverview from '../components/RecipeOverview';
import RecipeOverviewSkeleton from '../components/ui/RecipeOverviewSkeleton';

const RecipeRoute = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const {
    data: recipe,
    isLoading,
    error,
  } = useGetApi(
    `https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=${process.env.REACT_APP_API_KEY}`
  );

  const renderRecipeOverview = () => {
    if (isLoading) return <RecipeOverviewSkeleton />;

    if (error) return <ErrorMessage message={error} />;

    return <RecipeOverview recipe={recipe} />;
  };

  const goBack = () => navigate(-1);

  return (
    <div className='container md:mt-2'>
      <Helmet>
        <title>{recipe?.title}</title>
      </Helmet>
      <button onClick={goBack}>
        <MdOutlineKeyboardBackspace size={30} />
      </button>
      <h2 className='mt-4 text-xl font-semibold text-primary border-dashed border-b-[1px] border-b-primary w-fit pb-1'>
        Recipe Details
      </h2>
      <div className='mt-4 md:mt-7'>{renderRecipeOverview()}</div>
    </div>
  );
};

export default RecipeRoute;
