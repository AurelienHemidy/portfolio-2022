// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
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

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
  },

  content: {
    highlight: false,
    markdown: {
      mdc: false,
    },
  },

  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
    ],
    meta: [
      { name: 'msapplication-TileColor', content: '#131313' },
      { name: 'theme-color', content: '#131313' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'color-scheme', content: 'light dark' },
    ],
  },
});
