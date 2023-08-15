# Example of Nuxt with AuthJs Nuxt

- Cloudflare Pages : `https://authjs-cookie.pages.dev`
- Vercel Edge : `https://authjs-cookie.pages.dev`

To deploy to Cloudflare Pages, you need to set the following environment variables:

- NUXT_GOOGLE_CLIENT_ID
- NUXT_GOOGLE_CLIENT_SECRET

There's an example `nuxt.config.cfp.ts` that you can use for your own `nuxt.config.ts`.

Make sure the `baseUrl` matches your deployed URL.
