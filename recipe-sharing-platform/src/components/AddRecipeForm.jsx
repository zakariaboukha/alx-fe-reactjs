import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Access `target.value` here
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { title, ingredients, steps } = formData;

    // Validate fields
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    console.log("New Recipe Submitted:", formData);

    // Clear the form and error message after submission
    setError("");
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title} // Bind state to input
            onChange={handleChange} // Handle change events
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients} // Bind state to input
            onChange={handleChange} // Handle change events
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps} // Bind state to input
            onChange={handleChange} // Handle change events
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
