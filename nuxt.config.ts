// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'static',
  },
  ssr: false,
  css: ["@/assets/css/tailwind.css"],
  modules: [
    '@formkit/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  formkit: {
    autoImport: true,
    configFile: './my-configs/formkit.config.ts',
  },
  googleFonts:{
    families:{
      Manrope: {
        wght:[100,200,300,400,500,600,700,800,900],
      }
    },
    display: 'swap'
  },
  vite: {
    server: {
      allowedHosts: ['rusde.h-dev.ru'],
      hmr: {
        overlay: false, // Отключить оверлей ошибок Vite
      },
    },
  },
})
