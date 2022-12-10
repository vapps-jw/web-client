<script setup lang="ts">
import { useDisplay } from 'vuetify'

interface OptionProps {
    image: string
    title: string;
    description: string;
    totalHeight: number
}

const props = defineProps<OptionProps>()

const { name } = useDisplay()

const isMobile = computed(() => {
    switch (name.value) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
        case 'xxl': return false
    }
})

</script>
     
<template>
    <v-parallax :height="props.totalHeight"
                class="mb-2"
                :src="props.image">

        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <v-container>
                <v-row no-gutters
                       v-if="!isMobile">
                    <v-col class=" d-flex justify-center align-center">
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
                <div v-else>
                    <v-col class=" d-flex justify-center align-center">
                        <v-sheet class="pa-2 ma-2 bg-transparent">
                            <p class="text-h4 text-center"> {{ props.title }}</p>
                        </v-sheet>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="d-flex justify-center align-center">
                        <v-sheet class="pa-2 ma-2 bg-transparent">
                            <p class="text-subtitle-1 text-center"> {{ props.description }}</p>

                        </v-sheet>
                    </v-col>
                </div>
            </v-container>
        </div>
    </v-parallax>
</template>

