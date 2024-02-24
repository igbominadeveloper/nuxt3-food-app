<template>
  <header class="flex justify-center items-center w-full p-3 py-5 relative">
    <UButton
      class="absolute left-4 hover:bg-black hover:text-white"
      size="2xs"
      variant="ghost"
      color="black"
    >
      <Icon name="material-symbols:chevron-left" class="size-8" />
    </UButton>
    <span class="text-lg capitalize">
      <slot />
    </span>
  </header>
</template>
