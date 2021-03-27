import axios from './config'

export default {
	listRandom: (page = 1) => axios.get(`recipes/random?page=${page}`),

	userRecipes: username => axios.get(`/recipes/${username}`),

	userRecipe: (username, recipeName) =>
		axios.get(`/recipes/${username}/${recipeName}`),

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
		token
	}) =>
		axios.post(
			'recipes',
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
				additionalInformation
			},
			{
				headers: {
					authorization: `Bearer ${token}`
				}
			}
		)
}
