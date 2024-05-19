<template>
        <div class="index-form-wrapper">
            <indexFormComponent />
        </div>

        <h2 class="Intro">Плюсы использования сервиса «Компас» для анализа штрафов</h2>

        <div class="index-grid-container">
            <div class="index-grid-wrapper">
                <indexGridComponent />
            </div>
        </div>

        <h2 class="Documents">Документы</h2>
        <indexSliderComponent />

</template>

<script setup lang="ts">
import indexFormComponent from '../components/indexPageComponents/indexFormComponent.vue';
import indexGridComponent from '~/components/indexPageComponents/indexGridComponent.vue';
import indexSliderComponent from '~/components/indexPageComponents/indexSliderComponent.vue';
</script>

<style scoped>

.Intro {
    font-size: 34px;
    font-weight: 700;
    text-align: center;
    width: 100%;
}

.index-grid-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.index-grid-wrapper {
}

.Documents {
    font-size: 34px;
    margin: 0px;
    font-weight: 700;
    margin-top: 85px;
    text-align: center
}

@media screen and (max-width: 458px) {
    .container {
        display: flex;
        flex-direction: column;
    }

    .index-form-wrapper{
        width: 70%;
        margin: 0;
        padding: 0;

    }

    h2 {
        font-size: 20px;
    }
}
</style>