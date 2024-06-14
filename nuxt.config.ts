// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
      }
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.BE_LOCAL
    },
  }
  , devtools: { enabled: true },
  plugins: [
    { src: '~/lib/prism.ts', mode: 'client' }
  ],
  css: [
    "~/assets/css/main.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})