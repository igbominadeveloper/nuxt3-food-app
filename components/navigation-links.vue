<script setup lang="ts">
import { NavigationLink } from '~/enums';

defineProps<{
  links: NavigationLink[];
  activeLink: NavigationLink;
}>();

const emit = defineEmits<{
  selected: [link: NavigationLink]; // named tuple syntax
}>();
</script>

<template>
  <row class="mt-8 px-2 border-b border-b-gray-400">
    <ul class="flex items-center gap-4">
      <li
        class="capitalize py-3 px-1 cursor-pointer w-max border-b-2 hover:border-b-black hover:opacity-100 rounded-sm"
        @click="emit('selected', link)"
        :class="{
          'border-b-black': activeLink === link,
          'border-b-transparent opacity-50': activeLink !== link,
        }"
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </li>
    </ul>
  </row>
</template>
