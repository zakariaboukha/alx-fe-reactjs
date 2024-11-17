
import React from 'react';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './recipeStore';

const App = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Sample recipes for demonstration
  useEffect(() => {
    const initialRecipes = [
      { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
      { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful curry.' },
      { id: 3, title: 'Pancakes', description: 'Fluffy and delicious breakfast pancakes.' },
    ];
    setRecipes(initialRecipes);
    filterRecipes(); // Initial filtering
  }, [setRecipes, filterRecipes]);

  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
};

export default App;
