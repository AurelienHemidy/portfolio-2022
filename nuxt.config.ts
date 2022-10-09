// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/styles/app.scss', 'locomotive-scroll/dist/locomotive-scroll.css'],

  styleResources: {
    scss: ['@/assets/styles/variables/_variables.scss'],
  },

  plugins: ['~/plugins/locomotiveScroll.client.js'],
});
