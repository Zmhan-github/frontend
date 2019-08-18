export const elements = {
  searchForm: document.querySelector("#search-form"),
  searchInput: document.querySelector("#search-input"),
  searchResWrapper: document.querySelector("#results-wrapper"),
  searchResList: document.querySelector("#results")
};

export const elementStrings = {
  loader: "spinner-border"
};

export const renderLoader = parent => {
  const loader = `
  <div class="${elementStrings.loader}" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  `;

  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
