<template>
    <div>
        <v-navigation-drawer v-model="drawer">
            <v-img src="/logos/logo-sm-wide.png"
                   cover></v-img>
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
        </v-app-bar>
    </div>
</template>

<script setup lang="ts">

const drawer = ref<boolean>()
const links = [
    ['mdi-home', 'Strona Główna', "/"],
    ['mdi-account', 'O Nas', "/about"],
]

</script>

<style scoped>

</style>