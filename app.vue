<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');
</script>

<template>
  <div
    v-if="recipe"
    class="max-w-md w-full bg-white mx-auto max-h-dvh overflow-x-hidden text-black"
  >
    <section
      title="header"
      class="sticky w-full top-0 z-10 bg-white shadow-sm shadow-gray-100"
    >
      <page-header />
    </section>
    <section title="image-banner" class="w-full h-60">
      <base-image
        :image-url="recipe.image"
        alt="image-banner"
        class="object-cover h-full w-full"
      />
    </section>
    <pre class="font-mono">
      {{ recipe }}
    </pre>
  </div>
</template>
