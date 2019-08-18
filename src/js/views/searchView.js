import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
  const markup = `
  <div class="card" data-id="${recipe.recipe_id}">
    <img src="${recipe.image_url}" class="card-img-top" alt="${recipe.title}">
    <div class="card-body">
      <h5 class="card-title">${recipe.title}</h5>
      <p class="card-text">${recipe.publisher}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>`;

  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
