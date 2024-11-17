import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term); // Update search term in store
    filterRecipes();     // Trigger filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
      style={{ margin: '20px', padding: '10px', width: '300px' }}
    />
  );
};

export default SearchBar;
