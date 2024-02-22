<script setup lang="ts">
import { type Ingredient } from '~/schema/recipe';

defineProps<{
  ingredients: Ingredient[];
}>();
</script>

<template>
  <row>
    <div class="flex text-gray-500 items-center justify-between">
      <h1>Ingredients ({{ ingredients.length }} items)</h1>
      <p>Quantity</p>
    </div>

    <pre>
          {{ ingredients }}
      </pre
    >
  </row>
</template>
