<script setup lang="ts">
import { type Ingredient as IngredientType } from '~/schema/recipe';

defineProps<{
  ingredients: IngredientType[];
}>();
</script>

<template>
  <section-row class="px-2">
    <row
      direction="row"
      class="flex text-gray-500 items-center justify-between my-0"
    >
      <h1>Ingredients ({{ ingredients.length }} items)</h1>
      <p>Quantity</p>
    </row>

    <div class="flex flex-col gap-4 mt-2">
      <ingredient
        v-for="(ingredient, index) in ingredients"
        :ingredient="ingredient"
        :number="index + 1"
      />
    </div>
  </section-row>
</template>
