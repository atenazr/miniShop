// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir:'./src',
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "./tailwind.config.ts",
  },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head:{
      title:'dolphin task',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [// Add this
        { rel: 'stylesheet', href:"https://fonts.googleapis.com/icon?family=Material+Icons"},
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"}
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
