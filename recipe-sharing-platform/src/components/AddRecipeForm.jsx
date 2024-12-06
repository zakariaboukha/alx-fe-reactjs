import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({}); // Track errors

  // Validation Function
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    else if (formData.ingredients.split(",").length < 2)
      newErrors.ingredients = "Please add at least two ingredients.";
    if (!formData.steps.trim()) newErrors.steps = "Steps are required.";

    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Explicit use of `target.value`
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // Perform validation
    setErrors(validationErrors); // Set validation errors

    // Proceed only if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("New Recipe Submitted:", formData);

      // Clear form after submission
      setFormData({
        title: "",
        ingredients: "",
        steps: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4 md:flex md:items-center">
          <label
            className="block text-gray-700 mb-2 md:mb-0 md:w-1/4"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange} // Explicitly uses `target.value` via `handleChange`
            className="w-full md:w-3/4 p-2 border rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4 md:flex md:items-center">
          <label
            className="block text-gray-700 mb-2 md:mb-0 md:w-1/4"
            htmlFor="ingredients"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} // Explicitly uses `target.value` via `handleChange`
            className="w-full md:w-3/4 p-2 border rounded"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4 md:flex md:items-center">
          <label
            className="block text-gray-700 mb-2 md:mb-0 md:w-1/4"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange} // Explicitly uses `target.value` via `handleChange`
            className="w-full md:w-3/4 p-2 border rounded"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/4"></div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 md:w-3/4"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
