export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify']
    },
    app: {
        buildAssetsDir: '/assets/',
        // pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'VAPPS',
        },
    },
})
