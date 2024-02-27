<script setup lang="ts">
import { type Recipe } from '~/schema/recipe';
import { NavigationLink, Measure, InjectKey } from '~/utils/enums';

const { data: recipe } = await useFetch<Recipe>('/api/recipes');

const activeLink = ref(NavigationLink.Ingredients);
const links = [NavigationLink.Ingredients, NavigationLink.Instructions];

const Ingredients = resolveComponent('ingredients');
const Instructions = resolveComponent('instructions');

// we want to have a button to toggle this value
provide(InjectKey.Measure, Measure.US);
</script>

<template>
  <div
    v-if="recipe"
    class="w-full max-w-6xl bg-white mx-auto max-h-dvh overflow-x-hidden text-black"
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

    <section-row class="lg:grid lg:grid-cols-2">
      <section title="image-banner" class="w-full h-60 lg:h-80">
        <base-image
          :image-url="recipe.image"
          alt="image-banner"
          class="object-cover h-full w-full"
        />
      </section>

      <section-row class="lg:my-0">
        <div v-html="recipe.summary" class="xs:max-w-[40ch] sm:max-w-max" />
      </section-row>
    </section-row>

    <section-row direction="row">
      <icons
        :ready-in-minutes="recipe.readyInMinutes"
        :likes="recipe.aggregateLikes"
        :health-score="recipe.healthScore"
      />
    </section-row>

    <section class="max-w-3xl">
      <navigation-links
        :links="links"
        :active-link="activeLink"
        @selected="(link:NavigationLink) => activeLink = link"
      />

      <!-- ingredients -->
      <Transition name="slide-in">
        <component
          :is="
            activeLink === NavigationLink.Ingredients
              ? Ingredients
              : Instructions
          "
          :ingredients="recipe.extendedIngredients"
          :instructions="recipe.analyzedInstructions"
        />
      </Transition>
    </section>

    <pre class="font-mono">
      {{ recipe }}
    </pre>
  </div>
</template>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transition: all;
  opacity: 0;
  transform: translateX(50px);
}
</style>
