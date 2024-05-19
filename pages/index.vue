<template>
    <div >
        <indexFormComponent />
    </div>
    <h2 class="Intro">Плюсы использования сервиса «Компас» для анализа штрафов</h2>

    <div  class="index-grid-container">
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
    margin: 0px;
    font-weight: 700;
    margin-top: 98px;
    text-align: center
}

.index-grid-container{
    width: 100%;
    display: flex;
    justify-content: center;
}

.index-grid-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
}

.Documents {
    font-size: 34px;
    margin: 0px;
    font-weight: 700;
    margin-top: 85px;
    text-align: center
}
</style>