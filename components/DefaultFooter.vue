<template>
    <v-footer class="bg-transparent">
        <v-row justify="center"
               no-gutters>
            <!-- <v-btn v-for="link in links"
                   :key="link"
                   color="white"
                   variant="text"
                   class="mx-2"
                   rounded="xl">
                {{ link }}
            </v-btn> -->
            <v-col class="text-center mt-4"
                   cols="12">
                {{ new Date().getFullYear() }} - <strong>vapps.pl</strong>
            </v-col>
            <v-col class="text-center mt-1 text-caption"
                   cols="12">
                <p class="text-blue-darken-4">pictures by liuzishan,
                    GarryKillian, rawpixel.com, pvproductions, DCStudio,
                    pressfoto, starline / Freepik</p>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup lang="ts">

// todo: add this later
const links = [
    'Polityka Prywatności',
    'Źródła',
]

</script>