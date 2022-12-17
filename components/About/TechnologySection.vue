<template>
    <v-container>
        <v-row>
            <v-col cols="12"
                   class=" d-flex justify-center align-center">
                <v-sheet class="mx-2 bg-transparent">
                    <p class="text-h4 text-center">TECHNOLOGIE KTÓRYCH UŻYWAMY</p>
                </v-sheet>
            </v-col>

            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title=".NET"
                                     subtitle="Narzędzia do tworzenia aplikacji"
                                     link="https://dotnet.microsoft.com/en-us/"
                                     description="Wywodzący się od Microsoft szybki i nowoczesny framework do tworzenia aplikacji"
                                     image="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Nuxt 3"
                                     subtitle="Narzędzia do tworzenia aplikacji"
                                     link="https://nuxt.com/"
                                     description="Jedna z najnowocześniejszych bibliotek do tworzenia aplikacji webowych"
                                     image="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Vuetify 3"
                                     subtitle="Narzędzia do tworzenia aplikacji"
                                     link="https://next.vuetifyjs.com/en/"
                                     description="Najnowsza wersja biblioteki komponentów do szybkiego tworzenia aplikacji webowyck"
                                     image="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Postgresql"
                                     subtitle="Bazy Danych"
                                     link="https://www.postgresql.org/"
                                     description="Sprawdzona i solidna baza danych"
                                     image="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Kubernetes"
                                     subtitle="Chmura"
                                     link="https://kubernetes.io/"
                                     description="Otwarta platforma do zarządzania, automatyzacji i skalowania aplikacji kontenerowych"
                                     image="https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Docker"
                                     subtitle="Chmura"
                                     link="https://www.docker.com/"
                                     description="Otwarte oprogramowanie służące do realizacji wirtualizacji na poziomie systemu operacyjnego"
                                     image="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>