<script setup lang="ts">
import type { Ingredient } from '~/schema/recipe';
import { Measure, InjectKey } from '~/utils/enums';

defineProps<{
  ingredient: Ingredient;
  number: number;
}>();

const measure = inject<Measure>(InjectKey.Measure) ?? Measure.US;
</script>

<template>
  <row direction="row" :title="ingredient.originalName" class="justify-between">
    <p class="max-w-[30ch] group flex gap-1">
      {{ number }}.
      <UPopover mode="click" :popper="{ placement: 'top-start' }">
        <template #panel>
          <ingredient-details :ingredient="ingredient" :measure="measure" />
        </template>
        <span class="group-hover:underline cursor-pointer">
          {{ ingredient.originalName }}
        </span>
      </UPopover>
    </p>
    <p>
      {{ ingredient.measures[measure].amount }}
      {{ ingredient.measures[measure].unitLong }}
    </p>
  </row>
</template>
