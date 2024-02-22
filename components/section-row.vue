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
  <row class="my-4 px-4">
    <h1 class="text-md" v-if="title">
      <slot name="title" :title="title">
        {{ title }}
      </slot>
    </h1>
    <slot />
  </row>
</template>
