export const transformRecipes = (data) => {
  return data?.results?.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    };
  });
};
