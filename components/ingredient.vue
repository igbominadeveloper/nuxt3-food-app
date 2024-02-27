<script setup lang="ts">
import type { Ingredient } from '~/schema/recipe';

defineProps<{
  ingredient: Ingredient;
  number: number;
}>();

const { measurement } = useMeasurement();
</script>

<template>
  <row direction="row" :title="ingredient.originalName" class="justify-between">
    <p class="max-w-[30ch] group flex gap-1">
      {{ number }}.
      <UPopover mode="click" :popper="{ placement: 'top-start' }">
        <template #panel>
          <ingredient-details :ingredient="ingredient" :measure="measurement" />
        </template>
        <span class="group-hover:underline cursor-pointer">
          {{ ingredient.originalName }}
        </span>
      </UPopover>
    </p>
    <p>
      {{ ingredient.measures[measurement].amount }}
      {{ ingredient.measures[measurement].unitLong }}
    </p>
  </row>
</template>
