// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['locomotive-scroll/dist/locomotive-scroll.css'],

  styleResources: {
    scss: ['@/assets/styles/variables/_variables.scss'],
  },

  plugins: ['~/plugins/locomotiveScroll.client.js'],

  modules: ['@nuxt/content'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math"; @import "@/assets/styles/app.scss";',
        },
      },
    },
  },

  content: {
    highlight: false,
    markdown: {
      mdc: false,
    },
  },
});
