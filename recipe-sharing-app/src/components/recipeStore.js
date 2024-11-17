import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites
      : [...state.favorites, recipeId],
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock recommendations based on favorites (for demonstration purposes)
    const recommended = state.recipes.filter(
      recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
