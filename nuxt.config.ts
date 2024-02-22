// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  runtimeConfig: {
    spoonacular: {
      apiKey: '',
    },
  },
  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: 'fs',
          base: 'recipes',
        },
      },
    },
  },
  tailwindcss: {
    editorSupport: true,
  },
});