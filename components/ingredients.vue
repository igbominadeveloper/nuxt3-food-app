<script setup lang="ts">
import { type Ingredient } from '~/schema/recipe';
import { Measure } from '~/utils/enums';

withDefaults(
  defineProps<{
    ingredients: Ingredient[];
    measure?: Measure;
  }>(),
  {
    measure: Measure.US,
  }
);
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
      <row
        direction="row"
        :title="ingredient.originalName"
        class="justify-between"
        v-for="(ingredient, index) in ingredients"
        :key="ingredient.id"
      >
        <span class="max-w-[30ch]">
          {{ index + 1 }}. {{ ingredient.originalName }}
        </span>
        <span
          >{{ ingredient.measures[measure].amount }}
          {{ ingredient.measures[measure].unitLong }}</span
        >
      </row>
    </div>

    <pre>
          {{ ingredients }}
      </pre
    >
  </section-row>
</template>
