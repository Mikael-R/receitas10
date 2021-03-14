import { http } from "./config";

export default {
  listRandom: (page = 1) => {
    return http.get(`recipes/random?page=${page}`);
  },
  userRecipes: (username) => {
    return http.get(`/recipes/${username}`)
  }
};
