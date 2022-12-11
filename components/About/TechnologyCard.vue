<script setup lang="ts">

const show = ref(false)

interface OptionProps {
    image: string
    title: string;
    description: string;
    subtitle: string;
    link: string;
}

const props = defineProps<OptionProps>()

</script>

<template>
    <v-card class="mx-auto">
        <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <v-img :src="image"
                   width="200px"
                   aspect-ratio="1">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0"
                           align="center"
                           justify="center">
                        <v-progress-circular indeterminate
                                             color="grey-lighten-5">
                        </v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-container>
        <v-card-title>
            {{ props.title }}
        </v-card-title>
        <v-card-subtitle>
            {{ props.subtitle }}
        </v-card-subtitle>
        <v-card-actions>
            <v-btn color="orange-lighten-2"
                   variant="text"
                   :href="props.link">
                Dowiedz się więcej
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                   @click="show = !show"></v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                    {{ props.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<style scoped>

</style>