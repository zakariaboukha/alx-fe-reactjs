import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust the path if necessary

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // Generate recommendations whenever the component loads
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available. Add favorites to get recommendations!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
