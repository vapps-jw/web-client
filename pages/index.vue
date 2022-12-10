<template>
    <div>
        <HomeSection title="Tworzymy aplikacje skrojone na miarę Twoich potrzeb"
                     :total-height="titleSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="Aplikacje Webowe"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="Aplikacje Desktopowe"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="E-Commerce"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="AI"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="Konsulting"
                     :total-height="defaultSectionHeight"
                     description="sdsdsdsds"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />
        <HomeFaq />
        <DefaultFooter />
    </div>

</template>

<script setup lang="ts">

const titleSectionHeight: number = 400
const defaultSectionHeight: number = 600

</script>

<style scoped>

</style>