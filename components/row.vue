<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: '',
  }
);
</script>
<template>
  <div class="flex my-4 px-4 flex-col gap-2">
    <h1 class="text-md" v-if="title">{{ title }}</h1>
    <slot />
  </div>
</template>
