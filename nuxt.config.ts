// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
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