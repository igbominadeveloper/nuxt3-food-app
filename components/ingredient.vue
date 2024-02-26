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
    <p class="max-w-[30ch] group">
      {{ number }}.
      <span class="group-hover:underline cursor-pointer">
        {{ ingredient.originalName }}
      </span>
    </p>
    <p>
      {{ ingredient.measures[measure].amount }}
      {{ ingredient.measures[measure].unitLong }}
    </p>
  </row>
</template>
