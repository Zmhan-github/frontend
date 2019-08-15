// import "core-js/stable";
import "regenerator-runtime/runtime";


import axios from 'axios'



const getRecipes = async (search_query) => {
  const API_KEY = 'c692f77613b812fc1fe2c993a1cd1140'
  const res = await axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${search_query}`)

  console.log(res.data.recipes)
}


getRecipes('pizza')