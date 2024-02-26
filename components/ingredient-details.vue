<script setup lang="ts">
import type { Measure } from '#imports';
import type { Ingredient } from '~/schema/recipe';

defineProps<{
  ingredient: Ingredient;
  measure: Measure;
}>();
</script>

<template>
  <article class="w-48 shadow-md p-2 text-black dark:text-white text-sm">
    <div>
      <h3 class="font-normal">Name</h3>
      <p>{{ ingredient.name }}</p>
    </div>

    <div>
      <NuxtImg provider="spoonacular" :src="ingredient.image!" />
    </div>
    <div>
      <h3 class="font-normal">Name</h3>
      <p>{{ ingredient.name }}</p>
    </div>
  </article>
</template>
