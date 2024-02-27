// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Recipe App',
    },
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/nuxt'],
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
  imports: {
    dirs: ['./enums'],
  },
  image: {
    providers: {
      spoonacular: {
        provider: '~/providers/spoonacular.ts',
        options: {
          baseURL: 'https://spoonacular.com',
        },
      },
    },
  },
});