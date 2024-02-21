import * as v from 'valibot';
import { Recipe, recipeSchema } from '~/schema/recipe';

export default defineCachedFunction(
  async () => {
    console.log('Running the function now');
    const { recipes } = await $fetch<{ recipes: Recipe[] }>(
      'https://api.spoonacular.com/recipes/random',
      {
        query: {
          limitLicense: true,
          number: 100,
          apiKey: useRuntimeConfig().spoonacular.apiKey,
        },
      }
    );

    try {
      return v.parse(v.array(recipeSchema), recipes);
    } catch (error) {
      // console.log(error.issues.map((issue) => issue.path));
    }
  },
  {
    maxAge: 60 * 60 * 24 * 1000,
    swr: true,
    name: 'recipes',
    getKey: () => 'recipes',
    shouldBypassCache: () => false,
    transform: (receipes) =>
      receipes.value?.at(Math.round(Math.random() * receipes.value?.length)),
  }
);
