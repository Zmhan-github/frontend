import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
};

const limitRecipeTitle = (title, limit = 33) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
        return acc + cur.length;
      }
    }, 0);

    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

const renderRecipe = recipe => {
  const markup = `
  <div class="card" data-id="${recipe.recipe_id}">
    <img src="${recipe.image_url}" class="card-img-top" alt="${recipe.title}">
    <div class="card-body">
      <h5 class="card-title">${limitRecipeTitle(recipe.title)}</h5>
      <p class="card-text">${recipe.publisher}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>`;

  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderErrors = () => {
  const markup = `
  <div class="card alert alert-danger" role="alert">
    <div class="card-body">
    Loading fail...:(
    </div>
  </div>`;

  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
