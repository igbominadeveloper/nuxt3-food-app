<script setup lang="ts">
const { measurement, toggle } = useMeasurement();

console.log(measurement.value, '>>>>>');
</script>

<template>
  <div class="flex">
    <p
      class="uppercase cursor-pointer transition-all duration-300 text-white w-16 h-7 flex items-center justify-center leading-none"
      @click="toggle"
      :class="{
        'bg-green-600': measurement === Measure.US,
        'bg-gray-400': measurement !== Measure.US,
      }"
    >
      {{ Measure.US }}
    </p>
    <p
      class="w-16 h-7 text-white flex items-center cursor-pointer transition-all duration-300 justify-center leading-none"
      :class="{
        'bg-green-600': measurement === Measure.Metric,
        'bg-gray-400': measurement !== Measure.Metric,
      }"
      @click="toggle"
    >
      {{ Measure.Metric }}
    </p>
  </div>
</template>
