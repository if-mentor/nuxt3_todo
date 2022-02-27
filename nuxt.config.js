import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  // vite: {
  //   server: {
  //     port: 3001,
  //     hmr: {
  //       // protocol: 'ws',
  //       // host: 'localhost',
  //       port: 3001,
  //     }
  //   }
  // }
})

// // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
