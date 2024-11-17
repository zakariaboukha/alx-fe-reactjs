import { create } from 'zustand';

import React, { useState } from 'react'; // Import React and useState for managing form state
import useRecipeStore from '../recipeStore'; // Import Zustand store

const AddRecipeForm = () => {
  // State variables for form inputs
  const [title, setTitle] = useState(''); // State for the title input
  const [description, setDescription] = useState(''); // State for the description input

  // Zustand action to add a new recipe
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (title.trim() && description.trim()) { // Validate that both fields are non-empty
      addRecipe({ id: Date.now(), title, description }); // Add recipe with a unique ID
      setTitle(''); // Clear title input
      setDescription(''); // Clear description input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      {/* Description textarea */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
      ></textarea>
      {/* Submit button */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
