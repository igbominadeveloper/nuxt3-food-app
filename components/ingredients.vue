<script setup lang="ts">
import { type Ingredient } from '~/schema/recipe';

defineProps<{
  ingredients: Ingredient[];
}>();
</script>

<template>
  <section-row>
    <row
      direction="row"
      class="flex text-gray-500 items-center justify-between my-0 px-0"
    >
      <h1>Ingredients ({{ ingredients.length }} items)</h1>
      <p>Quantity</p>
    </row>

    <div class=""></div>

    <pre>
          {{ ingredients }}
      </pre
    >
  </section-row>
</template>
