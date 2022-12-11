<script setup lang="ts">

interface OptionProps {
    image: string
    title: string;
    description: string;
    totalHeight: number
}

const props = defineProps<OptionProps>()

</script>
     
<template>
    <v-parallax :height="props.totalHeight"
                class="mb-2"
                :src="props.image">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12"
                           sm="5"
                           class=" d-flex justify-center align-center">
                        <v-sheet class="pa-2 ma-2 bg-transparent">
                            <p class="text-h4 text-center"> {{ props.title }}</p>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12"
                           sm="2"
                           class=" d-flex justify-center align-center">
                        <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="12"
                           sm="5"
                           class="d-flex justify-center align-center">
                        <v-sheet class="pa-2 ma-2 bg-transparent">
                            <p class="text-subtitle-2 text-center"> {{ props.description }}</p>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-parallax>
</template>

