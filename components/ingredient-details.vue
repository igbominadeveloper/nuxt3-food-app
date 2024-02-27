<script setup lang="ts">
import type { Measure } from '#imports';
import type { Ingredient } from '~/schema/recipe';

defineProps<{
  ingredient: Ingredient;
  measure: Measure;
}>();
</script>

<template>
  <article
    class="min-w-80 shadow-md p-2 text-black dark:text-white text-sm flex flex-col"
  >
    <div class="h-60 w-[45%] max-w-40 mx-auto">
      <BaseImage
        provider="spoonacular"
        class="object-contain h-full w-full"
        :image-url="ingredient.image!"
      />
    </div>

    <row direction="row">
      <h3 class="font-normal">Name:</h3>
      <p>{{ ingredient.name }}</p>
    </row>

    <row direction="row">
      <h3 class="font-normal">Measure:</h3>
      <p>
        {{ ingredient.measures[measure].amount }}
        {{ ingredient.measures[measure].unitLong }}
      </p>
    </row>

    <row direction="row">
      <h3 class="font-normal">Aisle:</h3>
      <p>{{ ingredient.aisle }}</p>
    </row>
  </article>
</template>
