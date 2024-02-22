<script setup lang="ts">
import { type Instruction } from '~/schema/recipe';

defineProps<{
  instructions: Instruction[];
}>();
</script>
<template>
  <pre>
        {{ instructions }}
    </pre
  >
</template>
