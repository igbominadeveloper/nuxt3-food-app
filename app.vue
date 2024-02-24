<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';
import { NavigationLink } from '~/utils/enums';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');

const activeLink = ref(NavigationLink.Ingredients);
const links = [NavigationLink.Ingredients, NavigationLink.Instructions];

const Ingredients = resolveComponent('ingredients');
const Instructions = resolveComponent('instructions');
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
      <page-header>{{ recipe.title }}</page-header>
    </section>

    <!-- Diets -->
    <section-row v-if="recipe.dishTypes.length">
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

    <!-- Image -->
    <section title="image-banner" class="w-full h-60">
      <base-image
        :image-url="recipe.image"
        alt="image-banner"
        class="object-cover h-full w-full"
      />
    </section>

    <section-row>
      <div v-html="recipe.summary" class="max-w-[40ch]" />
    </section-row>

    <section-row direction="row">
      <icons
        :ready-in-minutes="recipe.readyInMinutes"
        :likes="recipe.aggregateLikes"
        :health-score="recipe.healthScore"
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
          activeLink === NavigationLink.Ingredients ? Ingredients : Instructions
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
