<template>
  <header class="flex justify-center items-center w-full p-3 py-5 relative">
    <UButton
      class="absolute hover:rounded-full rounded-full left-1 hover:bg-black hover:text-white"
      size="2xs"
      variant="ghost"
      color="black"
    >
      <Icon name="material-symbols:chevron-left" class="size-8" />
    </UButton>
    <slot />
  </header>
</template>
