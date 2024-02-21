<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');
</script>

<template>
  <div
    v-if="recipe"
    class="max-w-md bg-white mx-auto max-h-dvh overflow-hidden text-black"
  >
    <pre class="font-mono">
      {{ recipe }}
    </pre>
  </div>
</template>
