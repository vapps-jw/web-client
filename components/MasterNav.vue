<template>
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
</template>

<script setup>
const links = [
    ['mdi-home', 'Home', "/"],
    ['mdi-account', 'About', "/about"],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
]


</script>

<style scoped>

</style>