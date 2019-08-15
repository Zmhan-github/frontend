import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResilts() {
    const API_KEY = "c692f77613b812fc1fe2c993a1cd1140";
    try {
      const res = await axios.get(
        `https://www.food2fork.com/api/search?key=${API_KEY}&q=${this.query}`
      );
      this.result = res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
