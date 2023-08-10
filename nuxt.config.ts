import { resolve } from "node:path"

export default defineNuxtConfig({
  modules: ["@hebilicious/authjs-nuxt"],
  nitro: {
    preset: "cloudflare-pages"
  },
  runtimeConfig: {
    authJs: {
      secret: "temp_secret"
    },
    google: {
      clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: "https://authjs-cookie.pages.dev",
        verifyClientOnEveryRequest: true
      }
    }
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  }
})
