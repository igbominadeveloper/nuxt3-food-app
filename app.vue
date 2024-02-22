<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';
import { NavigationLink } from '~/utils/enums';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');

const activeLink = ref(NavigationLink.Ingredients);
const links = [NavigationLink.Ingredients, NavigationLink.Instructions];

const ingredients = resolveComponent('ingredients');
const instructions = resolveComponent('instructions');
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

    <section-row>
      <h1 class="text-xl font-semibold">
        {{ recipe.title }}
      </h1>
      <span v-html="recipe.summary"> </span>
    </section-row>

    <!-- Dish types -->
    <section-row title="Diets" v-if="recipe.diets.length">
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
    </section-row>

    <!-- Diets -->
    <section-row title="Dish types" v-if="recipe.dishTypes.length">
      <section class="flex gap-2 flex-wrap">
        <UBadge
          v-for="label in recipe.dishTypes"
          :key="label"
          :label="label"
          variant="outline"
          size="md"
          class="hover:animate-pulse"
        />
      </section>
    </section-row>

    <section-row direction="row">
      <icons
        :ready-in-minutes="recipe.readyInMinutes"
        :likes="recipe.aggregateLikes"
      />
    </section-row>

    <section>
      <navigation-links
        :links="links"
        :active-link="activeLink"
        @selected="(link:NavigationLink) => activeLink = link"
      />

      <!-- ingredients -->
      <component
        :is="
          activeLink === NavigationLink.Ingredients ? ingredients : instructions
        "
        :ingredients="recipe.extendedIngredients"
        :instructions="recipe.analyzedInstructions"
      />
    </section>

    <pre class="font-mono">
      {{ recipe }}
    </pre>
  </div>
</template>
~/utils/enums
