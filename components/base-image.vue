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
  <NuxtImg :src="imageUrl" :alt="alt" />
</template>
