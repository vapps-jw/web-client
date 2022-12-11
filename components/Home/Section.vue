<script setup lang="ts">

interface OptionProps {
    image: string
    title: string;
    description: string;
    fontColor: string;
    totalHeight: number
}

const props = defineProps<OptionProps>()

</script>
     
<template>
    <v-parallax :height="props.totalHeight"
                class="mb-2"
                :src="props.image">
        <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <v-row no-gutters>
                <v-col cols="12"
                       sm="6"
                       class=" d-flex justify-center align-center">
                    <v-sheet class="mx-2 bg-transparent">
                        <p class="text-h4 text-center"
                           :class="fontColor"> {{ props.title }}</p>
                    </v-sheet>
                </v-col>
                <v-col cols="12"
                       sm="6"
                       class="d-flex justify-center align-center">
                    <v-sheet class="mx-2 bg-transparent">
                        <p class="text-subtitle-2 text-center px-5"
                           :class="fontColor"> {{ props.description }}</p>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-parallax>
</template>

