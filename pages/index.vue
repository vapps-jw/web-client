<template>
    <div>
        <HomeSection title="Tworzymy aplikacje dla każdego"
                     :total-height="titleSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="TEST"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="TEST"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />


        <v-container>
            <div class="d-flex justify-center">
                <div class="text-h4">FAQ</div>
            </div>
            <div class="d-flex justify-center">
                <div class="text-subtitle-2">Odpowiedzi na często zadawane pytania</div>
            </div>

            <v-col class="d-flex justify-center align-center">
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel v-for="i in     3"
                                       :key="i"
                                       title="Item"
                                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-container>

        <DefaultFooter />
    </div>

</template>

<script setup lang="ts">

const titleSectionHeight: number = 300
const defaultSectionHeight: number = 600

</script>

<style scoped>

</style>