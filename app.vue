<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');
</script>

<template>
  <div v-if="recipe">
    <pre>
      {{ recipe }}
    </pre>
  </div>
</template>
