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
                class="mb-4"
                :src="props.image">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <v-container>
                <v-row no-gutters>
                    <v-col class="d-flex justify-center align-center">
                        <v-sheet class="pa-2 ma-2 bg-transparent">
                            <p class="text-h4"> {{ props.title }}</p>
                        </v-sheet>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="d-flex justify-center align-center">
                        <v-sheet class="pa-2 ma-2 bg-transparent">
                            {{ props.description }}
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-parallax>
</template>

<style scoped>

</style>