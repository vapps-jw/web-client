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



        <HomeFaq />
        <DefaultFooter />
    </div>

</template>

<script setup lang="ts">

const titleSectionHeight: number = 300
const defaultSectionHeight: number = 600

</script>

<style scoped>

</style>