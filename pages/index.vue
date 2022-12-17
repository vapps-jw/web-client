<template>
    <div>
        <HomeSection title="SOFTWARE DEVELOPMENT"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Specjalizujemy się w tworzeniu szerokiej gamy aplikacji, od rozwiązań desktopowych po webowe i mobilne"
                     image="/homePage/earth-blurred.png" />

        <HomeSection title="TWORZENIE OPROGRAMOWANIA"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Obsługujemy pełny cykl rozwoju oprogramowania począwszy od zbierania wymagań, poprzez planowanie, realizację i wykonanie, aż do przekazania Klientowi oraz późniejeszego utrzymywania i wsparcia"
                     image="/homePage/process-blurred.png" />

        <HomeSection title="SZTUCANA INTELIGENCJA"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Tworzymy modele matematyczne pozwalające wyciągać nowe wnioski z posiadnych danych, jak również przewidywaćprzyszłe trendy"
                     image="/homePage/neural-network-blurred.png" />

        <HomeSection title="DORADZTWO TECHNOLOGICZNE"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Oceniamy obecne rozwiązania, przedstawiamy wnioski i sugestie na temat możliwych zmian i ulepszeń istniejących rozwiązań"
                     image="/homePage/advisory-blurred.jpg" />

        <HomeSection title="APLIKACJE MOBILNE"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Towrzymy aplikacje mobilne zintegrowane z istniejącymi lub planowanymi rozwiązaniami"
                     image="/homePage/mobile-blured.png" />

        <HomeSection title="AUTOMATYZACJA PROCESÓW"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Doradzamy jak przeprowadzić cyfryzację i automatyzację istniejących procesów"
                     image="/homePage/automation-blurred.png" />
        <HomeSection title="CLOUD DEVELOPMENT"
                     :total-height="sectionHeight"
                     font-color="text-white"
                     description="Tworzymy od podstawe lub migrujemy istniejące rozwiązania do chury. Promujemy podejscie do tworzenia nowych rozwiązań w oparciu o technologie cloud."
                     image="/homePage/cloud-blurred.png" />
        <HomeFaq />
        <DefaultFooter />
    </div>

</template>

<script setup lang="ts">
const sectionHeight: number = 400

</script>

<style scoped>

</style>