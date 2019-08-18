import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

import "../sass/main.scss";

/**
 * Chunks
 */
const tooltip = () => import(/* webpackChunkName: "tooltip" */ "bootstrap/js/src/tooltip");
const toast = () => import(/* webpackChunkName: "toast" */ "bootstrap/js/src/toast");

toast().then(() => {
  $(".toast").toast("show");
});

tooltip().then(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

/** Global state of the app
 * - Search object
 */
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);
    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchResWrapper);
    // 4) Search for recipes
    await state.search.getResilts();
    // 5) render result on UI
    clearLoader();
    if (state.search.result) {
      searchView.renderResults(state.search.result);
    } else {
      searchView.renderErrors();
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
