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
      class="flex text-gray-500 items-center justify-between my-0 px-2"
    >
      <h1>Ingredients ({{ ingredients.length }} items)</h1>
      <p>Quantity</p>
    </row>

    <div class="flex flex-col px-2 gap-4">
      <row
        direction="row"
        class="justify-between"
        v-for="(ingredient, index) in ingredients"
        :key="ingredient.id"
      >
        <span> {{ index + 1 }}. {{ ingredient.originalName }} </span>
        <span> {{ ingredient.amount }} {{ ingredient.unit }} </span>
      </row>
    </div>

    <pre>
          {{ ingredients }}
      </pre
    >
  </section-row>
</template>
