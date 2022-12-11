<template>
    <v-navigation-drawer v-model="drawer"
                         :rail="rail"
                         permanent
                         @click="rail = false">
        <v-list-item prepend-avatar="/logos/logo-lg-bw-full.png"
                     title="VAPPS"
                     nav>
            <template v-slot:append>
                <v-btn variant="text"
                       icon="mdi-chevron-left"
                       @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact"
                nav>
            <NuxtLink v-for="[icon, text, link] in links"
                      :key="icon"
                      class="vapps-link-clear"
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

<script setup lang="ts">

const drawer = ref<boolean>()
const rail = ref<boolean>(true)

const links = [
    ['mdi-home', 'Strona Główna', "/"],
    ['mdi-office-building', 'O Nas', "/about"],
    ['mdi-email', 'Kontakt', "/contact"],
]


</script>

<style scoped>

</style>