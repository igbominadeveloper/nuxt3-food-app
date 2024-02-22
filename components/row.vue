<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    direction?: 'col' | 'row';
  }>(),
  {
    title: '',
    direction: 'col',
  }
);
</script>

<template>
  <div
    class="flex gap-2"
    :class="{
      'flex-col': direction === 'col',
      'flex-row': direction !== 'col',
    }"
  >
    <slot />
  </div>
</template>
