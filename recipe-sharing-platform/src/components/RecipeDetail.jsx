import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams(); // Extract the recipe ID from the URL
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
