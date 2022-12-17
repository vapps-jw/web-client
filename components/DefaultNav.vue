<template>
    <div>
        <v-navigation-drawer v-model="drawer">
            <v-container>
                <v-list-item prepend-avatar="/logos/logo-lg-bw-full.png"
                             title="VAPPS"
                             nav>
                </v-list-item>
            </v-container>
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

            <v-divider></v-divider>

            <v-list density="compact"
                    nav>
                <a href="https://github.com/vapps-jw"
                   class="vapps-link-clear">
                    <v-list-item class="pa-0 ma-0">
                        <v-list-item>
                            <template v-slot:prepend>
                                <v-icon icon="mdi-github"></v-icon>
                            </template>
                            <v-list-item-title>GitHub</v-list-item-title>
                        </v-list-item>
                    </v-list-item>
                </a>
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
    ['mdi-office-building', 'O Nas', "/about"],
    ['mdi-email', 'Kontakt', "/contact"],
]

</script>