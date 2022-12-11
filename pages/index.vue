<template>
    <div>
        <HomeSection title="SOFTWARE DEVELOPMENT"
                     :total-height="titleSectionHeight"
                     description="Specjalizujemy się w tworzeniu szerokiej gamy aplikacji, od rozwiązań desktopowych po webowe i mobilne"
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="Aplikacje Webowe"
                     :total-height="defaultSectionHeight"
                     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, repellat ex error vel quidem quisquam facere dolorem id aspernatur."
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="Aplikacje Desktopowe"
                     :total-height="defaultSectionHeight"
                     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, repellat ex error vel quidem quisquam facere dolorem id aspernatur."
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="E-Commerce"
                     :total-height="defaultSectionHeight"
                     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, repellat ex error vel quidem quisquam facere dolorem id aspernatur."
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="AI"
                     :total-height="defaultSectionHeight"
                     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, repellat ex error vel quidem quisquam facere dolorem id aspernatur."
                     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />

        <HomeSection title="Konsulting"
                     :total-height="defaultSectionHeight"
                     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, repellat ex error vel quidem quisquam facere dolorem id aspernatur."
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