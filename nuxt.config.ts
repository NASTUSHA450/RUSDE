// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: [
    '@formkit/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  formkit: {
    autoImport: true,
    configFile: './my-configs/formkit.config.ts',
  },
})
