import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust the path if necessary

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet. Start adding some!</p>
      )}
    </div>
  );
};

export default FavoritesList;
