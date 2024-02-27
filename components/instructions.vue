<script setup lang="ts">
import { type Instruction } from '~/schema/recipe';

defineProps<{
  instruction: Instruction;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 p-3 py-4">
    <row direction="row" v-for="{ step, number } in instruction.steps">
      <h4>{{ number }}.</h4>
      <h4>{{ step }}</h4>
    </row>
  </div>
</template>
