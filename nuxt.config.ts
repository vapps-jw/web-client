export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/main.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Vapps",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
