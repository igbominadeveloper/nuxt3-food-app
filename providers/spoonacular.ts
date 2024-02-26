import { joinURL } from 'ufo';
import type { ProviderGetImage } from '@nuxt/image';
import { createOperationsGenerator } from '#image';
import { SpoonacularImage } from '~/utils/enums';

const operationsGenerator = createOperationsGenerator();

const imageBasePathMap = new Map([
  [SpoonacularImage.Ingredient, 'cdn/ingredients_'],
  [SpoonacularImage.Equipment, 'cdn/equipment_'],
  [SpoonacularImage.Recipe, 'recipeImages'],
  [SpoonacularImage.GroceryProduct, 'productImages'],
  [SpoonacularImage.MenuItem, '/file/wximages'],
]);

export const getImage: ProviderGetImage = (
  src,
  {
    modifiers = {},
    baseURL,
    preset = SpoonacularImage.Ingredient,
    id = '',
    size = '500x500',
    type = '',
  } = {}
) => {
  if (!baseURL) {
    // also support runtime config
    baseURL = useRuntimeConfig().public.spoonacularUrl;
  }

  const operations = operationsGenerator(modifiers);

  const fullSrcURL = computed(() => {
    const spoonacularImageBasePath = imageBasePathMap.get(
      preset as SpoonacularImage
    );

    if (
      preset === SpoonacularImage.Ingredient ||
      preset === SpoonacularImage.Equipment
    ) {
      return `${spoonacularImageBasePath}${size}/${src}`;
    }

    return `${spoonacularImageBasePath}/${id}-${size ?? '312x231'}.${type}`;
  });

  return {
    url: joinURL(
      baseURL,
      fullSrcURL.value + (operations ? '?' + operations : '')
    ),
  };
};
