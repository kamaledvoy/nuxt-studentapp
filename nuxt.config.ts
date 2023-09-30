// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: [async (inlineOptions, nuxt) => {}],
  app: {
    head: {
      charset: 'utf8-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Student App',
      meta: [{ name: 'description', content: 'Nuxt Student App Description' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0',
        },
      ],
    },
  },
  ssr: false,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  nitro: {
    devServer: {
      // My files are under src, if yours are in the root you can change this to ./
      watch: ['./'],
    },
  },
  components: [
    {
      global: true,
      dirs: ['~/components/', '~/components/global'],
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
