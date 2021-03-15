import { http } from "./config";

export default {
  listRandom: (page = 1) => {
    return http.get(`recipes/random?page=${page}`);
  },
  userRecipes: (username) => {
    return http.get(`/recipes/${username}`);
  },
  userRecipe: (username, recipeName) => {
    return http.get(`/recipes/${username}/${recipeName}`);
  },
  createRecipe: ({
    id,
    authorId,
    authorUsername,
    authorName,
    name,
    preparationTime,
    category,
    ingredients,
    servings,
    difficulty,
    howPrepare,
    demoImages,
    additionalInformation,
    token,
  }) =>
    http.post(
      "recipes",
      {
        id,
        authorId,
        authorUsername,
        authorName,
        name,
        preparationTime,
        category,
        ingredients,
        servings,
        difficulty,
        howPrepare,
        demoImages,
        additionalInformation,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    ),
};
