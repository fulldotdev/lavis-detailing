import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import favicons from "astro-favicons"
import robotsTxt from "astro-robots-txt"
import { defineConfig, fontProviders } from "astro/config"

export default defineConfig({
  output: "static",
  site: "https://lavis-detailing.nl",
  image: {
    responsiveStyles: true,
    breakpoints: [640, 750, 828, 1080, 1280, 1668, 2048, 2560],
  },
  prefetch: {
    prefetchAll: true,
  },
  devToolbar: {
    enabled: false,
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        cssVariable: "--font-base",
        name: "Geist",
        weights: [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ],
      },
      {
        provider: fontProviders.google(),
        cssVariable: "--font-heading",
        name: "Geist",
        weights: [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ],
      },
    ],
  },
  integrations: [
    robotsTxt(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      i18n: {
        defaultLocale: "nl",
        locales: {
          nl: "nl",
        },
      },
    }),
    favicons({
      input: {
        favicons: ["src/assets/lavis-logo.svg"],
      },
      name: "Lavis Detailing",
      short_name: "Lavis Detailing",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/algemene-voorwaarden': '/policies/algemene-voorwaarden/',
    '/disclaimer': '/policies/disclaimer/',
    '/privacyverklaring': '/policies/privacyverklaring/',
  }
})
