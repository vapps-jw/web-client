<template>
    <v-container>
        <div class="d-flex justify-center">
            <div class="text-h4">FAQ</div>
        </div>
        <div class="d-flex justify-center">
            <div class="text-subtitle-2">Odpowiedzi na często zadawane pytania</div>
        </div>


        <v-col class="d-flex justify-center align-center">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="i in 3"
                                   :key="i"
                                   title="test1"
                                   text="asasa"></v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>