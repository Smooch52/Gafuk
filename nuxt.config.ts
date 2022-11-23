// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({ 
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    }, 
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1', 
            title: 'Gafuk',
            meta: [
                { name: 'description', content: 'Игровое сообщество Gafuk' }
            ],
        }
    },
    css: [
        '@/assets/css/flexboxgrid.min.css',
        '@/assets/css/main.scss'
    ],
    modules: [
        [
        '@pinia/nuxt',
        {
            autoImports: [
              // automatically imports `defineStore`
              'defineStore', // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
      ]
    ]
})
