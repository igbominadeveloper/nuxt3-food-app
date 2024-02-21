import * as v from 'valibot';

export const recipeSchema = v.object({
  vegetarian: v.boolean(),
  vegan: v.boolean(),
  glutenFree: v.boolean(),
  dairyFree: v.boolean(),
  veryHealthy: v.boolean(),
  cheap: v.boolean(),
  veryPopular: v.boolean(),
  sustainable: v.boolean(),
  lowFodmap: v.boolean(),
  weightWatcherSmartPoints: v.number(),
  gaps: v.string(),
  preparationMinutes: v.number(),
  cookingMinutes: v.number(),
  aggregateLikes: v.number(),
  healthScore: v.number(),
  creditsText: v.string(),
  sourceName: v.string(),
  pricePerServing: v.number(),
  extendedIngredients: v.array(
    v.object({
      id: v.number(),
      aisle: v.string(),
      image: v.nullable(v.string()),
      consistency: v.string(),
      name: v.string(),
      nameClean: v.nullable(v.string()),
      original: v.string(),
      originalName: v.string(),
      amount: v.number(),
      unit: v.string(),
      meta: v.array(v.string()), // You might want to define a specific type for meta if possible
      measures: v.object({
        us: v.object({
          amount: v.number(),
          unitShort: v.string(),
          unitLong: v.string(),
        }),
        metric: v.object({
          amount: v.number(),
          unitShort: v.string(),
          unitLong: v.string(),
        }),
      }),
    })
  ), // You need to define the type for extendedIngredients
  id: v.number(),
  title: v.string(),
  readyInMinutes: v.number(),
  servings: v.number(),
  sourceUrl: v.nullable(v.string()),
  image: v.optional(v.string()),
  imageType: v.optional(v.string()),
  summary: v.string(),
  cuisines: v.array(v.string()),
  dishTypes: v.array(v.string()),
  diets: v.array(v.string()),
  occasions: v.array(v.string()),
  instructions: v.string(),
  analyzedInstructions: v.array(
    v.object({
      name: v.string(),
      steps: v.array(
        v.object({
          number: v.number(),
          step: v.string(),
          ingredients: v.array(
            v.object({
              id: v.number(),
              name: v.string(),
              localizedName: v.string(),
              image: v.string(),
            })
          ),
          equipment: v.array(
            v.object({
              id: v.number(),
              name: v.string(),
              localizedName: v.string(),
              image: v.string(),
            })
          ), // You might want to define a specific type for equipment if possible
        })
      ),
    })
  ),
  originalId: v.nullable(v.string()),
  spoonacularScore: v.nullable(v.number()),
  spoonacularSourceUrl: v.nullable(v.string()),
});

export type Recipe = v.Output<typeof recipeSchema>;
