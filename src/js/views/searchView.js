import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
  const markup = `
    <div>
      ${recipe.recipe_id}
      ${recipe.image_url}
      ${recipe.title}
      ${recipe.publisher}
    </div>
  `;

  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
