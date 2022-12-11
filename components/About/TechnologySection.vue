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
                                     subtitle="Multi-purpose"
                                     link="https://dotnet.microsoft.com/en-us/"
                                     description="Szybki i nowoczesny framework do tworzenia aplikacji"
                                     image="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Nuxt"
                                     subtitle="Front-end"
                                     link="https://nuxt.com/"
                                     description="test"
                                     image="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Vuetify"
                                     subtitle="Front-end"
                                     link="https://next.vuetifyjs.com/en/"
                                     description="test"
                                     image="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Postgresql"
                                     subtitle="Mature Dataabse"
                                     link="https://www.postgresql.org/"
                                     description="test"
                                     image="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Kubernetes"
                                     subtitle="Cloud"
                                     link="https://kubernetes.io/"
                                     description="test"
                                     image="https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png" />
            </v-col>
            <v-col cols="12"
                   sm="4">
                <AboutTechnologyCard title="Docker"
                                     subtitle="Cloud"
                                     link="https://www.docker.com/"
                                     description="test"
                                     image="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>