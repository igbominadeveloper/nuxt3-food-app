<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');
</script>

<template>
  <div
    v-if="recipe"
    class="max-w-md w-full bg-white mx-auto max-h-dvh overflow-x-hidden text-black"
  >
    <!-- Header -->
    <section
      title="header"
      class="sticky w-full top-0 z-10 bg-white shadow-sm shadow-gray-100"
    >
      <page-header />
    </section>

    <!-- Image -->
    <section title="image-banner" class="w-full h-60">
      <base-image
        :image-url="recipe.image"
        alt="image-banner"
        class="object-cover h-full w-full"
      />
    </section>

    <row>
      <h1 class="text-xl font-semibold">
        {{ recipe.title }}
      </h1>
      <span v-html="recipe.summary"> </span>
    </row>

    <!-- Dish types -->
    <row title="Diets" v-if="recipe.diets.length">
      <section class="flex gap-2 flex-wrap">
        <UBadge
          v-for="label in recipe.diets"
          :key="label"
          :label="label"
          variant="outline"
          color="green"
          size="md"
        />
      </section>
    </row>

    <!-- Diets -->
    <row title="Dish types" v-if="recipe.dishTypes.length">
      <section class="flex gap-2 flex-wrap">
        <UBadge
          v-for="label in recipe.dishTypes"
          :key="label"
          :label="label"
          variant="outline"
          color="lightgray"
          size="md"
          class="hover:animate-pulse"
        />
      </section>
    </row>

    <row title="Ready (min.)">
      <div class="flex gap-1 items-center">
        <Icon name="ph:clock" class="size-6 animate-pulse text-green-600" />{{
          recipe.readyInMinutes
        }}
      </div>
    </row>

    <pre class="font-mono">
      {{ recipe }}
    </pre>
  </div>
</template>
