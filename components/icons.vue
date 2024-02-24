<script setup lang="ts">
defineProps<{
  readyInMinutes: number;
  likes: number;
  healthScore: number;
}>();
</script>

<template>
  <div class="flex gap-1 items-center">
    <Icon name="ph:cooking-pot" class="size-5 animate-pulse text-amber-600" />{{
      readyInMinutes
    }}
    min.
  </div>
  <div class="flex gap-1 items-center">
    <Icon
      name="ic:outline-favorite"
      class="size-5 animate-pulse text-red-600"
    />{{ likes }}
  </div>
  <div class="flex gap-1 items-center">
    <Icon name="ic:twotone-health-and-safety" class="size-5 text-green-600" />{{
      likes
    }}
  </div>
</template>
