<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-list>
                <NuxtLink v-for="[icon, text, link] in links"
                          :key="icon"
                          style="text-decoration: none; color: inherit;"
                          :to="link">
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon>{{ icon }}</v-icon>
                        </template>
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item>
                </NuxtLink>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <NuxtLoadingIndicator />
            <slot />
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        links: [
            ['mdi-home', 'Home', "/"],
            ['mdi-account', 'About', "/about"],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'],
        ],
    }),
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>