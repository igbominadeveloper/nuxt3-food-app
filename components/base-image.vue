<script setup lang="ts">
withDefaults(
  defineProps<{
    imageUrl?: string;
    alt?: string;
  }>(),
  {
    alt: 'image',
  }
);
</script>

<template>
  <NuxtImg :src="imageUrl" :alt="alt" v-if="imageUrl" />
  <div class="bg-black text-white grid place-items-center" v-else>
    Recipe image
  </div>
</template>
